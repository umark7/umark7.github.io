// Assignment 8

// Question 8 

let breakfast;

switch(meal) {
    case "breakfast" && "lunch":
        console.log("Coffee + Bagel + Sandwhich");

    case "dinner":
        console.log("pasta");

    default:
        console.log("No Food");
}

// B1

function microwave(food, weight, time, mode) {
    let food, weight, time, mode;
    String ready = `${food} that weighs ${weight} will take ${time} to be ready on the ${mode} mode.`;
    return console.log(ready);
}

// 4 people time
function fourPeople(time) {
    return time*4;
}
// B2
let bill = 300;
let tip = 0;

if (bill >= 30 && bill <= 300) {
      tip = bill * .15;
}
else {
     tip = bill * .20;
}

console.log("Cost with tip : $" tip + bill);



// C


let knicks = (50 + 100 + 150) / 3;
let nets = (25 + 50 + 75) / 3;


if(knicks > nets) {
    console.log("Knicks win");
}

if (knicks === nets) {
    console.log("Even Score");
} 

else {
    console.log("Nets win");
}

knicks = (100 + 200 + 300) / 3;
nets = (10 + 20 + 30) / 3;


if(knicks > nets) {
    console.log("Knicks win");
}

if (knicks === nets) {
    console.log("Even Score");
} 

else {
    console.log("Nets win");
}

// D

function cToF(c) {
    var f = (c * 9/5 + 32);
    return c + " celcius in fahrenheit is: " + f + " fahrenheit ";
}

function fToC(f) {
    c = (f - 32) * 5/9;
    return f + " in celcius is " + c + " celcius";
}

 console.log(cToF(50));
 console.log(fToC(100));
