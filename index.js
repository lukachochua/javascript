// Changing Elements Style

var el = document.getElementById('style'); // First you target the element. Than we target elements 'style' property/object. 
// That object contains many properties resembling css properties and than we assign values as in CSS properties. 

/*
el.style.background = "blue"; // This is an object in the Document Object Model. it has a lot of properties that allow us to modify css. 
// background is just one of them. Here we need quotation marks - we don't need variable blue, but string blue.
el.style.color = "white";
el.style.width = "200px"; // You need to include measurment unit like "px".
*/ 

/*

el.style.cssText = "background: blue; color:white; width:200px"; // This is a better and more efficient way to style html element
el.style.cssText += "height:100px;"; // You can also concatinate styles not to lose existing ones.
// csstext is basically applied to the style attribute.

*/

// To get existing style from the <style> tag, you can use 

console.log(getComputedStyle(el)); // property.

// Computed properties are default, they're not actual styles applied from JS. 
