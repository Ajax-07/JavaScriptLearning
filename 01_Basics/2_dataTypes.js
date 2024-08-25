/*--------------------------------------------------------------------------------------------
 
"use strict"; Defines that JavaScript code should be executed in "strict mode".
// Means it executes all code according to new version of javascript.

- JavaScript has 8 Datatypes:

String - "name" or 'name'
Number - all type of integer and fractional number
Bigint - generally used to store big integer 
Boolean - true/false
Undefined - it's standalone a datatype
Null - it's standalone a value
Symbol - to represent a unique data

Object - mai insbse hat k hu non-primitive, mera bahut long stroy h bhai aram se bataunga


----------------------------------------------------------------------------------------------*/

"use strict"; // it's scope is global
// x = 10    // it will cause an error because "use strict"; prevent to use older syntax.

// javascript doesn't care about semicolon(;) if only one statement is written in only line.
console.log("ajay")
console.log("kumar")

// console.log("yaha") console.log("error h")    // error:  2 statement in single line

// alert(3+3) // don't here, nodejs h bhai browser nhi.

// ab datatype:--------------------------------

let myName = "ajay"    // string
let age = 25           // number
let isHuman = true     // boolean
let someValue = null   // null value if not assigned any
let otherValue         // undefined var if not initialized

console.table([myName, age, isHuman, someValue, otherValue])   // o/p: 'ajay' 25 true null undefined

console.log(typeof myName)       // string
console.log(typeof age)          // number
console.log(typeof isHuman)      // boolean
console.log(typeof someValue)    // object - haa bhai null ek object h
console.log(typeof otherValue)   // undefined - khud ek datatype h