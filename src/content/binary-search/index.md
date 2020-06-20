---
slug: binary-search
date: 2020-06-19
title: Learn about the Binary Search Algorithm with the Dictionary
description: Binary search can greatly speed up the execution of your programs
tags:
  - Algorithms
  - Computer Science
siteImage: index.png
socialImage: social.png
---

## What is binary search?

Binary search is an **efficient search algorithm on a sorted array of
elements.** The binary search algorithm comes from a family of algorithms called
[divide and conquer](https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms),
but the terminology isn't too important for this discussion.

Instead of writing all the code for binary search, I want to convince you that
you _probably already use_ the algorithm in your life.

## Binary search in the real world

Let's say you are at an AirBnB in a remote location on a weekend getaway. You
want to disconnect yourself for a while, so you go to a place where there's no
internet. You want to use this weekend to read some books you've been wanting to
read.

You are reading your book one night and you stumble on a word that you don't
know. The word happened to be "Octothorpe".

You walk over to the bookshelf the AirBnB host provided to look for a
dictionary. Ah, there it is.

You sit down and open up the dictionary to begin searching for "octothorpe".
What do you do?

Well, you know the words in the dictionary are _sorted_, so you probably open up
the dictionary somewhere to somewhere in the middle.

You see words on the page you opened up begin with the letter "G". "Octothorpe"
cannot possibly be on any page earlier than the page with the "G" words. So you
_completely disregard_ the pages earlier than the one with the "G" words.

So, what do you do? You repeat the process on the remaining pages _after_ the
page with the "G" words. You keep repeating this process until you have found
the page with "octothorpe".

This is exactly how binary search works. Binary search looks in the middle of a
sorted array of elements. If the key you are looking for is greater than the
value that happened to be in the middle, then you can safely disregard all the
previous elements.

This is what makes binary search so efficient. At every step of binary search,
you are eliminating _half_ of the remaining elements. Eventually, the search
space will be a single element, and the algorithm will terminate.

## Still confused?

Check out this excellent explanation from Harvard's
[CS50 course](https://www.edx.org/course/cs50s-introduction-to-computer-science).

`youtube:https://www.youtube.com/embed/YzT8zDPihmc`
