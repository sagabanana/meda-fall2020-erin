var timer = setInterval(function() {
    console.log("1 second has passed");
}, 1000);


// Synchronous 
console.log(1);
console.log(2);
console.log(3);


// Asynchronous

setTimeout(function () {
    console.log(5);

    clearInterval(timer);
}, 5500);

//var runsForever = setInterval(funcation () {
//      console.log("3 seconds have passed.");
// }, 3000);

//clearInterval(runsForever); this will stop the interval.

console.log(6);

// Closures

var myGlobalVariable = 100;

function someFunction() {
    var myLocalVariable = 10;

    console.log(myLocalVariable);

    console.log(myGlobalVariable);
}

someFunction();

console.log(myGlobalVariable);

// console.log(myLocalVariable); Cannot access myLorcalVariable because it is in a child scope.

//If statements do not have scopes.
if(true) {
    //Code to run
}

if (false) {
    //Code to run
}




//Example
if (true) {
    var createdVariable = 300;
}

console.log(createdVariable);