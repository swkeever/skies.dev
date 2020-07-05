---
slug: color-generator
date: 2020-07-04
title: Let's Build a Color Palette Generator
description:
  In this article, we will build a color palette generator and publish it on
  GitHub.
tags:
  - Software Engineering
  - Web Development
image: index.jpg
---

We start by creating a React app.

```bash
npx create-react-app color-generator
```

Then we'll start our dev server with

```bash
npm run start
```

Let's go ahead and remove all the files inside of `src` so that we're left with

- `src/App.js`
- `src/index.js`

such that

```javascript
// App.js
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Colors</h1>
    </div>
  );
}

export default App;
```

```javascript
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

Good. Next, I'm going to use Tailwind CSS to easily style the layout. To make
things super simple, I will link to the full stylesheet located on their CDN.
This way, we can get coding right away and not worry too much about setup.

We will update our `public/index.html` to the following:

````html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content="Color generator tool for building color palettes and design systems."
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>Color Generator</title>
    <link
      href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```html Next, let's put our application state inside of `App.js`. We will do
this by defining an object with our color palette configuration.
````
