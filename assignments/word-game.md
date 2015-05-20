# Word Game

OK. This assignment is the hangman game. But I don't like the name hangman, so come up with your own...

## Description

Create a hangman game.

There is a JavaScript file which contains an array of 100 common English words:

[https://github.com/tiy-durham-fe-2015/hangman/tree/master/js](https://github.com/tiy-durham-fe-2015/hangman/tree/master/js)

You'll want to include that in your project.

The array's name is hangmanWords.

Your game should filter out any 1 and 2 letter words.

Your game should choose a word at random.

The user will then guess a letter.

The user has 8 guesses (or some limit like that).

If the user guesses a letter correctly, you should update the
screen accordingly.

If the user guesses incorrectly, you should decrement the users'
number of guesses remaining.

If the user gets all the letters in the words before running out of
turns, he/she wins.

## Example

Your game logic has chosen the word: "hello".

You should display:

    _ _ _ _ _

An underscore for each letter in the word.

You should also display the number of turns remaining:

    Turns: 8

Next, the user guesses: a

You should decrement the number of turns remaining:

    Turns: 7

Next, the user guesses: l

You should display:

    _ _ l l _

And so forth.

## Hint on displaying

To update different parts of your screen, you'll need to select the
appropriate elements and update them in JavaScript.

So, you may have HTML that looks like this:

    <div class="game-screen">
      <span class="turns-remaining">
        Turns: <span class="turn-count">8</span>
      </span>
      <span class="game-word">
      </span>
    </div>

To update the game word, you would do something like this in JavaScript:

    document.querySelector('.game-word').textContent = '_ _ _ _ _ _';

To update the turns remaining, you would do something like this in JavaScript:

    document.querySelector('.turn-count').textContent = '7';

## Normal mode

- Get your game working and deployed to gh-pages!
- Email me the link

## Hard mode

- Make it look good!
- Instead of showing the number of turns, you could show a health meter.
- Try playing a sound when the user guesses wrong
- When the player loses, play a video or show some funny losing animation
