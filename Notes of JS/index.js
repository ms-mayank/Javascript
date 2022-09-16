/*
console.time("Your code took"); // it initiates the time function.
console.log("hello world");
console.table({ Name: "Mayank", Description: "Professional" }); //prints object in table format.

console.warn("this is warining"); //shows message as warning.
// console.clear(); //it will clear the console-> it will clear the moment interpreter comes to this line
console.timeEnd("your code took"); // it will calculate time taken to execute lines in between console.time to console.timeEnd() * do not add console.clear in between of this
// console.assert(2 > 3, "displayes error message if condition is falsed ");
console.error("This is error"); //To show error message
*/

//variable initialization = var, let, const
/*variable name are case sensitive, can start with _underscore and $dollar but not with 2number*/
// let have block level scope but var have global scope = var creates global variable.
//const arr1 = [1,2,3,4] -> even being const we can do push and pop operation on array as well as objects; we can reassign arr1 = [23,4,52] 'reassigning will give error'
// Primitive data types: String, Numbers, Boolean, Null, Undefined, Symbol
//Reference data types: Arrays, Object literals, functions, Dates.
// let date = new Date();

/*
// Type conversion
let myvar = String(34);
let date = String(new Date());
let arr = [1, 2, 3, 4]; // lenght of arr =4
let arr1 = String(arr); // it will convert the value to string, length of arr1 =7; counts comma
let i = 8;
console.log(i.toString()); // toString() method also converts anything to string

let num = Number("345"); // 345
let num1 = Number("234ds"); // NaN - Not a Number
let num2 = Number(true); // true - 1 || false - 0

//parseInt() and parseFloat()
let num3 = parseInt("34.23"); // will return only 34 - integer part
let num4 = parseFloat("34.23"); // will return same as Number() 34.23 - with decimals

console.log(num3.toFixed(4)); // it will give value upto 4 decimal places
*/

/*
// Strings Methods
let html;
html = "My";
html = html.concat(" string", " one"); // My string one
console.log(html);
console.log(html.length); //13
console.log(html.toUpperCase());
console.log(html.toLowerCase());
console.log(html.indexOf("a")); //gives the first index of given substring else returns -1
console.log(html.lastIndexOf("str")); //give the last index of given substring else returns -1
console.log(html.endsWith("ab"));
console.log(html.substring(1, 4)); //from 1 index to 3 index
console.log(html.substring(-4)); //it will give entire string except last 4
//**********************************
console.log(html.includes("ab"));
console.log(html.slice(1, 4)); // works same as substring only difference in slicing with negative number
console.log(html.split(" ")); // converts string in Array
//**********************************
console.log(html.replace("this", "id")); //Replaces first occurance fo "this" with "id"
*/

/*
// Array and objects
const arr = [1, 2, "dss", 2.3];
const arr1 = new Array(1, 23, 4);
console.log(arr.indexOf(2));
arr.push("4"); //add at end
arr.unshift("0"); // add at start
arr.pop(); //removes from last
arr.shift(); // removes from start
// *************************
arr.splice(1, 2); // .splice(starting index,element count) -Start from index 1 and remove next 2 elements
//*************************
arr.reverse(); // it will reverse original array
let x = arr.concat(arr1);
**********************
let arr= [1,2,3,4,5]
arr.forEach(function (element){
  console.log(element)
})// -> forEach() - in array extracts each element from array
**********************
*/

/******************************
let x = 2;
x++;
console.log(++x);
a = ["1, 2, 3", "a", "d"];
for (i in a) {                // ==> in keyword iterates through item but returns index not item
  
  console.log(a[i]);
}
arr.forEach(function (element, index, array) {
  console.log(element, index);
});
*****************************
*/
