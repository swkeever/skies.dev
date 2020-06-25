---
slug: gatsby-tailwind-purgecss
date: 2020-06-23
title: How To Use PurgeCSS with Gatsby and Tailwind CSS
description:
  How to tell PurgeCSS to not remove styles that are sourced from markdown
  files.
tags:
  - Gatsby
  - Tailwind CSS
image: index.jpg
---

## Problem

The way I source articles on this site is by dangerously setting the HTML after
sourcing the content from markdown files.

```jsx
// article.js
function Article() {
  // get markdown html data
  return <article dangerouslySetInnerHTML={{ __html: html }} />;
}
```

I'm using [Tailwind CSS](https://tailwindcss.com/) to provide some base styles
for the article.

```css
@tailwind base;

/* rest of the base styles... */

blockquote {
  @apply px-4 py-2 border-l border-l-blue;
}

@tailwind components;
@tailwind utilities;
```

When you run PurgeCSS, the PurgeCSS parser does not see any `<blockquote>`
elements inside your source code. It cannot infer you wrote a `<blockquote>`
inside your markdown file that was rendered out in `article.js`.

## Non-solution

In
[Tailwind's docs](https://tailwindcss.com/docs/controlling-file-size/#purgecss-options),
they suggest putting your PurgeCSS whitelist in `tailwind.config.js`.

```javascript
// tailwind.config.js
module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.jsx',
      './src/**/*.tsx',
      './src/**/*.js',
      './src/**/*.ts',
    ],
    options: {
      whitelist: ['blockquote'],
    },
  },
  // ...
};
```

Unfortunately, I couldn't get this approach to work when sourcing markdown files
with Gatsby. Elements produced by the dangerously setting HTML are still purged.
Feel free to revert your PurgeCSS settings in `tailwind.config.js`.

```javascript
// tailwind.config.js
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.jsx',
    './src/**/*.tsx',
    './src/**/*.js',
    './src/**/*.ts',
  ],
  // ...
};
```

## Solution

You need to install a plugin to configure PurgeCSS.

```bash
npm i gatsby-plugin-purgecss
```

Then, in `gatsby-config.js`:

```javascript
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
        whitelist: ['blockquote'],
      },
    },
  ],
};
```

And that's all there is to it. There are additional options you can pass into
the PurgeCSS configuration. I will refer you to the
[documentation](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/) for
that. This, however, should be the minimum to get you set up so that PurgeCSS
doesn't purge selectors you want to keep.
