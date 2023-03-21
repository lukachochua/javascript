// Changing Elements Contents

// If you have large JS file at the end of HTML content (last part of body), not to ruin websites load time.
// It also means that script is ready to modify all of the HTML elements. 

var pHello = document.getElementById("hello"); // Not a new object, just a memory pointer to an existing object created in the Document Object.

// You can name 'getElement' and save it to the memory pointer a.k.a. variable.

pHello.innerText = "New World"; // innerText contain no HTML whatsoever.
pHello.innerHTML += " <b> Order</b>"; // While using innerHTML one can change HTML too. 
pHello.outerHTML = '<h2 id="hello">New World Order <span>Hello World</span></h2>' // There is also outerHTML function that gives us an html of the parent element. <p></p> in this case.

/*
document.getElementById("hello").innerText += " Order"; // Used in console returns 'New World Order' on the browser
First part returns an object, after the second '.' it's accessing an object. 
*/


var spanH1 = document.querySelectorAll('h1 span');//[0]  querySelectorAll() always returns an array and html part of the element is always [0] index.

spanH1[0].innerHTML = "new text here!!"; // You can manipulate array at this part too.

// When we say document.getElementsByTagName and get all paragraph elements,  You're getting memory pointers to the object in the document model. 
// Not a new model, just a way to reference existing model. 
