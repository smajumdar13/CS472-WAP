/**
 * app.js
 */

console.log("Hello World from app.js");
var i=0;
console.log(i);

var j="abc";
console.log(j);

console.log(i+j);

// integer, float, boolean, string, undefined, null

//undefined
var k;
console.log(k);

// null, unlike java, need to assign to a variable
var l=null;
console.log(l);

// alert("hello world");

// change since ES 2015, keywords for declaring variables
const m=7;
// m=3;
let n=4;
n=99;
console.log(m);
console.log(n);

// Global scope
var a = 8;
function printA(){
    console.log("a=" + a);
}
printA();
//Local scope
let b= 4;

let callbacks = [];
for(let z=0; z <=2; z++){
    callbacks[z] = function(){
        return z*2;
    }
}

console.log(callbacks[0]());
console.log(callbacks[1]());
console.log(callbacks[2]());

const myarray = [1,2,3];
myarray.push(5); //can change inside the array
console.log(myarray);

const student = {
    studentId: "000-01-0001",
    firstName: "Sam",
    lastName: "Rhodes",
    course: "CS472"
}
console.log(student);

// Quirks of JS, bugs in autoconversion
console.log("2" + 3);
console.log("2" * 3);
console.log("2" + "3");
console.log("2" * "3");

// equals and strict equals
console.log("5.0"==5);
console.log(5.0===5);
console.log("5.0"===5);

const n1 = parseInt("42 is the number"); //outputs 42
console.log(n1);

// Hoisting
console.log(square2(5)); // runs beforehand
function square2(n) {
    return n*n;
}

// No hoisting
console.log(square3(6));
const square3 = function(n){
    return n*n;
}



