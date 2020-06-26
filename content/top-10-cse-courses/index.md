---
slug: top-10-cse-courses
date: 2020-06-25
title: Top 10 Computer Science Courses
description:
  Check out the top 10 computer science courses and pointers to resources to
  help learn each course on your own.
tags:
  - College
  - Computer Science
image: index.jpg
---

This article is geared toward 3rd-year computer science students or people that
have some basic programming experience. You should know about loops,
conditionals, function calls, exceptions, arrays, maps, and objects at a
minimum. If you are a beginner, complete
[this course](https://java-programming.mooc.fi/) first before tackling the
following material.

If you aren't in a computer science program, that's OK! There are plenty of free
resources to learn computer science on your own. I will point you to online
courses and projects that you can complete for each course I list. The resources
and projects are aimed to resemble what you would find in a university computer
science program.

## 1. Data Structures & Algorithms

![structure](struc.jpg)

It doesn't matter what part of the stack you are working on, software engineers
need to develop data structures to represent models of the world. In this
course, you will learn what it means to create abstractions, and you will learn
about the abstractions that are commonly used to solve problems. A course on
data structures and algorithms will teach you

- basic structures like lists, [stacks](/blog/stacks), and queues
- more complex structures like trees and graphs
- basic sorting and searching algorithms

This course directly teaches skills that are often tested during software
engineer interviews, so strictly from a getting-a-job point of view, this course
is extremely valuable.

For learning about data structures and algorithms, check out
[Princeton's course](https://courses.cs.washington.edu/courses/cse421/). This
course will give you experience applying algorithms to real-world problems. Once
you're comfortable with the basics, [Leetcode](https://leetcode.com/) has an
endless supply of programming problems you can practice to your heart's content.

<aside>
<p>
Not sure what a software engineering interview is like? Here is an 
<a href="https://www.youtube.com/watch?v=XKu_SEDAykw" target="_blank" rel="noopener noreferrer">example</a> provided by Google.
</p>
</aside>

## 2. Analysis of Algorithms

![spiral staircase](algo.jpg)

You've written the perfect solution to your program. How do you know your
algorithm is correct? You can write unit tests, but how do you know the
algorithm is correct for _all possible inputs_? For this, you would need to
_prove_ your algorithm is correct. A course on analysis of algorithms will teach
you how to design algorithms and rigorously prove their correctness. You will
learn about

- graph theory
- greedy algorithms
- dynamic programming
- max flow, min cut

Check out
[Stanford's course](https://www.coursera.org/specializations/algorithms?) on
algorithms to get you started.

## 3. Programming Languages

![programming language](pl.jpg)

The goal of a course on programming languages is not to simply teach new
languages. The goal is to teach _about_ programming languages. Programming
languages come and go. Knowing about programming paradigms allows programmers to
quickly pick up new languages because they are familiar with the underlying
concepts. A course on programming languages will teach you about

- paradigms such as functional and object-oriented
- dynamically-typed and statically-typed languages
- idioms like closures, lexical scope, and mutation.

To learn programming languages, check out the
[University of Washington's course](https://www.coursera.org/learn/programming-languages?).

## 4. Computer Architecture

![computer hardware](arch.jpg)

Without a CPU, your code is just syntax in a text file. A course in computer
architecture will give you a valuable perspective when working on software. For
instance, you'll learn that disk is slower than main memory, and main memory is
slower than an L1 cache. You'll learn that performance optimizations in hardware
have even led to some critical security vulnerabilities, like
[Meldown and Spectre](https://meltdownattack.com/). You'll understand why we use
GPUs to process matrices of data for machine learning. In a course on computer
architecture, expect to learn about

- assembly and machine code
- memory hierarchy
- CPU design patterns such as pipelining, branch prediction, and hardware
  register renaming

To learn computer architecture, check out the popular
[Nand to Tetris](https://www.coursera.org/learn/build-a-computer?) and its
supplementing
[Coursera course](https://www.coursera.org/learn/build-a-computer).

## 5. Operating Systems

![iOS operating system](os.jpg)

An operating system is software that sits in the middle of your applications and
your computer architecture. An OS is responsible for a lot of things, like
concurrently running all your applications seamlessly, storing your files on
disk, and handling I/O. An OS is naturally a complex piece of software in order
to wear all of these hats. A course on operating systems is valuable in that it
forces you to design solutions to complex problems.

To learn operating systems, complete the
[PintOS](https://web.stanford.edu/class/cs140/projects/pintos/pintos.html) labs.
As necessary, supplement your learning with
[Berkeley's course](https://cs162.eecs.berkeley.edu/) materials.

## 6. Compilers

![windmills](comp.jpg)

Let's say you've written a program in Java. But your computer doesn't understand
Java. How do you turn your code from the Java language to a language the
computer understands? There is a piece of software called a **compiler** for
that.

A course on compilers will give you a deeper understanding of programming
languages and how they are implemented. It will demystify what is happening when
you hit the big green button in your IDE or type `gcc` in your shell. A course
on compilers will teach you about

- regular expressions
- parsers
- abstract syntax trees
- code semantics, optimization, and generation

To learn compilers, check out
[Stanford's course](https://online.stanford.edu/courses/soe-ycscs1-compilers).

## 7. Computer Networks

![Earth at night](net.jpg)

The internet is kind of a big deal. I mean, without it, you probably wouldn't be
reading this article. But how do computers talk to each other? In a course on
networks, you will learn how computers communicate over the network. You will
learn about the technologies that are prevalent in today's networks, such as IP,
TCP, UDP, HTTP, and apparently, a lot of acronyms that end with P.

<aside>
<p>
The P in the examples above stands for <strong>protocol</strong>.
</p>
</aside>

Most software services need to be able to communicate over the network in some
way, so having networking knowledge can come in handy.

Check out
[MIT's course](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-829-computer-networks-fall-2002/index.html)
to learn about computer networks.

## 8. Distributed Systems

![server rack](ds.jpg)

Google
[allegedly](https://blog.hubspot.com/marketing/google-search-statistics#:~:text=Google%20does%20not%20share%20their,trillion%20global%20searches%20per%20year.)
processes 5.8 billion search queries per day or 70,000 per second. In order to
serve billions of users at any time of the day, we need to do what is called
"scale horizontally." A single computer can only be so fast and powerful. To
address this, engineers coordinate _many computers_ to talk over the network in
order to reliability serve many customers simultaneously.

For learning distributed systems, do the
[dslabs projects](https://github.com/emichael/dslabs). You will get hands-on
experience developing a fault-tolerant, highly available, sharded key-value
store. Supplement the labs with these
[lectures from MIT](https://www.youtube.com/playlist?list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB).

## 9. Database Systems

![dashboard analytics UI](data.jpg)

Big data is a major part of society now. We need systems to store and query
larges amounts of data. Many software systems utilize a database in some form or
another. Knowing about how these systems work can help you when designing
database schemas for your own applications. Expect learning about

- the SQL query language
- hash and B-tree indexes
- ACID transactions
- two-phase commit protocol

To learn databases, complete the
[SimpleDB](https://github.com/MIT-DB-Class/simple-db-hw) project, where you will
implement a SQL database that supports B-tree indexes, transactions, write-ahead
logging, and query optimization. Use the
[lab specifications](https://github.com/MIT-DB-Class/course-info-2018) to guide
you.

## 10. Computer Security

![iPhone lock screen](sec.jpg)

Name a piece of software that is not at threat by attackers. Most (all?)
applications or software services are at risk of being attacked by bad actors.
In a course on security, you would learn about common threat models and what you
can do as a programmer to avoid them.

Check out the
[University of Helsinki's course](https://cybersecuritybase.mooc.fi/) to get you
started.

## Bonus Courses

Technology is always evolving, so it's hard to make a list of only 10 courses.
So, here are **2 more bonus courses** for you to consider.

### 11. Human-Computer Interaction

![people working on computers](hci.jpg)

Making your app accessible and easy to use is perhaps just as important as the
underlying software that drives it. In a course on HCI, you learn how to design
novel interfaces that can be applied to everything from web and mobile apps, to
point-of-sale systems and ATM machines. A course on HCI will teach you
principles of designing usable and accessible interfaces.

Check out
[Don't Make Me Think](https://www.amazon.com/Dont-Make-Me-Think-Usability/dp/0321344758)
to get you started. [Refactoring UI](https://refactoringui.com/) is also great
for some tactical design tips that you can start applying to your interfaces
right away.

### 12. Machine Learning

![Robot playing a piano](ml.jpg)

Machine learning is the technology that recommends videos on YouTube, serves
personalized ads, self-drives cars, and guesses "hot dog" or "not hot dog".
**Spoiler alert:** It's math. In particular,

- linear algebra
- probability
- statistics
- calculus

Andrew Ng is one of the leading educators in machine learning. Start with his
[Machine Learning course](https://www.coursera.org/learn/machine-learning).
Then, move on to the
[Deep Learning specialization](https://www.coursera.org/specializations/deep-learning).

If you want to go deep designing novel machine learning algorithms, you should
be well equipped mathematically.
[Professor Leonard](https://www.youtube.com/user/professorleonard57) is a great
resource to get you started learning math.

## Additional reading

For additional information and guidance on your path to learning computer
science, check out
[Teach Yourself Computer Science](https://teachyourselfcs.com/).
