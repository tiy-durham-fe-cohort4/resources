# Titanic

## Description

James Cameron is remastering his movie "Titanic" and wants to get some
interesting facts to use in the marketing campaign.

You've been tasked with coming up with these stats and displaying them in
a marketing page for the movie.

Time for another dataset... It's a bigun, too.

It's a CSV (comma separated value) string containing records of the passengers
on the Titanic. (Grim stuff. But it was an interesting, publicly available
dataset, so we're using it!)

The goal is to compute some statistics on the data and display it.

## Objectives

### Learning Objectives

After completing this assignment, you should understand...

* The array map, filter, reduce, and forEach methods
* Have a deeper understanding of hashes and objects

## Resources

- [The titanic dataset](https://github.com/tiy-durham-fe-cohort4/resources/blob/master/datasets/titanic.js)

## Details

### Deliverables

* A GitHub project called "titanic"

## Normal Mode (MVP)

Here's a small sample:

```

PassengerId,Survived,Pclass,Name,Sex,Age,SibSp,Parch,Ticket,Fare,Cabin,Embarked
1,0,3,"Braund, Mr. Owen Harris",male,22,1,0,A/5 21171,7.25,,S
2,1,1,"Cumings, Mrs. John Bradley (Florence Briggs Thayer)",female,38,1,0,PC 17599,71.2833,C85,C
3,1,3,"Heikkinen, Miss. Laina",female,26,0,0,STON/O2. 3101282,7.925,,S
4,1,1,"Futrelle, Mrs. Jacques Heath (Lily May Peel)",female,35,1,0,113803,53.1,C123,S
5,0,3,"Allen, Mr. William Henry",male,35,0,0,373450,8.05,,S
6,0,3,"Moran, Mr. James",male,,0,0,330877,8.4583,,Q

```

Your job is to convert the CSV string into an array of objects that represent
the  passengers.

- Split the array on the new-line character: `\n`
- Use the array's `map` method to convert each record into objects

An example object, using the first record from the example above would look
like this:

```
{
  passengerId: 1,
  survived: false,
  pclass: 3,
  name: 'Braund, Mr Owen Harris',
  gender: 'male',
  age: 22,
  ticket: 'A/5 21171',
  fare: 7.25
}

```

We'll ignore the SibSp, Parch, Cabin, and Embarked fields, because I have no
clue what those mean!

Once you've converted the data into an array of objects, it's time to practice
your array methods again!

Use some of these methods `filter, map, reduce, forEach, some, every` to find
the following:

- What was the average fare?
- What percentage of passengers were male?
- What percentage were female?
- What percentage survived?
- What percentage of survivors were female?
- What percentage of survivors were male?
- What was the average passenger age?
- What was the average female's age?
- What was the average male's age?
- What was the average survivor's age?
- What's the total of all the fares?

Or if you think of a stat that you'd like to know, calculate it, too!

- Use the DOM to display the stats
- Use CSS to style it
- Make it responsive

## Hard Mode

- How many of each pclass were there?
- What percentage of each pclass survived?
- Allow users to search the list of passenger names (display the top 10 results)
