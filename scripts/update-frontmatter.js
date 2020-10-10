/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { ncp } = require('ncp');
const { getDateFormat, generateFrontmatter } = require('./blog-utils');

const SRC_DIR = 'content';
const DST_DIR = 'tmp_content';

// Source: https://gist.github.com/lovasoa/8691344
async function* walk(dir) {
  for await (const d of await fs.promises.opendir(dir)) {
    const entry = path.join(dir, d.name);
    if (d.isDirectory()) yield* walk(entry);
    else if (d.isFile()) yield entry;
  }
}

// Returns all MDX files
async function getContent() {
  const files = [];
  for await (const file of walk(SRC_DIR)) {
    files.push(file);
  }
  return files.filter((f) => f.endsWith('/index.mdx'));
}

// this function will change depending on on the
// current shape of the frontmatter, and the desired shape
function transformFrontmatter(front) {
  return {
    date: {
      published: getDateFormat(front.date.published),
      modified: getDateFormat(front.date.modified),
    },
    title: front.title,
    description: front.description,
    categoryId: front.categoryId,
    authorId: front.authorId,
    keywords: front.keywords,
    tags: front.tags,
    image: {
      src: {
        local: 'index.jpg',
        external: front.image.src.external,
      },
      photographer: front.image.photographer,
    },
  };
}

//
// *HOW TO USE SAFELY*
//
// Run the `update-frontmatter` script to generate files to tmp_content
//
// Once you're happy with the transformation
//
// Remove the current content/ folder and rename tmp_content/ to content/
//
async function main() {
  // copies folder
  await ncp(SRC_DIR, DST_DIR);

  // gets blog post filenames
  const files = await getContent();

  files.forEach((file) => {
    const source = fs.readFileSync(file);
    const { content, data } = matter(source);
    const frontTransformed = transformFrontmatter(data);
    const writePath = file.replace(SRC_DIR, DST_DIR);
    const writeData = generateFrontmatter(frontTransformed) + content;
    fs.writeFileSync(writePath, writeData);
  });
}

main();
