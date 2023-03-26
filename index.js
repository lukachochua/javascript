// Create and appendChild & insertBefore methods

var element = document.createElement('div'); // We create an variable called element with document.createElement function using 'div' as a parameter. 

element.style.cssText = "width:200px; height:20px; background:blue;"; // We styled it directly from JS.

element.onclick = function(){alert('hello');}; // and wrote an onclick event for the 'element' variable, which is represented as an div object.


// document.body.appendChild(element); // We target body part of an html document and with appendChild(parameter) appended JS code in an html.
// Appended div comes right at the bottom, as script tag is located/ran there.

// Node is a part of the overall structure.

var target = document.getElementById('yellow'); // We create a target using document.getElementById() method
document.body.insertBefore(element, target); // and with an instertBefore() method we put an 'element' before div with an ID of 'yellow'/