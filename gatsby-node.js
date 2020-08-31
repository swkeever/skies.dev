/* eslint-disable no-restricted-syntax */
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });

    createNodeField({
      // Name of the field you are adding
      name: 'slug',
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `/blog${value}`,
    });
  }
};

const blogCategories = require('./src/utils/blog-categories');

exports.createPages = async ({ graphql, actions, reporter }) => {
  // De-structure the createPage function from the actions object
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx(
        sort: { order: DESC, fields: frontmatter___date }
        filter: { fileAbsolutePath: { regex: "/content/" } }
      ) {
        edges {
          node {
            id
            timeToRead
            rawBody
            frontmatter {
              title
              date
              category
              description
              image {
                childImageSharp {
                  fluid(maxWidth: 1280) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
              }
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  // Create blog post pages.
  // console.log(JSON.stringify(result, null, 4));
  const posts = result.data.allMdx.edges;
  const mappedBlogs = posts.map(({ node }) => {
    const dateFormat = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(node.frontmatter.date));
    return {
      id: node.id,
      tags: node.frontmatter.tags,
      timeToRead: node.timeToRead,
      title: node.frontmatter.title,
      slug: node.fields.slug,
      description: node.frontmatter.description,
      date: dateFormat,
      body: node.rawBody,
      category: blogCategories[node.frontmatter.category],
      image: node.frontmatter.image.childImageSharp.fluid,
    };
  });

  // you'll call `createPage` for each result
  posts.forEach(({ node }, i) => {
    const prev = posts[i === 0 ? posts.length - 1 : i - 1].node;
    const next = posts[i === posts.length - 1 ? 0 : i + 1].node;

    // finds the top 4 most similar blogs
    // based on the blog tags.
    function getSimilarBlogs() {
      const allBlogs = mappedBlogs
        .filter((b) => b.id !== node.id)
        .map((b) => ({
          ...b,
          count: 0,
        }));
      const { tags } = mappedBlogs[i];

      for (const blog of allBlogs) {
        for (const tag of tags) {
          if (blog.tags.includes(tag)) {
            blog.count += 1;
          }
        }
      }

      const res = allBlogs.sort((a, b) => b.count - a.count).slice(0, 4);

      res.forEach((b) => b.count);

      return res;
    }

    const similarBlogs = getSimilarBlogs(
      mappedBlogs[i].tags,
      mappedBlogs.slice(i, 1),
    );

    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve('./src/templates/blogTemplate.tsx'),
      // You can use the values in this context in
      // our page layout component
      context: {
        id: node.id,
        prev,
        next,
        similarBlogs,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@lib': path.resolve(__dirname, 'src/lib'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@templates': path.resolve(__dirname, 'src/templates'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@assets': path.resolve(__dirname, 'assets'),
      },
    },
  });
};
