// while loop
//('condition') {'code block'}
// 'control' 'c' to stop the while loop in terminal
if (true) {
// This will only run once if its true.
}

var counter = 0;

while(counter < 10) {
    console.log("Running");
    //run code WHILE the condition is true.
    //'control' 'c' to stop the while loop in terminal
    counter = counter + 1;
}

// do while loop

while (false) {

}

do {
    //This line will ALWAYS run at least one time because we excute the code first AND THEN we check the condition.
} while (false);

// for loop i++ = i = i + 1

for (var i = 0; i < 10; i = i + 1) {
    console.log("Running");
    console.log(i);
}

// shorthands
var someNumber = 10;

someNumber++; //someNumber = someNumber + 1;
someNumber--; //someNumber = someNumber - 1;
someNumber += 2; //someNumber = someNumber +2;
someNumber -= 2; //someNumber = someNumber -2;
someNumber /= 3;
someNumber *= 3;



//function sayRunning() {
//   console.log("Running");
//}

// sayRunning();

// BREAK and CONTINUE;

// Break is for stopping the loop immediately. Generally used with if statements to test whether we want to continue with the loop or not.
for (var i = 0; i < 10; i = i + 1) {
    console.log("running with break keyboard.");
    
    if (i == 6) {
        break;
    }

}


// Continue, once the continue keyword is executed.  The rest of the code in the CURRENT loop will not run and will move on to the next iteration of the loop.
for (var i = 0; i < 10; i = i + 1) {

    continue;

    console.log("running with continue keyboard.");
}