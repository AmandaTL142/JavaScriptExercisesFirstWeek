//1. Create a new JavaScript file and add these three functions

//Function Declaration
//Observe: no return type, no type on parameters
function add(n1, n2){
    return n1 +n2;
}

//Function Expression
const sub = function(n1,n2){
    return n1 - n2
}

//Callback example
const cb = function(n1,n2, callback){
    return "Result from the two numbers: "+n1+" and "+n2+" = "+callback(n1,n2);
};

//Call the functions above as sketched below. It’s not about doing it as fast as you can,
//but about understanding what's happening, so make sure you understand each line.

console.log( add(1,2) )     // What will this print?
//This prints the number 3


console.log( add )          // What will it print and what does add represent?
//This prints the function [Function: add].

console.log( add(1,2,3) ) ; // What will it print
//This prints the number 3, as the third argument is ignored

console.log( add(1) );	  // What will it print
//This prints NaN, as the second argument is absent, making it undefined and thus not a number

console.log( cb(3,3,add) ); // What will it print
//This prints the String "Result from the two numbers: 3+3=6"

console.log( cb(4,3,sub) ); // What will it print
//This prints the String "Result from the two numbers: 4+3=1"

//console.log(cb(3,3,add())); // What will it print (and what was the problem)
//This prints /Users/amandatolstruplaursen/Visual/First exercises.js:16
//return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
//This is the function "add"s returnstatement.
//The problem is that the function "add" is called with no arguments instead of just referenced by name (add() vs add), when it is used as a parameter.
//The error message is "TypeError: callback is not a function".


console.log(cb(3,"hh",add));// What will it print
//This prints "Result from the two numbers: 3+hh=3hh", as the arguments are treated like strings.

//4)  Write a mul(n1, n2) function (inspired by add and sub) and use it as the callback for the cb function
function mul(n1, n2){
    return n1*n2;
}

console.log(cb(3,3,mul));

//5) Call cb, this time with an anonymous function that divides the first argument with the second
console.log(cb(3,3,()=>3/3));
