/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
const inquirer = require('inquirer');
const fs = require('fs');
const https = require('https');
const slugger = require('github-slugger');
const chalk = require('chalk');
const blogCategories = require('../src/utils/blog-categories');
const blogTags = require('../src/utils/blog-tags');

const nonEmpty = (input) => input !== '';

function getTodaysDate() {
  const d = new Date();
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [year, month, day].join('-');
}

function validURL(str) {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' // protocol
    + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' // domain name
    + '((\\d{1,3}\\.){3}\\d{1,3}))' // OR ip (v4) address
    + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' // port and path
    + '(\\?[;&a-z\\d%_.~+=-]*)?' // query string
      + '(\\#[-a-z\\d_]*)?$',
    'i',
  ); // fragment locator
  return !!pattern.test(str) && str.includes('images.unsplash.com/');
}

function toTitleCase(input) {
  const smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|v.?|vs.?|via)$/i;
  const alphanumericPattern = /([A-Za-z0-9\u00C0-\u00FF])/;
  const wordSeparators = /([ :–—-])/;

  return input
    .split(wordSeparators)
    .map((current, index, array) => {
      if (
        /* Check for small words */
        current.search(smallWords) > -1
        /* Skip first and last word */
        && index !== 0
        && index !== array.length - 1
        /* Ignore title end and subtitle start */
        && array[index - 3] !== ':'
        && array[index + 1] !== ':'
        /* Ignore small words that start a hyphenated phrase */
        && (array[index + 1] !== '-'
          || (array[index - 1] === '-' && array[index + 1] === '-'))
      ) {
        return current.toLowerCase();
      }

      /* Ignore intentional capitalization */
      if (current.substr(1).search(/[A-Z]|\../) > -1) {
        return current;
      }

      /* Ignore URLs */
      if (array[index + 1] === ':' && array[index + 2] !== '') {
        return current;
      }

      /* Capitalize the first letter */
      return current.replace(alphanumericPattern, (match) => match.toUpperCase());
    })
    .join('');
}

function generateFrontmatter(answers) {
  let frontmatter = '---\n';
  for (const [key, value] of Object.entries(answers)) {
    if (['keywords', 'tags'].includes(key)) {
      frontmatter += `${key}:\n`;
      for (const x of value) {
        frontmatter += `  - ${x}\n`;
      }
    } else if (key === 'description') {
      frontmatter += `description:\n  ${value}\n`;
    } else if (key !== 'image' && key !== 'slug') {
      frontmatter += `${key}: ${value}\n`;
    }
  }
  frontmatter += 'image: index.jpg\n---\n\n';
  return frontmatter;
}

function downloadImage(url, dir) {
  const imagePath = `${dir}/index.jpg`;
  const file = fs.createWriteStream(imagePath);
  https.get(url, (response) => {
    response.pipe(file);
  });
}

console.log(
  chalk.bgBlue.black.bold('SETUP'),
  'Answer the following questions to set up a new blog. You can always change your answers later.\n',
);
inquirer
  .prompt([
    {
      type: 'input',
      name: 'date',
      message: 'When will the blog be published? (YYYY-MM-DD format)',
      default: getTodaysDate(),
      // eslint-disable-next-line no-restricted-globals
      validate: (input) => !isNaN(Date.parse(input)) && input.length === 'YYYY-MM-DD'.length,
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of the blog?',
      filter: toTitleCase,
      validate: nonEmpty,
    },

    {
      type: 'input',
      name: 'description',
      message: 'Enter a short description for the blog.',
      validate: nonEmpty,
    },
    {
      type: 'list',
      name: 'category',
      message: 'How would you categorize this blog? (choose one)',
      choices: blogCategories.map((cat, idx) => ({
        name: cat.name,
        value: idx,
      })),
    },
    {
      type: 'input',
      name: 'keywords',
      message:
        'Enter *comma-separated* keywords for SEO juice. (see https://ads.google.com/aw/keywordplanner/home for inspiration)',
      filter: (input) => input
        .split(',')
        .map((s) => s.trim())
        .filter((s) => !!s),
      validate: (input) => input.length > 0,
    },
    {
      type: 'checkbox',
      name: 'tags',
      message: 'Select tags for market segmentation',
      choices: blogTags.map(({ name }) => ({ name })),
      loop: false,
      validate: (input) => input.length > 0,
    },
    {
      type: 'input',
      name: 'image',
      message:
        "Enter an Unsplash URL for the blog's hero image. (URL should include images.unsplash.com)",
      validate: validURL,
    },
  ])
  .then((intermediateAnswers) => {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'slug',
          message: 'Finally, enter a slug for the blog.',
          default: slugger.slug(intermediateAnswers.title),
          validate: nonEmpty,
        },
      ])
      .then((moreAnswers) => {
        const answers = { ...intermediateAnswers, ...moreAnswers };
        const dir = `./content/${answers.slug}`;
        if (fs.existsSync(dir)) {
          console.error(chalk.bgRed.bold('ERROR'), `${dir} already exists.`);
          process.exit(1);
        }
        fs.mkdirSync(dir);
        fs.writeFileSync(`${dir}/index.mdx`, generateFrontmatter(answers));
        downloadImage(answers.image, dir);
        console.log(
          chalk.bgGreen.black.bold('SUCCESS'),
          `Blog template generated in ${dir}`,
        );
      });
  });
