var string = "This is a sentence.";

// This converts the string in the string variable into an array with the individual charactes as elements.
var stringArray = string.split("");

console.log(stringArray);


stringArray.pop();

console.log(stringArray);

//Combine all the elements to form a string. The delimiter adds the 

var updatedString = stringArray.join("");

console.log(updatedString);

var firstMatch = -1;

for (var i = 0; i < stringArray.length; i = i + 1) {
    var currentLetter = stringArray[i];

    if (currentLetter === "e") {
        console.log("we found an e!");

        firstMatch = i; //This will save the index numbe of the match, so it can be used later, after the loop is done.

        stringArray[1] = "E";
        //break; This will stop the loop once we find the first match.

        continue; // This will ignore following code and move on with the rest of the loop.
    }

    console.log("No e here!");

}

if (firstMatch === -1) {
    console.log("We did not find any Es!");
} else {

}
console.log(stringArray.join(""));