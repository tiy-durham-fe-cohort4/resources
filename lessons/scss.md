# SCSS

---

## Importing

```css
@import 'reset';
```

Will import the content of `_reset.scss`

So, `main.scss` is generally what I use as the single place to import scss.

---

## Variables

```
$primary-color: #333;
```

---

## Nesting

```css
.modal {
  border: 1px solid

  .close {
    background: #AAA;
    color: white;
  }
}
```

Produces

```css
.modal {
  border: 1px solid
}

.modal .close {
  background: #AAA;
  color: white;
}
```

---

## Functions

Functions, but in CSS!!!

```css
@function shade($color, $percent) {
  @return mix(#000, $color, $percent);
}

@function tint($color, $percent) {
  @return mix(#fff, $color, $percent);
}

.modal-background {
  background-color: tint(#548dd8, 40%);
}
```

---

## Mixins

[Read about it here](http://davidwalsh.name/write-media-queries-sass)

```css
$medium-width: 768px;
$big-width: 1024px;

@mixin medium-screen {
  @media (min-width: #{$tablet-width}) and (max-width: #{$desktop-width - 1px}) {
    @content;
  }
}

@mixin big-screen {
  @media (min-width: #{$desktop-width}) {
    @content;
  }
}
```

---

### Use it like this:

```css
p {
  font-size: 16px;

  @include medium-screen {
    font-size: 18px;
  }

  @include big-screen {
    font-size: 20px;
  }
}
```

---

## More mixins

```css
@mixin stacked-item ($spacing: 1em) {
  padding: $spacing;

  // Use a slightly smaller margin than our padding
  margin-bottom: $spacing * 0.75;
}
```

Use it like this:

```scss
// Comments can be double-slashes, which I greatly prefer to the /* */
// alternative...
.user {
  // Include the stacked-item rules in .user, using the default $spacing value
  @include stacked-item;
}

.appointments {
  // Include the stacked-item rules in .user, using 1.2em as $spacing
  @include stacked-item(1.2em);
}
```

---

## Extend

... Don't use it.

- Makes your SCSS hard to understand
- Produces CSS which may have things declared in an order you don't want
- Doesn't work inside of `@media` queries

---

## What else?

SCSS supports loops, arrays (called lists), hashes (called maps), conditionals,
and more...

[More on that here](http://thesassway.com/intermediate/if-for-each-while)

---

## Example of lists and loops

[Stolen from here](http://benfrain.com/working-with-lists-and-each-loops-in-sass-with-the-index-and-nth-function/)

```css
$colors: #00F #0F0 #F00;

@each $color in $colors {
  $i: index($colors, $color);

  .box-#{$i} {
    color: $color;
  }
}
```

Produces

```css
.box-1 {
  color: #00F;
}

.box-2 {
  color: #0F0;
}

.box-3 {
  color: #F00;
}
```

---

## Loops, conditionals, hashes, arrays, and more...

- My suggestion: don't use them.
- CSS is a simple language.
- Simplicity is a big part of it's strength.
- There's usually a CSS-y way to solve redundancy.
- Use complex logic only in very selective cases.
- Keep your SCSS as close to CSS as possible for the sake of others.
