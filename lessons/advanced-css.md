class: center, middle, inverse

# Advanced CSS

---

# Pseudo classes

There are [many pseudo classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

These are special selectors that generally refer to the state or position of
an element, rather than to an explicit attribute.

Let's start with `:before` and `:after`

These allow you to insert content into an element, as we'll see in the
following examples.

---

# Text align hacks

.demo-justify[
  .demo-cell[
    The css rule `text-align: justify`
    makes text fill its container, but
    only applies when lines wrap.
  ]
  .demo-cell[
    We can use this to make a three-column layout.
  ]
  .demo-cell[
    I usually accomplish this with the help of an `:after` pseudo-selector.
  ]
]

---

# Proportional sizing

Padding has an odd property in that when specified as a percent, it is a
percentage of its element's width. We can use this handy fact to maintain
an aspect ratio.

.ratio-container[
  .ratio-content[
    Nifties!
  ]
]

This is handy, when you don't know an element's exact size, but want it to
be square (or some other well-defined proportion).

---

# Hover

The `:hover` selector applies when the mouse is over the element...

It can be paired with a `transition` to make for nice, subtle effects.

.demo-hover[
  [Read more about transitions](https://css-tricks.com/almanac/properties/t/transition/)
]

---

# Styling forms

Styling form elements can be a serious pain.

Many elements, cannot be explicitly styled, for instance:

- file uploaders
- check-boxes
- radio-buttons

The strategy is:

- place unstylable elements beneath other elements that you *can*
style
- use advanced selectors to style elements based on the state of prior elements

For example, you might hide a checkbox beneath a span, then style that span
one way if the checkbox is checked and a different way if the checkbox is
unchecked.

[Demo](http://jsbin.com/yohelu/2/edit)


---

# Further reading and resources...

- [Transitions](https://css-tricks.com/almanac/properties/t/transition/)
- [Animations](https://css-tricks.com/css-animation-tricks/)
- Nice pre-canned animations
  - http://ianlunn.github.io/Hover/
  - http://daneden.github.io/animate.css/
  - http://www.justinaguilar.com/animations/index.html
  - http://leaverou.github.io/animatable/
