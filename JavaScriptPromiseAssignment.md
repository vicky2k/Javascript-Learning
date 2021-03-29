###### Study HOF again
###### Create your Higher-Order Function
###### Explain the settimeout function with example
###### Explain promises with examples
###### What are side effects in programming?
###### Examples of side effects in JS
###### Study classes in JavaScript

### My Higher-Order Function

A higher order function is a function that takes a function as an argument, or returns a function. Example code is shown below

```javascript

const numbers = [1, 2, 3, 4, 5, 6, 7];
const isGreaterThan = x => x > 4;
numbers.filter(isGreaterThan); // [5, 6, 7] 

```

### Explain the settimeout function with example

Using the "setTimeout" method/function in JavaScript, you are able to delay your code from executing, in a time set in milliseconds.

An example of settimeout in javascript is

```javascript

const btnShowmsg = document.getElementById("show-message");
btnShowmsg.addEventListener("click", function (){
setTimeout(function (){
alert("This Week is the Holy Week");
}, 2000);

```

### Explain promises with examples

Promises are just like callbacks, a way of dealing with things being asynchronous - when we don't know for certain in what order things will happen. I can also liken promise to an object that represents the actual completion of an operation. it's a cleaner way of writing Call backs. A Javascript Promise usually has two function parameters- Resolve and Reject.
Promises can be said to be Thenable and this is because it's only promises in Javascript that use the .then Method. There is a Promise.all () and a Promise.race () Methods. 
This has a variety of uses, such as controlling interaction within the user interface, showing special content or even developing games.

Examples  are written below

```javascript

function watchTutorialCallback(callback, errorCallback) {
  let userLeft = false
  let userWatchingCatMeme = false

  if (userLeft) {
    errorCallback({
      name: 'User Left', 
      message: ':('
    })
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: 'User Watching Cat Meme',
      message: 'WebDevSimplified < Cat' 
    })
  } else {
    callback('Thumbs up and Subscribe')
  }
}

function watchTutorialPromise() {
  let userLeft = false
  let userWatchingCatMeme = false
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: 'User Left', 
        message: ':('
      })
    } else if (userWatchingCatMeme) {
      reject({
        name: 'User Watching Cat Meme',
        message: 'WebDevSimplified < Cat' 
      })
    } else {
      resolve('Thumbs up and Subscribe')
    }
  })
}

watchTutorialCallback(message => {
  console.log(message)
}, error => {
  console.log(error.name + ' ' + error.message)
})

watchTutorialPromise().then(message => {
  console.log(message)
}).catch(error => {
  console.log(error.name + ' ' + error.message)
})

const recordVideoOne = new Promise((resolve, reject) => {
  resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('Video 3 Recorded')
})

Promise.all([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then(messages => {
  console.log(messages)
})

Promise.race([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then(message => {
  console.log(message)
})

```

### What are side effects in programming?


Side effects are mutations or actions that happen in our code environment that we cannot make an account of. It could result in pollution of the global scope.

Strictly speaking, if a program / function modifies the state of something else (outside its own scope), then it is producing a side effect. This could effectively include something like "display a character on the screen", or it could be changing the value stored in some arbitrary RAM location, or anything similar.
In order for a function or expression to have a side effect, the state it modifies should be out of its local scope.
Simply put, a  side effect is anything that compromises the purity of a function


### Examples of side effects in Javascript

Changing the state of a local variable is definitely not a side-effect. A side-effect (by definition) is a change to something outside the scope of the enclosing function. So as long as the variable only "lives" inside the function's scope, changing its value does not create a side effect. 
It's once you start fiddling with global variables, dynamically scoped variables (i.e. those locals from a calling function), by-reference parameters and things like IO (e.g. changing the state of a pixel on the screen), when a function is considered to have side-effects.

Examples of side effects in Javascript

    Changing (mutate) an external variable in any way.
    Showing things in the screen.
    Writing to a file.
    Making an http request.
    Spawn a process.
    Saving data in a database.
    Calling other functions with side-effects.
    DOM manipulation.
    Randomness.
