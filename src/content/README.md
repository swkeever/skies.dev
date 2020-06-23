# How to post an article ✍️

Let's say you are creating the article that will be located at
`https://skies.dev/blog/my-article`.

1. Create a new folder in `/src/content/my-article`. From this point on, all the
   files discussed are located in this directory. 📁
2. Copy/paste the following frontmatter and place it at the top of a file named
   `index.md`.

   ```markdown
   ---
   slug: my-article
   date: YYYY-MM-DD
   title: My Article's Title
   description: My article's description.
   tags:
     - Computer Science
     - Software Engineering
   siteImage: index.png
   socialImage: social.png
   ---
   ```

3. Pick out a graphic for your article at
   [unDraw.co](https://undraw.co/illustrations). 🔥 Set the color (in unDraw) to
   `#4299E1`. Download as SVG and PNG and save as `index.svg` and `social.png`
   respectively.
4. Go to this [site](https://svgtopng.com/) to convert `index.svg` to a PNG with
   a transparent background. Save as `index.png`.
5. Write your article! When you're done, submit a pull request so we can push
   your article to the site. ✌️
