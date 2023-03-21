// Event Handlers

// Events are when something happens in our application and we want to run set of instructions/subroutines. Touch screen, press button etc.

let select = document.getElementsByName('cars')[0]; // This returns an array and we want to access element on the 0 index of an array.


select.onclick = function(event) { // populate with param 'event' as a first param. It assigns assigns event object, that gives details about event that's triggered.
// You just need to give param a name to reference it as an object during certain operations. 
    console.log(event);
}; // This is called callback function. All such functions are associated with an event. Functions in an JS file overwrite ones in html. 

select.addEventListener('click', function(event) { // This functions will ALWAYS recieve event objects.
    console.log('clicked by add event listener');
}); // 'on' is namespace, we don't need it here. 
// This is not an inline event, you'll not see this function on the object itself. It's going to be defined by JIT compiler.

// If you want to remove event listener using functions symbol name, you need to name callback functions like so. 
function clickCallBack() {
    console.log('clicked by add event listener');
}

select.addEventListener('click', clickCallBack); // provide 'symbol name' - function name.


select.removeEventListener('click', clickCallBack); // same syntax here. 

// To add event listeners, you must target the element itself, than you have to choose specific event (i.e. onclick). And than you can add callback callback
// function, that has 'event'/'e' as a parameter. They all recieve event object, this symbol name is automatically referencing symbol name that's defined in the 
// JIT compiler and you can add use addEventListener and have multiple callback functions on a single event. 
