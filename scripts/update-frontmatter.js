/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const util = require('util');

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

// this function will change depending on on the
// current shape of the frontmatter, and the desired shape
function transformFrontmatter(front) {}

async function main() {
  const blogFiles = await getContent();
  blogFiles.forEach((file) => {
    const source = fs.readFileSync(file);
    const { content, data } = matter(source);
    const frontTransformed = transformFrontmatter(data);
    console.log(frontTransformed);
    if (util.isDeepStrictEqual(data, frontTransformed)) {
      console.info('frontmatter already transformed');
      return;
    }
    const writeToPath = file.replace(READ_PATH, WRITE_PATH);
    console.log('writing to', writeToPath);
  });
}

main();
