# Regular expressions

AKA Regex...

[Read all about it](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

---

## Match patterns in strings

- Weird syntax
- Super handy for many, many things
- A whole lot of programming is just matching patterns in strings
  - Validation
  - Parsing

---

## Creating a regular expression

- Declared via constructor: `new RegExp('ab+c', 'i')`
- Or via literal syntax: `/ab+c/i`
- Most prefer the latter

---

## Matching a character set

You use what looks like array notation (but it's not an array): `/[abc]/`

This matches *any* of the enclosed characters.

Let's check to see if a string contains any alpha-numeric characters.

```javascript
/[A-Za-z0-9]/.test('hi'); // true
/[A-Za-z0-9]/.test('-+hi%'); // true
/[A-Za-z0-9]/.test('Hell0'); // true
/[A-Za-z0-9]/.test('-#_@'); // false
```

---

## Matching the beginning and end of a string

What if we want to check if a word contains *only* alpha-numeric characters?

```javascript
/^[A-Za-z0-9]+$/.test('hi02T'); // true
/^[A-Za-z0-9]+$/.test('hi-there'); // false
/^[A-Za-z0-9]+$/.test('hi there'); // false
```

- The `^` in this context matches the start of a string
- The `$` matches the end of the string
- The `+` means match the preceeding pattern one or more times

---

## The * and + options

- `*` says match the previous pattern zero or more times
- `+` says match the previous pattern one or more times, equivalent to `{1,}`

```javascript
/^[A-Za-z0-9]$/.test('hi'); // false
/^[A-Za-z0-9]$/.test('h'); // true
/^[A-Za-z0-9]$/.test(''); // false
/^[A-Za-z0-9]+$/.test(''); // false
/^[A-Za-z0-9]*$/.test(''); // true
/^[A-Za-z0-9]*$/.test('h'); // true
/^[A-Za-z0-9]*$/.test('holyC0w'); // true
/^[A-Za-z0-9]+$/.test('holyC0w'); // true
```

---

## Checking length

- Ensuring that usernames are alpha-numeric and between 2 and 8 chars long

```javascript
(/^[a-zA-Z0-9]{2,8}$/).test('hi'); // true
(/^[a-zA-Z0-9]{2,8}$/).test('hi02'); // true
(/^[a-zA-Z0-9]{2,8}$/).test('1hi'); // true
(/^[a-zA-Z0-9]{2,8}$/).test('h@lt'); // false
(/^[a-zA-Z0-9]{2,8}$/).test('hildelbrand'); // false
(/^[a-zA-Z0-9]{2,8}$/).test('h'); // false
```

- The `{2,8}` means match the previous character pattern between 2 and 8
times, inclusive
- `{2,}` would match any string of 2 or more characters
- `{2}` would only match strings of 2 characters

---

## Negations

What if we want to check if a string contains any *non* alpha-numeric
characters.

```javascript
(/[^a-zA-Z0-9]/).test('hi'); // false
(/[^a-zA-Z0-9]/).test('hi-there'); // true
```

When used inside of a character set, the `^` is a negation. `/[^abc]/` means
match any character that is not an a, b, or c.

---

## Shorthands

There are a *bunch* of shorthands. Here are a few handy ones.

- `\s` matches a single whitespace character
- `\S` matches a single non-whitespace character
- `\w` matches a single word character, equivalent to `[A-Za-z0-9_]`
- `\W` matches a single non-word character, equivalent to `[^A-Za-z0-9_]`

---

## Periods and escaping

- `.` matches *any* character at all
- `\.` matches a period
- `\` indicates an escape sequence
- `\\` matches a `\` character

---

## The or operator

You can match any of a number of patterns by using `|`.

The following regex would match any png or jpg files in the preceeding string:

```javascript
'It was facebook.png ok?'.match(/[\w]+\.(?:jpg|png)/) // ['facebook.png']
'It was facebook.jpg ok?'.match(/[\w]+\.(?:jpg|png)/) // ['facebook.jpg']
```

- The string's `.match` method takes a regex as its argument and returns an
- The `()` is used to denote a capture group
- The `?:` indicates that the capture group shouldn't be remembered
array of matching strings
- The `|` means match jpg or png.

---

## Capturing parenthesis

You can capture sub-patterns using parenthesis:

```javascript
'It was facebook.png ok?'.match(/[\w]+\.(jpg|png)/) // ['facebook.png', 'png']
'It was facebook.png ok?'.match(/[\w]+\.(?:jpg|png)/) // ['facebook.png']
```

This is slower than using the non-capturing (second example).

---

## Global and insensitive flags

By default, regex stops at the first match, but adding a `g` at the end
changes that:

```javascript
'dog.jpg, cat.png'.match(/[\w]+\.(?:jpg|png)/); // ['dog.jpg']
'dog.jpg, cat.png'.match(/[\w]+\.(?:jpg|png)/g); // ["dog.jpg", "cat.png"]
```

By default, regex is case-sensitive, but adding an `i` at the end changes that:

```javascript
'dog.jpg, cat.png'.match(/[A-Z]+\.(?:jpg|png)/); // null
'dog.jpg, cat.png'.match(/[A-Z]+\.(?:jpg|png)/ig); // ["dog.jpg", "cat.png"]
```

You can end with an `i`, `g`, `gi` or `ig`

---

## String replace

```javascript
'Hello World'.replace(/(\w+)\W+(\w+)/, '$2 $1'); // 'World Hello'
```

The `$2` and `$1` in the second argument refer to the values captured by the
parenthesis.

---

## You can also use functions

This is often used for more complex replacements such as escaping HTML:

```javascript
'<script>alert("hi")</script>'.replace(/[\<\>\&\"\']/g, function (ch) {
  var esc = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    '\'': '&apos;'
  };

  return esc[ch];
}); // "&lt;script&gt;alert(&quot;hi&quot;)&lt;/script&gt;"
```

---

## Email

A naive email validator might look like this:

```javascript
/^[\w-\.]+@[\w-\.]+\.[\w-\.]+$/.test('chris.davies@tiy.com')
```

---

## SSN

```javascript
/^[\d]{3}-?[\d]{2}-?[\d]{4}$/.test('123231234') // true
/^[\d]{3}-?[\d]{2}-?[\d]{4}$/.test('123-23-1234') // true
```

The `?` in this example says, match the previous pattern 0 or 1 times.

---

## Form validation

HTML5 form elements support a `pattern` attribute which allows you to specify
a regular expression to which the value of the input must conform in order to
be considered valid...

[Parsely](http://parsleyjs.org/) is a handy jQuery plugin that makes it easy
to validate forms using HTML5 patterns and customize the error messages.

An example of Parsely's usage is the [users project](https://github.com/tiy-durham-fe-cohort4/users) that we built.

---

## More...

The [Regex visualizer](http://regexper.com/) is really handy for trying to
debug a regex.

[Common HTML5 patterns](http://html5pattern.com/) is an insanely useful
resource.

See
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) for a comprehensive look at regular expression options.
