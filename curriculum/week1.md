# Week 1: HTML and CSS

## Lessons

- HTML and CSS overview
- Git
- The design process
- Box model
- Layout
- Foreground and background
- Fonts
- Forms
- Interactivity

### HTML and CSS overview

- Browsers as a servant fetching data
- Syntax
  - the source of 99% of errors
- Conventions
- Terminology
- Selectors
  - Specificity
- Attributes
- Tags
- Elements
  - html
  - head
    - title
    - link
  - body
    - a
    - div
    - p
    - h1, h2, h3, h4, h5, h6
- Classes
- IDs
- Flow
- Developer tools and inspection of source

### Git

- terminal basics
- git init
- git add
- git commit
- git push
- git pull
- git clone
- GitHub

### The design process

- Sketch it / wireframe
- Iterate on sketches until satisfied
- Identify and name elements
- Write descriptive markup (markup with descriptive classes)
- Apply styling via CSS in a methodical manner
- Styleguides

- Discuss proper use of
  - Contrast
    - Rule of thumb: If you have a background color, odds are you should be
    using white or light text
  - Padding
  - Borders
    - 1 + 1 = 3
    - minimalism
    - weight and contrast should not compete with primary content
  - Fonts
    - Families
    - Weight
    - Size
    - Line height
  - Color palettes
- Don't make me think and design of everyday things
  - Make it obvious
  - Buttons should look like buttons
  - Textboxes should look like textboxes
  - If a visual element is not immediately obvious, it's styled incorrectly


### Box model

- short hand notation
- box-sizing
- padding
  - proportion hack
- border
- border-radius
- margin
- display
- width, min-width, max-width
- height, min-height, max-height
- units: pixels, ems, percentages

### Layout

- position, top, bottom, left, right
- table, thead, tr, th, td, tbody, tfoot
- float, overflow
- transform translate
- ul, ol, li
- pre
- header
- footer
- nav
- div
- span
- responsive design (meta and media)
- https://css-tricks.com/snippets/html/responsive-meta-tag/
- http://css-tricks.com/snippets/css/media-queries-for-standard-devices/

### Foreground and background

- color
- background
- images
- gradients
- img

### Fonts

- web fonts
- font-family
- line-height
- optimal reading length
- font-size
- font-weight
- strong, b
- em, i
- blockquote
- text-align
- autofocus
- required
- http://fontello.com/
- http://app.fontastic.me/
- http://hellohappy.org/beautiful-web-type/
- http://www.google.com/fonts

### Forms

- form
- method
- action
- input
  - text
  - password
  - checkbox
  - radio
- textarea
- select, option
- button
- label
- :valid, :invalid, :required

### Interactivity

- pseudo selectors
- :before
- :after
- :hover
- :active
- transition
- animation, keyframe
- CSS animations and transitions
  * http://ianlunn.github.io/Hover/
  * http://daneden.github.io/animate.css/
  * http://www.justinaguilar.com/animations/index.html
  * http://leaverou.github.io/animatable/

## Exercises

- Create a basic blog layout in class
  - Use css reset, typescale, lorem ipsum, free images
    - http://www.pexels.com/
    - https://medium.com/@dustin/stock-photos-that-dont-suck-62ae4bcbe01b
    - http://meyerweb.com/eric/tools/css/reset/
    - http://type-scale.com/
    - http://meettheipsums.com/

- Position a plane over a map of the world such that when the browser resizes, the plane retains is position relative to the resized map
  - https://github.com/tiy-durham-fe-2015/curriculum/blob/master/lectures/week1/week-01-1-jan-12.md

- Create a chat screen
  - https://dribbble.com/shots/1164814-iOS-7-Chat-View-Interaction-Animation-and-Freebie

- Create a modal
  - https://dribbble.com/shots/1150089-Expiration-for?list=searches&tag=modal&offset=38

- Create a user list
  - https://dribbble.com/shots/876515-Search-for-friends-list?list=searches&tag=users&offset=33

- Find an existing site and redesign it
  - Here are some suggestions
    - http://savinggracenc.org/
    - http://www.durhamrescuemission.org/
    - http://www.ncsymphony.org/
    - http://theironyard.com/
    - http://durhamchamber.org/
    - http://www.dpacnc.com/
    - http://americanunderground.com/
  - Use a modern design as inspiration for the redesign
    - http://squarespace.com/
    - https://dribbble.com/
    - http://www.awwwards.com/

## Reading

- http://cssguidelin.es/
- http://www.google.com/design/spec/style/color.html#color-color-palette
- http://flukeout.github.io/
- http://blog.froont.com/9-basic-principles-of-responsive-web-design/
- https://medium.com/@erikdkennedy/7-rules-for-creating-gorgeous-ui-part-2-430de537ba96
- https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity
