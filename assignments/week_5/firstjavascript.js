// Takes the text within the quotes and sends it to the javascript console.

console.log("hello world!");
console.log("how are you doing?");

// This is a single line comment

/* 

multi-line
comment

*/

// javascript datatypes - string, number, boolean(switch);true or false
// String "string is texts" not number if you do "49" then it becomes string
"this is a really long sentence. 14930!";
"to use single quotes 'and' in the string, use double quotes on the outside.";
'to use double quotes "and" in the string, use single quotes on the outside.';

//'There's a nice day!' incorrect
//"there's a nice day!" correct

//The computer will break on the second string.
// "hello this is a double quote."  "it's used for text";

"'''''''''";
'"""""""""';

"100"; 

// Number
100;
10.9;
.70009;

// Boolean 
true;
false;

/*
for (var i=0; i < 100000; i++) {
    console.log(i);-fall
}

for (var i=0; i < 100000; i++) {
    console.log("hello!");
}
*/


// VARIABLE do NOT start with special characters, numbers or capital letters
    var myBox;

// naming Schemes
// Camel Case:  capitalize everyword AFTER the first word ex: var myBox;.
//Example: originalLocation
//snake case: every case is replaced by an underscore, no capital letters.
//Example: orginal_location

myBox = "kitchen utensils";

var secondVariable = "bathroom suppies"; //<- the easiest way to create value
/*
console.log("kitchen utensils");


myBox = myBox + "!!!";
*/
myBox = "books";

console.log(myBox);

/*
5 * 10;
6 * 10;
7 * 10;
*/

// Mathematical Operators
// +, -, /, *, %

var sum = 2 + 4; // having spaces b/w numbers easier to read
var difference = 2 - 4;
var quotient = 2 / 4;
var product = 2 * 4;
var remainder = 2 % 4;

// 2 + 4 = var sum2;

//console.log(quotient);
console.log("The Quotient of 2 and 4 is", quotient);
console.log(remainder);

// Logical Operator
// == (equal), >, <, != (not equal to), >=(greater and equal to), <=

var isItRaining = true;

isItRaining == true; //true

var someNumber = 100;

someNumber == 50; //false

someNumber >= 50; //true

someNumber < 50;  //false

someNumber != 50; //true

"hello" == "hello"; //true
"goodbye" == "hello"; //false
"Hello" == "hello"; //false
"hello " == "hello"; //false because there's a space (L)"hello_"

true == true; //true
true == false; //false
false == false; //true

sum > product; //false

var personAge = 45;

//If Statement, is to run code based on existing data.
//If    this is true            then run this
//if        ()                     {}

/*if (true) {
    console.log("This is true!");
}*/

/*
if (false) {
    console.log("This is true!");
} if condition, '(false') is false then it won't run)
*/

if (false) {
    console.log("Nice Day!");
    console.log("Hello Mello!");
}

if (personAge >= 21) {
    console.log("Congrats you can drink!");
} else {
    console.log("Sorry, you are too young to drink!");
}


console.log("We march on!");

// Function asking to run the code block {}
// keyword       name of function       code block
// function       myFunction()              {}

function myFirstFunction() {
 
    console.log("Have a nice day!");
    console.log("Today will be sunny");
    console.log("Today will be dry");
    
    if (raining) {
        console.log("Bring an umbrella");
    }

    var raining = true;
}

myFirstFunction();
myFirstFunction();
myFirstFunction();

/* the difference between the two -
1) var raining = true; comes after the function myFirstFunction() {

2) var raining = true; comes after the console.log("Bring an umbrella");
}

1)
function myFirstFunction() {
var raining = true;
console.log("Have a nice day!");
console.log("Today will be sunny");
console.log("Today will be dry");
if (raining) {
console.log("Bring an umbrella");
}
}

2)
function myFirstFunction() {
console.log("Have a nice day!");
console.log("Today will be sunny");
console.log("Today will be dry");
if (raining) {
console.log("Bring an umbrella");
}

var raining = true;
}
explanation:  By theory, the second one should not work, because the raining variable does not appear before use, therefore it might ping some error message. However, in this case the raining variable in the second work because it has it default value.
*/

nonExistingVariable;

// Practice creating the following:
/*

Variables
Datatypes
If Statements
Logical Comparison
Functions

*/