# Week 1 feedback

Week 1 is in the books! Here are some patterns I saw as I looked through your
code.

## Tags in all the wrong places

One thing I saw was a tendency to put tags where they don't belong. Here
are a few examples:

    <html>
      <head>
      </head>
      <div class="foo">Hello</div>
      <body>

In that HTML snippet, the div is in the wrong place. It should be a child of
(placed inside of) the body tag. The only tags that should go inside of the
html element are `head` and `body`.

Here's another example:

    <span>
      <div>Hello</div>
    </span>

In that case, we have an inline element (span) which is wrapping a block
element (div), but block elements are not legal inside of inline elements.

## Indentation, indentation, indentation

I can't stress it enough. Properly indenting things makes a huge difference
in the long-term (and even short-term) understandability of a codebase.

    <body>
    <header>
        <nav><a href="#">About</a>
      </nav>
       </header>
    </body>

That should look like this:

    <body>
      <header>
        <nav>
          <a href="#">About</a>
        </nav>
      </header>
    </body>

And this:

    .page-header {
    	background-color: rgb(140, 37, 74);
    	padding: .7em;
    	position: fixed;
    	top: 0;
    	left: 0;
    	left: 0;
    	right: 0;
    	z-index: 1;
    }
    .page-nav {
      		position: absolute;
      		top: 45%;
      		right: 10px;
    }
    .nav-link {
    	text-decoration: none;
    	color: white;
    	font-family: 'Gotham SSm A', 'Gotham SSm B', sans-serif;
    	margin-left: 1em;
    }

Should look like this:

    .page-header {
    	background-color: rgb(140, 37, 74);
    	padding: .7em;
    	position: fixed;
    	top: 0;
    	left: 0;
    	left: 0;
    	right: 0;
    	z-index: 1;
    }

    .page-nav {
    	position: absolute;
    	top: 45%;
    	right: 10px;
    }

    .nav-link {
    	text-decoration: none;
    	color: white;
    	font-family: 'Gotham SSm A', 'Gotham SSm B', sans-serif;
    	margin-left: 1em;
    }

## Use of absolute

Many people used `position: absolute` to position their nav in the Smashing
Academy assignment. It's not necessarily wrong, however, it does mean that
if you change the padding on the header, it doesn't affect the position of the
nav, so you have to make that change in two places.

    <header class="page-header">
      <a class="page-logo" href="#"><img src="img/logo.png"></a>
      <nav class="page-nav">
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>

I would have used float here to position the `.page-nav` element to the right,
and that way any padding on `.page-header` would push the `.page-nav` down and
over.

## Display none vs visibility hidden

Some of you asked me about how to hide an element on a page. There are many
ways, but the typical approach is one of the following:

    .foo {
      display: none;
    }

    .bar {
      visibility: hidden;
    }

Display none and visibility hidden both hide their respective elements, but
the big difference is that `visibility:hidden` keeps the element in the flow
of the document. It's not visible, but it still takes up space, and its padding
and margin rules still apply. With `display:none` it is as if the element has
been removed from the page altogether.

## Logical ordering in CSS

I saw stuff like this:

    .page-nav {
      color: white;
    }

    body {
      color: #333;
    }

It's generally good to put your tag-specific styles before your class-specific
styles. So, `body` and `input` and `h1` would go before `.page-nav`.

In fact, it is pretty common to put `body` and `h1` and other tag styles in
their own CSS file, often named `defaults.css` or something along those lines.

## Specifying width

On a few occasions, I saw this kind of thing:

    .container {
      display: block;
      width: 100%;
    }

In this case, the width is probably redundant. If a container is `display: block`,
it is probably 100% width (unless another rule has been applied to change
  the default behavior).

## Self closing tags

I saw a few things like this:

    <img src="whtevz.jpg"></img>

Or this:

    <input type="textbox">Hello</input>

The problem is the same in both examples. Input and image are both self-closing
tags. That is, it is illegal to do this: `</img>` or this: `</input>`

## Overly specific classes

I saw something like this:

    <div class="card1">
    	A
    </div>

    <div class="card2">
      B
    </div>

    <div class="card3">
      C
    </div>

But there was no need to number these cards. Each of them had the exact same
style rules. So they should look like this:

    <div class="card">
      A
    </div>

    <div class="card">
      B
    </div>

    <div class="card">
      C
    </div>

The idea is this: if each thing is the same kind of thing, then it should have
the same class. A class is a kind/category of thing.

## Style-agnostic names

I saw this:

    <div class="middle">Hello</div>

What's wrong with this? The name `middle` is style-specific, so if we ever
decided to change our layout to not be centered, we'd have to change both CSS
and HTML, instead of just CSS.

## Pushing to gh-pages

If you want to deploy your site to gh-pages, you need to do this:

Create the gh-pages branch, if it doesn't exist:

	git branch gh-pages

Then, merge your code into it, and push it to GitHub:

	git checkout gh-pages
	git merge master
	git push origin gh-pages

## Viewing your gh-pages

The URL for your website will look like this:

	http://your-github-id.github.io/your-project-name

For example here's my "lessons" project's URL:

	http://chrisdavies.github.io/lessons/

If you hit your gh-pages URL and get a 404, it means something is not configured. Either you don't have a gh-pages branch for your project, or you don't have an index.html file in your gh-pages branch. index.html is the expected default html file for a gh-pages site!

## Inconsistent naming

I saw stuff like this:

    <li class="instructor-profile">
      <img class="teacher-pic" src="img/chris.png">
    </li>

Do you see the problem? The li is called `instructor-profile` but the img is
called `teacher-pic`. Those are great names, but should be consistent. The img
should have been called `instructor-pic` just to keep things consistent.

## Specifying units

Here are a few things I noticed around units:

    .foo {
      width: 0px;
    }

In this case, the `px` is unnecessary. When you specify a `0` in CSS, there is
no need to specify the unit, so this should have looked like: `width: 0;`

    .foo {
      width: .7em;
    }

Decimals with no leading zero can be misleading, because the decimal is pretty
easy to miss. So the above might be mistaken as saying: `7em`. For this reason,
many people write their decimals like this: `0.7em`

## Styles in HTML

The following code specifies height and width in HTML instead of in CSS:

    <img  height="70" width="339" src="img/logo.png" alt="Header Logo">

Height and width are styling details, which in general should be done in CSS.

## Organization

I saw varying degrees of organization in the projects I reviewed. In general,
here is an example of a project structure I use when building simple sites. The
file names are just for illustrative purposes:

    /project-name
      /css
        reset.css
        defaults.css
        project-name.css
      /img
        logo.png
        favicon.png
      /fonts
        font-awesome.ttf
        font-awesome.otf
      /js
        jquery.js
        project-name.js
      index.html
      about.html
      contact.html
      
