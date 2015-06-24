# MPG

Ever been car shopping? Ever wish that you could compare your prospective car's stats with really old cars?
Well now you can. You are going to write an application that imports auto data and allows users to compare cars.

## Goals

- Write a single page application
- Write a responsive application
- Load data via AJAX
- Visualize data using C3 or other library
- Render data as HTML via templates

## The dataset

There is a publicly available set of data about cars described here:

- A description of what the data means is available [here](http://archive.ics.uci.edu/ml/machine-learning-databases/autos/imports-85.names)
- The data itself is available [here](http://archive.ics.uci.edu/ml/machine-learning-databases/autos/imports-85.data)
- It's part of UCI's [awesome dataset repository](http://archive.ics.uci.edu/ml/datasets/Automobile)

## The program

### MVP

- Show a list of all cars to the user
- The user can select a car, and you'll show them a barchart (or other vizualization) indicating how their selected car's MPG compares to the overall average

### Normal mode

MVP plust the following:

- Instead of showing users the entire list, show them the first N (maybe 10 or 20) cars
- Users should be able to search for a car, and you'll show them the matching results

### Hard mode

- Users should be able to paginate through the list of cars or search results
- Keep the list of cars around as an array (or in a database) and serve them up using Node
- Allow users to add new cars to the list of cars
- Allow users to visualize cars by various categories:
  - vs cars with the same number of cylinders
  - vs all cars
  - Compare horsepower
  - Compare MPG
  - Compare acceleration
