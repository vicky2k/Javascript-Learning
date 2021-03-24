###### Create an array with three elements
- The second element should be a function
- Use the function outside the array

###### Explain the difference between these blocks of code
###### Complete the looping/do it properly
###### Complete the dom assisgnment




### 1. An array with three elements


```javascript

const fruits = ['apple', getFruits = ()=>{return fruits}, 'orange'];
fruits.forEach(eating => {
content.innerText += `<p>${eating}</p>`;
});
console.log(fruits[1]);
console.log(fruits[2]);

```


### Explain the difference between these blocks of code

```javascript

for ( club of footBallClubs ) {
 const objectValues = Object.values(club)
 const secondValue = objectValues[1]
 
 console.log(secondValue)
}

```

```javascript
 
footBallClubs.forEach((club) => {
 const objectValues = Object.values(club)
 const secondValue = objectValues[1]
 
 console.log(secondValue)
})

```

In actual Function , there is no difference between these two blocks of codes. The only clear difference is in the different type of looping used. The first block of code uses a For..of Loop to print the second property of each object to the console while the second block of code uses a forEach Loop which always uses an arrow function to log the second property of each object to the console. 


### Completing the looping/do it properly
### Using the ForEach loop to loop through an array of objects and log the second property of each object to the console


```javascript

const people = [ {name: 'obi', gender: male, age: 15},
 {name: 'ada', gender: female, age: 17},
 {name: 'ego', gender: female, age: 20},
 {name: 'emma', gender: male, age: 10} ] 


people.forEach(person => {
const objectValues = Object.values(person)
const secondValue = objectValues[1]

console.log(secondValue)

}); 

```