// For and For In loops


let classRegister = ["Luka", "Ano", "Nikala", "Nini"];

// Increment


for (let i=0; i < classRegister.length; i++) { // This is for loop. Syntacticlly it looks very simmilar to the if() condition.
    // index      condition           index++

    // If() is singular, for() condition is plural. it's running execution context multiple times. 
    console.log(classRegister[i]); // We can use variable 'i' in the execution context of the for loop.
} // When statement in the condition is false (i.e. i is equal to the array lenght in this case) for() loop stops.

// Deincrement

// Classregister array length is 4. minus 1 = 3 and it'll start from last item of the array, which in this case is "Nini".

for(let i = classRegister.length-1; i >= 0; i--) {
    console.log(classRegister[i]); // This gives inverted list.
}


// For in loop

for(var index in classRegister) { // No need for assignment operator. We're looking for the indexes in the classRegister/given array.
    console.log(classRegister[index]); // For in loop is incrementation. It's the same as for loop with increment (first example).
}