// Assignment 7

//Part A - Lucas and John

var lucasMass = 78;
var johnMass = 92;

var lucasHeight = 1.69;
var johnHeight = 1.95;

function findBMI(mass, height) {
    var BMI = mass / (height * height)
    return BMI;
}

var lucasBMI = findBMI(lucasMass, lucasHeight)
var johnBMI = findBMI(johnMass, johnHeight)

let lucasHigherBMI = false;
if (lucasBMI > johnBMI) {
    lucasHigherBMI = true;
}

console.log("Lucas' BMI is" + lucasBMI + " ,and John's BMI is " + johnBMI);

if (lucasHigherBMI = false) {
    console.log("Lucas has a lower BMI than John");
} else {
    console.log("Lucas has a higher BMI");
}

//Part 2: Temp
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
