//A1

function calcTip(bill) {
    let bill = 100;
    let tip = 0;

    if (bill >= 30 && bill <= 300) {
      tip = bill * .15;
    }
    else {
     tip = bill * .20;
    }

    console.log("Cost with tip : $" tip + bill);
}
// Test Bill function with  100
calcTip(100);

function calcTips() {
    
    //bill array
    var bills = [125,555,44];
    //Tips array
    var tips = [];
    //find tips value
    var i;
    for (i = 0; i < bills.length; i++) {
        if (bills[i] >= 30 && bills[i] <= 300) {
            tips = bills[i] * .15;
        }
        else {
           tips[i] = bill[i] * .20;
        }      
        // Print total values  for array
        var total = [];
        console.log("Cost with tip : $" tips[i] + bills[i]);
    }      

    console.log(tips); // prints tip totals array
}


//A2


const john ={
    firstName:'John',
    lastName:'Willams',
    birthYear:1996,
    job:'student',
    friends:['Mike','Jack','Peter'],
    calAge:function(){
        this.age=2021-this.birthYear;
        return this.age
    },
    getSummary:function(){
        return this.firstName + 'is a ' + this.calAge() + ' year old, and he has a  drivers license'
    }

}

// B

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