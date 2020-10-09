var myVar = 100;

myVar = 200;

myVar = 100;

var weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

var months = [
    "january",
    "february",
    "march"
];

var mixedArray =[100, "hello there", true];

console.log(weekdays[0]);

console.log(mixedArray[4]);

console.log(mixedArray);

mixedArray[1] = "Hello there!";

console.log(mixedArray);

mixedArray[3] = 1005;

console.log(mixedArray);

mixedArray[1] = null;
//null = a place holder, undefined = error
console.log(mixedArray);

var emptyArray = [];

// Array Methods

// Array Push = adds a value to the end
emptyArray.push("this is the first item!");

console.log(emptyArray);

emptyArray.push(10000);

emptyArray.push(false);

console.log(emptyArray);

// Array Pop = removes the value at the end(pop is opposite of push)

emptyArray.pop();

console.log(emptyArray);

emptyArray.pop();
emptyArray.pop();

console.log(emptyArray);

// Array Unshift = inverse of push
// Array Unshift = adds a new value to the beginning of the array
weekdays.unshift("superday");

console.log(weekdays);

// Array Shift, removes the first value of the array.

weekdays.shift();

console.log(weekdays);


// Array forEach

/*

listOfItemsArray.forEach(function eachItem) {
    use eachIteam however you want.
} );

*/



weekdays.forEach( function(weekday) {
    console.log(weekday);
} );

// Loops and Arrays.

var setOfNumbers = [1, 10, 100, 1000, 10000, 400, 399, 119, 39, 20, 300, 1993, 3928, 39];

//console.log(setOfNumbers[0] * 6);
//console.log(setOfNumbers[1] * 6);
//console.log(setOfNumbers[2] * 6);


for (var i = 0; i < setOfNumbers.length; i = i + 1) {
    var product = setOfNumbers[i] * 6;
    console.log(product);
}



// Array within Array AKA multidimensional array.

var masterArray = [
    [10, 29],
    [14, 20],
    [50, 12]
];

masterArray; //the entire array.
masterArray[1].length;
masterArray[2][0]; // This will grab the number 50 from the third array inside of this array.