# Lists and friends

## Description

This is a multi-part assignment. There are lots of little challenges that
you should work on. Feel free to work with your fellow students to solve
these puzzles. And definitely make ample use of Google.

## Objectives

### Learning Objectives

After completing this assignment, you should understand...

* Arrays
* Hashes
* Conditionals
* How to combine various programming tools into a working solution

## Details

### Deliverables

* A GitHub project called "lists-and-friends" containing your solution(s)

## Normal Mode (MVP)

Solve the following challenges. Do them in any order you wish!

### Palindrome

Write a function `isPalindrome` that takes a string and returns a boolean
indicating whether or not the string is a palindrome (the same backwards as
  forwards).

    function isPalindrome(str) {
      // TODO: implement this!!!
    }

Sample usage:

    isPalindrome('hannah'); // should return true
    isPalindrome('foo'); // should return true
    isPalindrome('bob'); // should return true

### Average

Write a function `average` which takes an array of numbers and returns the
average.

    function average(arr) {
      // TODO: implement this!!!
    }

Sample usage:

    average([2, 4, 8]); // returns 4.666666666666667
    average([1, 3, 7, 32]); // returns 10.75

### User

Write a function `makeUser` which takes a name (a string) and returns a hash
containing a 'firstName' and a 'lastName' key/value.

    function makeUser(name) {
      // TODO: return a user record as a hash
    }

Sample usage:

    makeUser('Joe Shmo'); // returns { firstName: 'Joe', lastName: 'Shmo' }

### Users

Write a function `userify` that takes an array of names (strings) and returns
an array of users (hashes) with a first and last name.

    function userify(names) {
      // TODO: return user hashes
    }

Sample usage:

    userify(['Chris Davies', 'Kelly Murray']); // returns [{ firstName: 'Chris', lastName: 'Davies' }, { firstName: 'Kelly', lastName: 'Murray'}]

### CSV summation

Write a function 'summation' that takes a string containing a comma-separated
list of numbers and returns the sum of those numbers.

    function summation(str) {
      // TODO: implement this!!!
    }

Sample usage:

    summation('1, 7, 9'); // should return 17
    summation('-8, 20'); // should return 12

### Compute factorial

Write a function that computes the factorial of a number. For example, the
factorial of 5 is 5 * 4 * 3 * 2 * 1

    function factorial(n) {
      // TODO: return the factorial
    }

Sample usage:

    factorial(5); // returns 120
    factorial(8); // returns 40320

### Longest word

Implement a function that returns the longest word in a string. If there is a
tie, return the first word.

    function longestWord(str) {
      // TODO: implement this
    }

Sample usage:

    longestWord('Hello, world and everyone'); // returns 'everyone'
    longestWord('Hello and stuff'); returns 'Hello'

## Hard Mode

- Without using jQuery or any library,
  - Allow users to input the arguments to the "Normal mode" functions
  - Print out the result to the screen without using an alert

- Write a number guessing game
  - The program picks a random number between 1 and 10
  - The user has 3 turns to guess the number
  - Use an `<input type="number">` element to get input from the user
  - Output the number of turns on the screen
  - If the user wins, show a win message
  - If the user loses, show a lose message
