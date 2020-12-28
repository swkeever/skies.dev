/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const blogCategories = require('./src/utils/blog-categories');
const blogTags = require('./src/utils/blog-tags');
const stopWords = require('./src/utils/stop-words');
const authors = require('./src/utils/authors');

const weights = new Map();

for (const blogTagProps of blogTags) {
  weights.set(blogTagProps.name, blogTagProps.weight);
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  actions.createNode();

  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({
      node,
      getNode,
    });

    let pathname = node.fileAbsolutePath.includes('/content/')
      ? `/blog${value}`
      : value;

    if (pathname.endsWith('/') && pathname.length > 1) {
      pathname = pathname.substring(0, pathname.length - 1);
    }

    console.info('onCreateNode:', pathname);

    createNodeField({
      // Name of the field you are adding
      name: 'slug',
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: pathname,
    });

    const author = {
      ...authors[node.frontmatter.authorId],
    };

    //
    // We have to use the relative path from the
    // MDX file to get ImageSharp to work.
    //
    // https://github.com/gatsbyjs/gatsby/issues/11092#issuecomment-454779080
    author.image = `../../images/${author.image}`;

    createNodeField({
      name: 'category',
      node,
      value: blogCategories[node.frontmatter.categoryId],
    });

    createNodeField({
      name: 'author',
      node,
      value: author, // TODO: add once we get frontmatter
    });
  }
};

function getSimilarBlogs(nodes, idx) {
  const allBlogs = nodes
    .filter((b) => b.id !== nodes[idx].id)
    .map((b) => ({
      ...b,
      count: 0,
    }));

  // this are the blogs we are comparing against
  const { tags, title } = nodes[idx].frontmatter;
  const tokens = title.split(' ').filter((s) => !stopWords.includes(s));

  for (const blog of allBlogs) {
    let allWeights = 0;
    for (const tag of tags) {
      // give a boost for each matching tag
      const weight = weights.get(tag);
      allWeights += weight;
      if (blog.frontmatter.tags.includes(tag)) {
        blog.count += weight;
      }

      // give an extra boost if there are keyword matches in the title
      const blogTokens = blog.frontmatter.title
        .split(' ')
        .filter((s) => !stopWords.includes(s));
      for (const t of blogTokens) {
        if (tokens.includes(t)) {
          blog.count += 1;
        }
      }
    }
    // normalize
    blog.count /= allWeights;
  }

  const res = allBlogs.sort((a, b) => b.count - a.count).slice(0, 6);

  res.forEach((b) => b.count);

  return res;
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  // De-structure the createPage function from the actions object
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/content/" } }) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            tags
            title
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const { nodes } = result.data.allMdx;

  // you'll call `createPage` for each result
  nodes.forEach((node, i) => {
    // finds the top 4 most similar blogs
    // based on the blog tags.
    const similarBlogs = getSimilarBlogs(nodes, i);

    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve('./src/templates/blog-template.tsx'),
      // You can use the values in this context in
      // our page layout component
      context: {
        id: nodes[i].id,
        similarBlogs: similarBlogs.map((b) => b.id).reverse(),
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'content'),
        'node_modules',
      ],
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@lib': path.resolve(__dirname, 'src/lib'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@templates': path.resolve(__dirname, 'src/templates'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@assets': path.resolve(__dirname, 'assets'),
        '@content': path.resolve(__dirname, 'content'),
      },
    },
  });
};
