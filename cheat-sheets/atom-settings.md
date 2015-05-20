# Atom settings

Here's what I did to make Atom more useful:

## Enable launching from terminal

Atom &gt; Install Shell Commands

## HTML5 snippet

My snippet file (Atom &gt; Open Your Snippets) looks like this:

    '.html':
      'HTML5 Boilerplate':
        'prefix': 'HTML5'
        'body': """<!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Title</title>
          </head>
          <body>
          </body>
        </html>"""

## Stylesheet

In my stylesheet (Atom &gt; Open Your Stylesheet) I added this to the bottom:

    .editor, atom-text-editor::shadow {
      .bracket-matcher {
        border-bottom: 1px solid lime;
        position: absolute;
        background-color: rgba(0, 255, 0, 0.3);
      }
    }

It gives really nice hilights to matching brackets/tags.

## Settings

In Atom's settings:

- Enable indentation guides

## Packages

- color-picker
- docblockr
- minimap
- autoclose-html
- autocomplete-plus
  - For this one, I had to search for `autocomplete plus` with no dash.

There are lots of other handy ones, including a nice auto-completer, but these
are good starters.

## Shortcuts

Edit multiple lines:

    Cmd + click any number of lines, then type or delete, or whatevz

Rename HTML tag:

    Ctrl + Shift + U

Rename JS variable/function:

    Ctrl + Alt + r

Go to matching HTML tag:

    Ctrl + Alt + j

Find a file:

    Cmd + T

Go to line:

    Ctrl + G

Cut move line:

    Ctrl + Cmd + [up]
    Ctrl + Cmd + [down]

Comment current selection/line:

    Cmd + /

Select current line:

    Cmd + l

Color picker:

    Cmd + Shift + C

Edit multiple values:

    Cmd + double-click the values, then edit

## For more, see

http://d2wy8f7a9ursnm.cloudfront.net/atom-editor-cheat-sheet.pdf
