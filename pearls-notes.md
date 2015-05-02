# Pearls

## Intro to JS/programming

- Trinket.io for JavaScript
- Draw a triangle
- Draw it using sequential method calls
- Draw it using a loop
- Draw a second triangle
- Draw them using a function
- Draw different-sized triangles
... etc

## Exercises

TODO: Rate these in terms of week 1-9

### Refactor audio loader or clock

- Make it one big function
- Lots of duplication
- Bad variable names

Have them

- Figure out what the code is doing
- Identify responsibilities
- Compose from abstract to concrete

Ask

- What does this code do?
- How could it be improved?
- What are its responsibilities?

### Generate the Fibonacci sequence

### Compute change

Cash paying customers are rare these days, and cashiers have lost the ability
to calculate proper change. Our client has asked us to write
an app to help their employees calculate how much change to give cash-paying
customers.

The function should attempt to give as many big denominations as possible.


    // makeChange(32.30, 50)
    //   returns [
    //     { unit: '$10', qty: 1 },
    //     { unit: '$5', qty: 1 },
    //     { unit: '$1', qty: 2 },
    //     { unit: 'c25', qty: 2 },
    //     { unit: 'c10', qty: 2 }
    //   ]
    function makeChange(price, cash) {

    }

### Compute factorial

Write a function that computes the factorial of a number. For example, the
factorial of 5 is 5 * 4 * 3 * 2 * 1

    // factorial(5)
    //   returns 120;
    function factorial(n) {

    }

### Rotate array

Implement the rotateArray function:

    // Rotates the specified array by n positions
    // rotateArray(2, ['a', 'b', 'c', 'd', 'e'])
    //   returns ['c', 'd', 'e', 'a', 'b']
    // rotateArray(-1, ['a', 'b', 'c'])
    //   returns ['c', 'a', 'b']
    function rotateArray(n, arr) {

    }

### Anagrams

Implement a function to find all anagrams in an array. An anagram is a word
which is formed by rearranging the letters of another word

    'shack' 'hacks'

Need to have a dictionary of words (might use the one from the hangman game).

### Currency

Implement an object that represents currency via integer rather than float to
eliminate floating point mathematical errors.

### Keypad

Numerals on a phone can represent both numbers and letters:

    1: 1
    2: 2, A, B, C
    3: 3, D, E, F
    4: 4, G, H, I
    5: 5, J, K, L
    6: 6, M, N, O
    7: 7, P, Q, R
    8: 8, S, T, U
    9: 9, V, W, X
    0: 0, Y, Z

Implement a function which is given a sequence of numerals and an array of
words. The function returns the subset of the array such that each word in the
subset begins with the letters represented by the digits.

    // Filters the array based on the numerals in s
    // phoneFilter('22', ['dog', 'cat', 'tack', 'action'])
    //   returns ['cat', 'action']
    function phoneFilter(s, arr) {

    }

### Longest word

Implement a function that returns the longest word in a string. If there is a
tie, return the first word.

    // longestWord('Hello, world and everyone')
    //   returns 'everyone'
    function longestWord(s) {

    }

### Unique words

Implement a function that returns the unique set of words (case-insensitive) in
a string.

    // uniqueWords('Hello, George; hello, Jane')
    //   returns ['hello', 'george', 'jane']
    function uniqueWords(s) {

    }

### Scrabbulize

You've been hired by Scrabble to analyze how many of each letter they should
include in a game. The decision will be based on how common any given letter is.

To determine this, write a function which when given a long string, computes
the frequency of each character in the range of a-z. Ignore case. Try your
function on a big block of text (such as the content of a free e-book).

### Word count

Implement a function that counts how many times each word occurs in a string. It
should ignore case.

    // wordCount('The cat, the dog, and the other dog...')
    //   returns [{ word: 'the', count: 3 }, { word: 'cat', count: 1 }, { word: 'dog', count: 2 }, { word: 'and', count: 1}, { word: 'other', count: 1 }]
    function wordCount(s) {

    }

### Year, day to month, day

Implement a function which, when given a day and year returns the month and day.

    // monthAndDay(2015, 34)
    //   returns { month: 2, day: 3 }
    function monthAndDay(day, year) {

    }

### Rudimentary spellchecker

Implement a function which is given a string and a dictionary and returns
an array of words from the string which were not found in the dictionary.

    // spellCheck('Hello, baz', ['hello', 'world', 'the', 'and'])
    //   returns ['baz']
    function spellCheck(arr, dict) {

    }

### Generate tickets

FairFlare is a startup that helps fairs and festivals with passes. They need
an easier way to print will-call tickets. Their customer information is
available in the following format:

    First name, last name, level

An example dataset might look like this:

    Sally, Silversteen, gold
    James, Johnson, silver
    Jane, Doe, silver
    Bob, Marley, platinum

Festivals who use FairFlare would like to be able to customize their tickets.

Write an application which allows a user to select two files: the customer
information CSV file and the ticket template file, then generates a printable
list of tickets.

You can decide how ticket templates might work, but here's a pretty common
template format:

    Barnam and Bailey's Circus

    {{level}} pass for {{lastName}}, {{firstName}}

### 7-segment display

7-segment displays are displays that represent numbers using 7 segments:

```  _
    |_|
    |_|
```

Write a function which, given two integers, returns a 7-segment representation.

    function seg7(n1, n2) {

    }

If we were to call it like this `seg7(8, 7)`, it would produce:

```  _    _
    |_| .  |
    |_| .  |
```

### TI-83 simulator

Draw a grid of squares (which will simulate pixels) on the screen. Given a
formula, graph it on the grid of squares.

    // To draw a parabola:
    // graph(function (y) { return y * y; });
    function graph(fnx) {
    }

---

## Create a shuffle image puzzle

- Square grid with one piece missing
- Randomly jumbled image
- Move squares around to get the right image
- http://en.wikipedia.org/wiki/15_puzzle

## Possible exercises

- Objects to simulate tables and joins
- Given a CSV of survey results, compute summary info (p30 programming pearls)

---


---

Cool program to spell check

    sign < dictionary | sort | squash > gramlist
