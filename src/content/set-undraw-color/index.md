---
slug: set-undraw-color
date: 2020-06-20
title: How To Make unDraw.co Remember Your Brand Color
description:
  This guide will show you how extend unDraw.io to remember your brand's color.
tags:
  - JavaScript
siteImage: index.png
socialImage: social.png
---

## Introduction

[unDraw.co](https://undraw.co/) is an amazing tool for free vector graphics. All
of the graphics you see on this site are sourced from unDraw.

A cool feature of unDraw is it lets you put in a hex value for your brand's
color. This way, you the SVG you source from unDraw will be consistent with your
site's colors.

Unfortunately, unDraw defaults to a purple color every time you refresh the
page. So every time you go to unDraw, you have to reenter your brand color hex
code.

We want to extend the functionality of unDraw by caching our brand color in
`localStorage`. When you visit unDraw, we will use JavaScript to inject our
brand color into unDraw automatically.

## Getting started

First thing I want to do is inspect the HTML for the color picker.

![Chrome inspector](inspector.png)

I need to select the `input` element that is a child of the `div` with class
`page__colorSelector__switch`.
