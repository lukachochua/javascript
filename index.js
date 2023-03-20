// Targeting DOM elements

// We have several methods that come with document (document is the global variable) to target elements. 
// You can targets elements by their tagnames too.  NS means namespaced. 


// Get tags
console.log(document.getElementsByTagName('p')); // You don't include angled brackets. 
// You target all of the paragraph elements like this and can modify 'em. 
// When you got "getElements" <- always returns array, even if we have one tag in the html file. 

// Sometimes you want to target something specific, not all paragraph, or h1 tags. 
console.log(document.getElementById('hello')); // This is how you get an element by it's id.
console.log(document.getElementsByClassName("pClass")); // This is how you get an element by it's class name. Again, plural = array.

// CSS Selectors.

console.log(document.querySelectorAll('#hello')); // You use css selectors to target specific element. # for id and etc. "All" guarantees and array. 
// This is how you select element via ID.

console.log(document.querySelectorAll('.pClass')); // This is how you target an element via class. 

// You can combine them too.

console.log(document.querySelectorAll('#hello, .pClass')); // This targets both - by an ID and class.

// Advanced selectors

console.log(document.querySelectorAll('p[data-content="123"], body >  h1.pClass > span')); // use single quotes on the outter edge and double quotes inside. 
// > in this case shows us which one is the parent element. body>h1 - etc. if you remove class, second part of the selector will no longer works.