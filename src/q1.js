/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

function swap(x, y){
    // Task 1: Add code here
    
    console. log( `The current value of x is ${x} and y is ${y}`);
    
    if(typeof(x)!== 'number' || typeof(y)!== 'number')
    {
        console.log(-1);
    }
    
    else  
    x= x+y;
    y= x-y;
    x= x-y;
    
    console.log(`The values of x is ${x} and the value of y is ${y} after the swap`);
}

// Task 2: Add code here

swap(15,33);

swap('apple', 2) ;

module.exports = swap;
