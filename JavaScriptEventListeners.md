
###### Explain EventListeners with examples

Event listeners are among the most frequently used JavaScript structures in web design. They allow us to add interactive functionality to HTML elements by “listening” to different events that take place on the page, such as when the user clicks a button, presses a key, or when an element loads.

When an event happens, we can execute something.

There are three ways of creating a JavaScript event listener


- HTML’s global onevent attributes
- jQuery’s event method
- The DOM API’s addEventListener() method

I will base most of my explanations on the third method that involves DOM Manipulation. 

### How to Create an Event Listener in JavaScript with addEventListener()

Using native JavaScript, we can listen to all the events defined in MDN’s Event Reference, including touch events. As this doesn’t require the use of a third-party library, it’s the most performance-friendly solution to add interactive functionality to HTML elements.

We can create an event listener in JavaScript using the addEventListener() method that’s built into every modern browser.

The addEventListener() method is used to add an event handler to any specified element. If there are more than one event handlers, then this method attaches an event handler to an element without overwriting existing event handlers. The event listener can be removed easily if you want to, by using removeEventListener() method.

This is how our alert button example will look using plain JavaScript and the addEventListener() method:

##### JavaScript

```javascript

// Selecting DOM element
const button = document.querySelector("button");
 
// Callback function
function alertButton() {
    alert('Hi native JavaScript');
}
 
// Event listener
button.addEventListener("click", alertButton, false);

```

In native JavaScript, we need to first select the DOM element that we want to add the event listener to. The querySelector() method selects the first element that matches a specified selector. So in our example, it selects the first <button> element on the page.

The custom alertButton() function is the callback function that will be called when the user clicks the button. 

Finally, we add the event listener. We always have to attach the addEventListener() method to a pre-selected DOM element using the dot notation. In the parameters, first we define the event we want to listen to ("click"), then the name of the callback function (alertButton), finally the value of the useCapture parameter (we use the default false value, as we don’t want to capture the event—here’s a simple explanation about how to use useCapture).

#### How to Add Functionality to All Buttons

So, the code above adds the alert function to the first button on the page. But, how would we add the same functionality to all buttons? To do so, we need to use the querySelectorAll() method, loop through the elements, and add an event listener to each button:

##### JavaScript

```javascript

// Selecting DOM nodelist 
const buttons = document.querySelectorAll("button");
 
// Callback function
function alertButton() {
    alert('Hi native JavaScript');
}
 
// Event listeners
for (let button of buttons) {
      button.addEventListener("click", alertButton, false);    
}

```

As querySelectorAll() returns a NodeList instead of a single element, we need to loop through the nodes to add a click event listener to each button. For instance, if we have three buttons on the page, the code above will create three click event listeners.

Note that you can only listen to one event with addEventListener(). So if you want the custom alertButton() function to fire on another event type such as mouseover, you’ll need to create a second event listener rule:

##### JavaScript

```javascript

// Event listeners
for (let button of buttons) {
      button.addEventListener("click", alertButton, false);
      button.addEventListener("mouseover", alertButton, false);    
}

```
 

The addEventListener() method attaches an event handler to an element without overwriting existing event handlers. ... You can add many event handlers of the same type to one element, i.e two "click" events. You can add event listeners to any DOM object not only HTML elements. i.e the window object.

The removeEventListener() method removes an event handler that has been attached with the addEventListener() method. Note: To remove event handlers, the function specified with the addEventListener() method must be an external function, like in the example above (myFunction).

To add an event handler to an event of an element, you use the addEventListener() method of the element object:

```javascript

    element.addEventListener(type,eventListener); ...
    <button class="btn">Subscribe</button> ...
    function clickHandler(event) { console.log('Button Clicked'); }

```

Event listeners are among the most frequently used JavaScript structures in web design. They allow us to add interactive functionality to HTML elements by “listening” to different events that take place on the page, such as when the user clicks a button, presses a key, or when an element loads