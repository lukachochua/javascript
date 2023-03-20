// Undestanding the Document Object Model (DOM)

// DOM is the way of interacting and communicating with the objects. HTML document is like a tree. We have an object that represents it. 

// The document object model is where we have document that's represented by objects and it's modeled upon how you developed your HTML file. 
// It's not actual visual, but an object representation of it. 

console.log(document.childNodes[1].childNodes[2]); // this returns 'body' element, but this way isn't convenient. We'll learn more about DOM
// manipulation in the next lesson. Access DOM via css selectors, classes and ID. If you start changing around nodes it'll get confusing real fast as
// indexes of the elements often change after some tuning. We use css selectors and target specific elements to style them. 