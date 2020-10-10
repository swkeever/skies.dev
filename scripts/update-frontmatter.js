/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const util = require('util');
const YAML = require('yaml');
const blogCategories = require('../src/utils/blog-categories');
const authors = require('../src/utils/authors');

const READ_PATH = path.join(process.cwd(), 'content');
const WRITE_PATH = path.join(process.cwd(), 'tmp_content');

// https://gist.github.com/lovasoa/8691344
async function* walk(dir) {
  for await (const d of await fs.promises.opendir(dir)) {
    const entry = path.join(dir, d.name);
    if (d.isDirectory()) yield* walk(entry);
    else if (d.isFile()) yield entry;
  }
}

async function getContent() {
  const files = [];
  for await (const file of walk(READ_PATH)) {
    files.push(file);
  }
  return files.filter((f) => f.endsWith('/index.mdx'));
}

function getDateFormat(dateObject) {
  // adjust 0 before single digit date
  const date = (`0${dateObject.getDate()}`).slice(-2);

  // current month
  const month = (`0${dateObject.getMonth() + 1}`).slice(-2);

  // current year
  const year = dateObject.getFullYear();

  return `${year}-${month}-${date}`;
}

// this function will change depending on on the
// current shape of the frontmatter, and the desired shape
function transformFrontmatter(front) {
  return {
    date: {
      published: getDateFormat(front.datePublished),
      modified: getDateFormat(front.dateModified),
    },
    title: front.title,
    description: front.description,
    categoryId: front.category,
    authorId: 0,
    keywords: front.keywords,
    tags: front.tags,
    image: {
      src: front.imageUrl,
      photographer: front.imagePhotographer,
    },
  };
}

const TESTING = false;
async function main() {
  const blogFiles = await getContent();
  blogFiles.forEach((file) => {
    const source = fs.readFileSync(file);
    const { content, data } = matter(source);
    const frontTransformed = transformFrontmatter(data);

    if (TESTING) {
      const dir = `./tmp_content/${file.substring(
        file.indexOf('content/') + 'content/'.length,
        file.indexOf('/index.mdx'),
      )}/`;
      console.log(dir);

      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    }

    const writeToPath = TESTING
      ? file.replace(READ_PATH, WRITE_PATH)
      : READ_PATH;

    let writeData = '---\n';
    writeData += YAML.stringify(frontTransformed);
    writeData += '---\n';
    writeData += content;

    fs.writeFileSync(writeToPath, writeData);
  });
}

main();
