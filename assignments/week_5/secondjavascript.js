// Datatypes
"strings";
1000;
false;

// Variables
var someVariable = -100;
var isItRaining = false;

//If Statements
if (someVariable > 10) {
    
    console.log("This number is higher than 10.");

    if (someVariable < 1000) {
        console.log("This number is lower than 1000.");
    }

} else {
    console.log("This number is lower than 10.");
}

if (isItRaining == true) {
    console.log("Bring an umbrella!");
}

// Functions {}='code block'
function coolFunction() {
    console.log(100);
    console.log(10);
    console.log(1);
}

coolFunction();
coolFunction();
coolFunction();


// Arguments; values & Parameters;taking the cumstom values
// Arguments get stored inside of Parameters
// Arguments are the values given to the function, and parameters are the function variables that will hold these values. ex:'(message)' is variable (2 times undefined is NaN)

// Parameters are written  inside the parenthesis of the function DEFINITION.
function addExclamation(message, num) {
    console.log(message, "!!!", 100);

    var results = num * 2;
    console.log(results);
}

//(value); Arguments are written inside the parenthesis of the function CALL.
addExclamation("Hello how are you");
addExclamation("It is raining", 7);
addExclamation("Goodbye", 14);

// console.log(100, 1000, "hello there");



// Returning values from functions.

// The someText variable was created when you call the function, but it also get destoryed when the function call ends.
function getText() {
    var someText = "Nice weather.";
    return someText; 
}

console.log( getText() );

//someText does not exist as it was destoryed when the function call ended.
var userName = "Cat";

//Concatenation; "my name is (_)" so there's a spce.  combining sentences,"strings" using '+' symbols
var completeSentence = "My name is " + userName;
console.log(completeSentence);


//Type Coercion
console.log("Hello" + 100);
console.log("100" + 100);
console.log(100 + "100");
console.log("This is false " + true)

// Trying to multiple a string, we end up with a special Number called NaN.
var longString = "Hello there!" * 10;
console.log(longString);