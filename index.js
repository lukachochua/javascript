// Array Modification

let car = {
    make: "Volvo",
    speed: "160",
    engine: {
        size: 2.0,
        make: "BMW",
        fuel: "petrol",
        pistons: [{maker: "BMW"}, {maker: "BMW2"}],
    },
    drive: function() { return "drive"}
};



let array = [
    "string",
    100, 
    ["embed", 200],
    { car: "ford" },
    function() { return "drive"}
];

/*
array[0] = "string"; // to assign new value to the index of the array, you just need to reassign it like so.

array[0] += " concat"; // of course, one also can concatinate new values to the existing string. 

array[5] = "new string"; // be careful while using brackets. If you don't know how many indexes there are, you might add undifined/null indexes

array[20] = 2020; // Adds index of 20 and 14 empty ones after index 5 (that exists). 'empty x 14" in console. 

array['test'] = "test";
array.test2 = "test2"; // Don't do these kind of things, because array will start to function like an object and indexes can't be used anymore. 
why is this bad? arrays are supposed to be countable/numerable. This way, array loses one of it's main charesteristics.

*/

// Length property. It tells us how many elements are in the array.

array[5] = "new value"; // Now array has 6 elements. you can check length of an array with 'array.length'.
// All of the objects have '__proto__', that javascript language created. It has all of the methods that can modify data in array. These are prebuild methods.


// Remove elements from the array

array.shift(); // Use this when you want to get rid of the first element of the array.

array.pop();  // Use this when you want to get rid of the last element of the array.


// Add elements to the array

array.unshift("string", 20, 20.22, function(){}, {}, []); // One can add any kind of element (primitive data, object or function) to the array like so.
// This adds items right at the begining at the array. 

array.push(200, 300, 'new value'); // One can add elements to the array like so. In both cases you can add one value, or as many values as you wish. 

array.splice(2, 2); // First of you define which index you want to start splicing from (index 2 in this case), than define how many elements u want to splice (2). 

array.splice(1, 0, "spliced string", 200, 20.31); // You write 0 in the predifined splice method as the second argument and add new elements after comma. 
// We don't delete index '1' in this case, it just moves down and new elements are added in. 

array.splice(2, 2, 'world200'); // In this case splice() method deletes two indexes of an array and adds a new one, or new ones from the index one
// gives to the splice function as the first argument.  



console.log(array); 

