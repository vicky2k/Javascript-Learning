###### Explain HOF with example
###### Explain the map and reduce methods with example

### HOF stands for Higher Order Function

A higher order function is a function that takes a function as an argument, or returns a function. Example code is shown below

```javascript

const numbers = [1, 2, 3, 4, 5, 6, 7];
const isGreaterThan = x => x > 4;
numbers.filter(isGreaterThan); // [5, 6, 7] 

```

### MAP in Javascript

map is the name of a higher-order function that applies a given function to each element of a functor, e.g. a list, returning a list of results in the same order. It is often called apply-to-all when considered in functional form.

The map method transforms an array by applying a function to all of its elements and building a new array from the returned values. The new array will have the same length as the input array, but its content will have been mapped to a new form by the function. E.g

```javascript

      //declarative way
       const array = [1, 2, 3, 4, 5];
       const newArr = array.map((value) => value * 2);
       console.log(newArr)
      //expected output: [ 2, 4, 6, 8, 10 ]

```

### Reduce Method in JavaScript

The Reduce Method builds a value by repeatedly taking a single element from the array and combining it with the current value. When summing numbers, you’d start with the number zero and, for each element, add that to the sum. Example code is shown below


```javascript

       //declarative way to sum up the values in array
        const arr = [1, 2, 3, 4, 5];
        var total = arr.reduce((sum, value) => sum + value, 0);
        console.log(total)
       //expected output: 15

```