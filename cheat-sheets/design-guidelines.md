# Design Guidelines

TODO:

- Positioning
- Ratios

## Padding / margins

- Almost everything should be padded
- Never have content crowded right up against the edge of its container
- Use padding (or margins) rather than borders to create visual separation

## Colors

- Big, bold colors should generally be used for accents, not primary backgrounds
- Rarely (or never!) put blocks of big, bold colors side-by-side
- If you have a colored background, your foreground should be white
  - Except when your background's lightness is high (e.g. 75% or more)
- Foreground text should not be black 444 is a good number
- In fact, pretty much [nothing should be black](http://ianstormtaylor.com/design-tip-never-use-black/)

## Contrast

- Content should clearly stand out from the background
- Avoid too much information on one screen
- Everything should be legible even from a distance

## Images

- [Where to find them](https://medium.com/@dustin/stock-photos-that-dont-suck-62ae4bcbe01b)
- [How to use them appropriately](https://medium.com/@erikdkennedy/7-rules-for-creating-gorgeous-ui-part-2-430de537ba96)
- [How to choose good images](http://www.google.com/design/spec/style/imagery.html)

Follow each of those links. They're all *great*.

Here's the quick win:

- If you're putting text on an image, the text should be white
- If you're using an image, it should tell a story
- Avoid generic stock-photos

## Borders

- Remember, 1 + 1 = 3
  - Two borders with negative space between them produces 3 lines
- Borders often produce unnecessary visual noise
- Borders should not compete in weight with your content
- If you have borders, try removing them and increasing margins or padding
- If that didn't look good, try lightening your borders

## Fonts

### Great typography examples

- [Medium is amazing](https://medium.com/@thierrymeier/7-things-craftsmen-can-learn-from-the-worlds-best-sushi-chef-e332d0077375)
- [So is signalvnoise](https://signalvnoise.com/posts/3289-some-advice-from-jeff-bezos)

What do those two sites have in common?

- Simple, clean typography
  - A basic serif font for the body text
  - A basic serif or sans-serif font for headers
  - Light background
  - Dark text
- A laser-focus on content
  - No clutter
  - No distracting backgrounds
  - No crazy content crowding the edges of the articles
- Excellent line-height
- Clearly demarcated paragraphs
  - A 1-line margin beneath paragraphs (on Medium)
  - A clear indentation (on signalvnoise)

### How many fonts should you have?

- Choose 2 fonts, or at most 3 for your website
- Simple and minimal is almost always the right choice
- A good, standard sans-serif font such as Open Sans
- A good alternate sans-serif font, or a good serif font are all you need
- If you *really* want some crazy, fancy font, you should have a very good reason for it

### Font size and line height

- Line-height should generally be 1.3 - 1.5em (I usually use 1.4, but sometimes
  it needs tweaking)
- Make sure your headers (h1-h6) scale from large to small, following [a logical
ratio](http://type-scale.com/)
- Important stuff should be bigger than unimportant stuff

## Form Difficulties

### Buttons

- Buttons should look like buttons.
- Don't get fancy with them
- Remember, the "don't make me think" principle
- Give your users something resembling what they've come to expect

### Links

- Links should look like links
- (See button bullet points)

### The following are a PITA to style.

- radios
- checkboxes
- file uploaders
- select

The solution is to hide the actual inputs behind a label. As long as the label
is associated with its input, clicking the label is equivalent to clicking
the input.

Then, you can use CSS to style your label (or one of its children) as if it is
a checkbox or a radio or whatever you want. You can use pseudo selectors to
style things differently depending on the state of the hidden input (e.g.
  [checked]).



- [Google material design](http://www.google.com/design/spec/material-design/introduction.html)
- [Refills](http://refills.bourbon.io/)
