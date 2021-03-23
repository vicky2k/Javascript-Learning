###### Explain Infinite Loops with Example
###### Explain For loops with Example
###### Explain For each loops with Example
###### Explain For of loops with example
###### Use the For...Each loop to loop through an array of objects and log the second property of each object to the console
###### Study chapter 6 and chapter 9

### Infinite Loop

An infinite loop is a sequence of instructions in a computer program which loops endlessly, either due to the loop having no terminating condition, or having one that can never be met, or one that causes the loop to start over. 
    An infinite loop occurs when a condition always evaluates to true. Usually, this is an error.

An Example of an Infinite Loop is

```javascript

for (let index = 5; index > 1; index++) {
  console.log('Hello')
}

```

### For Loop

The for loop  has all its declaration (initialization, condition, iteration) at the top of the body of the loop. The Example code used above to explain Infinite loop is a typical scenario of a Loop. Another Example i can give to explain For Loop is

```javascript

const NumberOfStudents = document.querySelectorAll(.students)
for ( let i = 0; i < NumberOfStudents.length; i++ ) {
console.log(NumberOfStudents[i]); 
} 

```

### For Each Loop

The For Each is a variation of the for Loop that is used for looping through arrays.
when working with the For Each Loop, the method passes a callback function for each element of an array together with the array's current value and index number. Always remember that the index number of an array starts from 0 then upwards.

```javascript

const people = ['obi', 'ada', 'ego', 'emma'];
for (let index = people.reverse; index < 5; index++)
people.forEach(person => {
    console.log(people)
})

```

### For of loops

The for...of loop statement creates a loop iterating over iterable objects, including built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Mapand Set in JavaScript. Its a new loop in ES6 Version.
for...of loops are the fastest when it comes to small data sets, but they scale poorly for large data sets. It is slowest, but it is syntactic sugar over for loops.

```javascript

const people = ['obi', 'ada', 'ego', 'emma'];

const people = [];
for (people[0] of ['obi', 'ada', 'ego', 'emma']) {
    console.log(people[0]);
}

```

### Using the ForEach loop to loop through an array of objects and log the second property of each object to the console

```javascript

const people = ['obi', 'ada', 'ego', 'emma'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});
console.log(people[1]);

```