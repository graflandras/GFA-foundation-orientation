# Rueppellii Foundation Normal

## Getting Started

- Fork this repository under your own account
- Clone the forked repository to your computer
- Create a `.gitignore` file so generated files won't be committed
- Commit your progress frequently and with descriptive commit messages
- All your answers and solutions should go in this repository

## Keep in mind

- You can use any resource online, but **please work individually**
- **Don't just copy-paste** your answers and solutions, use your own words instead
- **Don't push your work** to GitHub until your mentor announces that the time is up

## Exercises

### Exercise 1
- Write a method which takes two matrices as parameters and returns a new matrix.
- The method should compare each element in the input matrices and fill the
returned matrix with the greater values.
- You only have to deal with square matrices. A square matrix is a matrix with the
same number of rows and columns.
- Write 2 different test cases for the method.

#### Example 1
Input 1
```
[
  [2, 1],
  [0, 1]
]
```

Input 2
```
[
  [0, 3],
  [-1, 1]
]
```

Output
```
[
  [2, 3],
  [0, 1]
]
```

#### Example 2
Input 1
```
[
  [-1, 1, 0],
  [0, 1, 0],
  [0, 1, 0]
]
```

Input 2
```
[
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
]
```

Output
```
[
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0]
]
```

### Exercise 2
Write a method which can read and parse a file containing information about
weather in various cities. The method must return the name of the city which
had the most rainy days.

#### Example
[Example file can be found here.](cities.csv)

Output
```
Gyor
```

### Exercise 3
Write a program which can store books in a bookshelf.

There are two types of books.
- Hardcover book
  - It should have the following fields: title, author, release year, page
    number and weight.
  - The weight must be calculated from the number of pages (every page weighs
    10 grams) plus the weight of the cover which is 100 grams.
  - It must have a method that returns a string which contains the following
    information about the book: author, title and year.
- Paperback book
  - It should have the following fields: title, author, release year, page
    number and weight.
  - The weight must be calculated from the number of pages (every page weighs
    10 grams) plus the weight of the cover which is 20 grams.
  - It must have a method that returns a string which contains the following
    information about the book: author, title and year.

You must be able to add books to the bookshelf and must have methods to answer
the following problems.
- Who is the author of the lightest book?
- Which author wrote the most pages?

## Questions

### What does the `private` keyword mean?
Private variables for example in a class means that we can acces to these variables' values only within this class. 
If we want to reach them out of the clas, we have to write a getter. 

### What does the `static` keyword mean? How can you access a `static` method?
static means for example a method for a class, which method is not called on the instances of the class, but on the class itself. 
