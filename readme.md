1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
= getElementById returns only one element from the DOM that has an id but getElementsByClassName returns an HTMLCollection from the DOM where all elements use the same class.querySelector returns only one element which match the first one but querySelectorAll returns all matched elements as a list


2. How do you **create and insert a new element into the DOM**?
=First, Create a new element:let new = document.createElement("div");
Second,Add content :new.innerText = "Hello";
Third, Select the parent element : let container = document.getElementById("container");
Fourth,Enter the new element:container.appendChild(newDiv); 

3. What is **Event Bubbling** and how does it work?

=Event Bubbling is a type of DOM event method, where when an event is triggered on an element, it propagates from child to parent.

4. What is **Event Delegation** in JavaScript? Why is it useful?
= You will use a listener for one parent Instead of assigning separate event listeners to all child elements.There is no need to attach a separate listener for many child elements and later, if a new child element is added to the DOM, the parent listener will handle it automatically.


5. What is the difference between **preventDefault() and stopPropagation()** methods?
=This means that it blocks what the browser normally does. StopPropagation() stops event bubbling.
This means that the event will no longer reach the parent elements.