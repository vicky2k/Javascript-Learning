###### Explain variable scoping with examples
######  Explain with/in objects
######  conditionals
###### functions


Scope in JavaScript refers to context (or portion) of the code which determines the accessibility (visibility) of variables. In JavaScript, we have 2 types of scope, local and global

### Global Scope

A variable defined outside any function, block, or module scope has global scope. Variables in global scope can be accessed from everywhere in the application.

There is only one Global scope throughout a JavaScript document. A variable is in the Global scope if it’s defined outside of a function.

You can also access and alter any variable declared in a global scope from any other scope.

### Local Scope

Variables declared within a function are in the local scope. Local scope is also called function scope because local scope is created by functions in Javascript. Variables in the local scope are only accessible within the function in which they are defined, i.e they are bound to their respective functions each having different scopes. This allows us to create variables that have the same name and can be used in different functions.


####  variable scoping examples with conditionals

##### javascript

```javascript


// A function that prints my name if the conditions  are met

if (true) {
  let name = "Chidi";

  console.log(name); // Chidi!
}

console.log(name); // Error, no such name!

```

The variable name is assigned a value within the function scope and this variable  can only can only be accessed within that declared scope. An attempt to access this variable outside the scope just doesn't work. That is how local scope variables work  

#### variable scoping examples with functions

##### javascript

```javascript

// A Function that adds a value to an any argument passed to it

var num = 10;

function increase(value)
{
  value++;
  console.log("value is " + value);
}
increase(num);
console.log("num is " + num); 
console.log("num is: "+ num);

```

In the block of code above, num is declared as a global variable and assigned a value of 10. This is because it’s defined outside of the function. Since this Variable is in global scope, it can be accessed from everywhere in the application. However, within the function, the num variable is assigned an incremental value and this value can be accessed only within the scope of the function. num in this case is in a local scope.