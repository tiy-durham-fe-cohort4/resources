class: center, middle, inverse

# Layout

---

- Box-sizing
  - Side-by-side comparison
- Text-align justify hack
- External link for
  - Proportional sizing
  - Positioning
  - Responsive
  - Transform
  - Float

???

These are notes

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



# Dimensions

- width
- height
- min, max width/height
- box-model
  - border-box
  - content-box
- padding proportion hack

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

---

# Process

- Wireframes
- Identify the components
- Build out the HTML
- CSS reset
- Layout
- Apply styling

---

# Dev tools

- Browsers as a servant fetching data
- Developer tools and inspection of source

---

# Position

- absolute
- fixed
- relative
- static
- top, right, bottom, left

---

# Tables

- table, thead, tr, th, td, tbody, tfoot

---

# Transform

- transform translate

- ul, ol, li
- pre
- header
- footer
- nav
- div
- span

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
