/*

*
**
***
****
*****
****
***
**
*

*/

/*
//console.log("*");
//console.log("**");
//console.log("***");

// "Remembers" what we previously had, starts with no asterisks.
var column = "";
var pyramidHeight = 7;
var pyramidCharacter = ")"





for (var i = 0; i < 10; i = i + 1) {
    
    // We add one asterisk.
    column = column + pyramidCharacter;

    // We console.log what the column is currently holding.
    console.log(column);
}

//console.log("final column state:", column);
//var columnArray = column.split("");
//console.log(columnArray);
//columnArray.pop();
//console.log(columnArray);
//var updatedColumn = columnArray.join("");
// console.log(updatedColumn);

for (var i = 0; i < 10; i = i + 1) {
    var columnArray = column.split("");
    columnArray.pop();
    column = columnArray.join("");
    console.log(column);
}

*/

// "Remembers" what we previously had, starts with no asterisks.
var column = "";

for (var i = 0; i < 10; i = i + 1) {

    // We add one asterisk.
    column = column + "*";

    // We console.log what the column is currently holding.
    console.log(column);
}

