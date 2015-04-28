class: center, middle, inverse

# Layout

---

# Padding, margin, border

```css
.frame {
  border: 10px solid #333;
  margin: 1em;
  padding: 1em;
}
```
.demo-frame[
  Hi
]

---

# Shorthand

.demo-frame.demo-shorthand[
  Hi
]

Many CSS rules have a shorthand notation.

- short-hand notation for margin and padding
  - clockwise
  - top, right, bottom, left

```css
.frame {
  padding: 1em 0.5em 0.25em 0em;
}
```

---

# Border-Radius

```css
.frame {
  border-radius: 1em;
}
```

.demo-frame.demo-radius[
  Hi
]

This also supports shorthand notation.

---

# Circles

```css
.frame {
  width: 3em;
  height: 3em;
  border-radius: 3em;
}
```

Nifty, eh?

.demo-frame.demo-circle[
  Hi
]

---

# Bevels

```css
.frame {
  border: 5px solid #0675f4;
  border-left-color: #88bdf5;
  border-right-color: #88bdf5;
}
```

.demo-frame.demo-bevel[
  Hi
]

---

# Which means...

.demo-frame.demo-speech-bubble[
  Hi
]

We can make nifty triangles n such.

There's even a [spiffy tool](http://apps.eky.hk/css-triangle-generator/) to help with it.

---

# A note about units

- units
  - px - pixels
  - em - size relative to font of current element (1.5em is 1.5 times the font size)
  - rem - size relative to font of root element (e.g. the body or html)
  - % - size relative to parent (except in odd cases like padding)

---

# Box-model

By default, width/height excludes padding and borders. Given this rule:

```css
.my-block {
  width: 300px;
  padding: 2px;
  border: 1px solid red;
}
```

What will the actual width of the block be?

## 306px

---

# Changing the box-model

You can adjust the box-model like so:

```css
.my-block {
  box-sizing: border-box;
}
```

.demo-border-box[
  border-box
]
.demo-content-box[
  content-box
]

Both of those have these rules, but a different box-model:

```css
.demo-content-box, .demo-border-box {
  height: 3em;
  border: 5px solid #007bff;
  padding: 0.75em;  
}
```

---

# Position

- absolute - positioned relative to the closest `relative` parent
- fixed - positioned relative to the window/viewport
- static - positioned in normal, document flow
- relative - like static, except serving as a container for absolutely positioned elements

---

# Position fixed

[Here is an example](http://jsbin.com/vekuyunese/1/) of a fixed-position header.

- Usually, you set `top`, `right`, `bottom`, and or `left`
- Often, you specify a `z-index`

---

# Coordinates

.img-diagram[
  ![Coordinates](http://i.imgur.com/bOME1H9.png)
]

---

# Dimensions

- width
- height
- min-width, min-height
- max-width, max-height

---

# Display

```css
.foo {
  /* The most common values are block, inline, inline-block */
  display: block;
}
```

.demo-inline[
  inline
]
.demo-inline[
  inline
]
.demo-inline-block[
  inline-block
]
.demo-inline[
  inline
]
.demo-block[
  block
]
.demo-inline[
  inline
]
.demo-inline-block[
  inline-block
]
.demo-inline[
  inline
]
.demo-inline[
  inline
]

???

- talk about vertical-align
- inline elements
  - are treated like words in a sentence
  - wrap
  - don't respect height/width
- inline-block elements
  - are like inline elements, except
  - can be vertically aligned
  - respect height/width, padding, etc
- block elements
  - are like inline-block elements, except
  - they display on their own line

---

# Float

- left
- right
- none
- clear
- overflow
  - auto
  - hidden

[Example](http://jsbin.com/wazore/1/edit?html,output)

???

Floating an item (left or right) takes it out of the normal flow.

It's parents won't necessarily contain it.

An item with `display: block; clear: both` will "clear" the float.

An alternative way to force a container to properly contain its floating children
is to use overflow auto or hidden.

---

# Tables

- table, thead, tr, th, td, tbody, tfoot
- Tables should not be used for layout
- Tables *should* be used to represent truly tabular data

[Demo](http://jsbin.com/jorojo/1/edit?html,css,output)

---

# Transform

It's a PITA to vertically and horizontally center things.

- Horizontal center via `margin: auto` [example]()
- Centering with absolute and transform

[Demo](http://jsbin.com/tenoceq/1/edit)

---

# Responsive

- responsive design (meta and media)

[meta tag](https://css-tricks.com/snippets/html/responsive-meta-tag/)

```html
<meta name="viewport" content="width=device-width">
```

[media queries](http://css-tricks.com/snippets/css/media-queries-for-standard-devices/)

```css
@media (max-width: 480px) {
  /* Override pc-browser styles */
}
```

[Demo](http://jsbin.com/jewala/1/edit?output)
