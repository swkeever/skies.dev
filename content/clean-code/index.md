---
slug: clean-code
date: 2020-06-29
title: How to Write Clean Code
description:
  Come check out common patterns to keep in mind when writing clean code.
tags:
  - Web Development
  - React
  - Gatsby
  - Next
image: index.jpg
---

What constitutes as clean code? Is it

- Functions that do one thing well?
- Easy-to-understand variable names and abstractions?
- Reduced amount of duplication in the code?

The thing is, there is no such thing as code that would be considered clean
universally. What _Developer A_ thinks is clean code, _Developer B_ scoffs at.
There are **tribal wars** over what people believe is the correct way to write
code. We argue over

- The use of semicolons in JavaScript
- Whether you should indent with tabs or spaces
- Vim or Emacs (but really... you should be using VS Code)

Most of the time it's just for some internet humor.

So is there such thing as clean code? Yes. But what is considered clean code is
going to vary from project to project, team to team. Many projects have tooling
that make it easy to write code that conforms to a particular **style guide**.

<aside>
<p>A <strong>style guide</strong> is a set of rules that specify how code should be formatted.</p>
</aside>

## Use Lint Tools

![tools](tools.jpg)

What is deemed “clean code” is going to vary from project to project. If you’re
working on a project with a team, there will probably be a defined style guide
and **lint tools** to help enforce it.

<aside>
<p>
A <strong>linter</strong> is software that modifies code to enforce the rules of a style guide.
</p>
</aside>

If you are working on your own project that you plan to grow over time, you
should take the time to set up lint tooling. You can use GitHub to
[create a template repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-template-repository)
so that you don’t have to worry about setting it up each time.

### The Tools I Like

Here are some linting tools I like to use in greenfield projects:

- For **C/C++**, [Clang-Tidy](https://clang.llvm.org/extra/clang-tidy/).
- For **Java**, I like IntelliJ's ability to
  [reformat and rearrange code](https://www.jetbrains.com/help/idea/reformat-and-rearrange-code.html).
- For **JavaScript**, [ESLint](https://eslint.org/) does a good job.
- For **Python**, VS Code has
  [good support](https://code.visualstudio.com/docs/python/linting).
- For **Markdown**, **HTML**, **JSON**, and **YAML**,
  [Prettier](https://prettier.io/) is a good option with good
  [VS Code support](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

Once you’ve picked a linter for your project, you now need to configure it with
a style guide. Here are some popular open-source style guides I like:

- For **C/C++**,
  [Google Style Guide](https://google.github.io/styleguide/cppguide.html)
- For **Java**,
  [Google Style Guide](https://google.github.io/styleguide/javaguide.html)
- For **JavaScript**, [AirBnb Style GUide](https://github.com/airbnb/javascript)
- For **Python**, [PEP 8 Style Guide](https://www.python.org/dev/peps/pep-0008/)

<aside>
<p>
How to set up lint tooling is beyond the scope of this article. Refer to
documentation to learn how to set up the tools you choose.
</p>
</aside>

## Learn to Write Clean Code

![clean office](office.jpg)

[Clean Code](https://learning.oreilly.com/library/view/clean-code/9780136083238/)
by Uncle Bob Martin is a popular book for those interested in learning some of
the commonly agreed-upon principles of writing clean code.

However, it is important to recognize what _you think is clean code may not be
what someone else thinks is clean code_. For example, after reading Clean Code,
I was excited to start applying the code style Martin taught. The style is
extremely modular, with very few lines of code per method. Small classes, small
everything.

I was hooked. The thought of getting potential code reuse down the line excited
me. I thought the abstractions and names I gave made the code clearer to read
and easier to understand.

The developer I was working with didn’t agree. There were methods and
abstractions everywhere for everything. You had to bounce around the text file
to understand what was going on in the code. _There was more complexity in how
everything interacted._

From this experience, I learned what I believe is clean code may not be what
other developers believe is clean code. In retrospect, an agreed upon style
guide could have probably prevented this issue and enabled a coding environment
that made us both more productive.

## Write Clean Code

![a white and blue wall](wall.jpg)

In summary,

- Talk with your team about your project’s style guide.
- Use lint tools to conform to your project’s style guide.
- Read
  [Martin’s book](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)
  to learn the principles of writing clean code.

To write clean code, your safest bet is to conform to the style guide of the
project. If there is no style guide defined, adopt one. Use lint tooling to
automate enforcing it. At the end of the day, our goal is shipping software for
our users, not styling text files.
