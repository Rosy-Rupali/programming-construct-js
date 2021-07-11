//random number between 1 to 10
var value1 = (Math.floor(Math.random() * 10))
console.log(value1);

// random number between 1 to 6
var value2 = (Math.floor(Math.random() * 6)+1)
console.log(value2);

// adding two dice numbers
var dice1 = (Math.floor(Math.random() * 6)+1);
console.log(dice1);
var dice2 = (Math.floor(Math.random() * 6)+1);
console.log(dice2);
var result = Math.round(dice1+dice2);
console.log(result);

// sum and average of two digit random numbers
var sum = 0;
for(var i=1; i<=5; i++){
    sum += Math.floor(Math.random() * 100)+10;
}
console.log(sum);
console.log("Average of numbers are: ",sum/5);

// conversion of inches to feet
function inchToFeet(inches){
    var feetValue = inches * 0.0833333
    return feetValue;
}

console.log("Value of 42 inches in feet is: ", inchToFeet(42));

// conversion of feet into meters
function feetToMeters(feet){
    var meterValue = feet / 3.281
    return meterValue;

}
console.log("Rectangular plot of 60 feet in:", feetToMeters(60)," in meters");
console.log("Rectangular plot of 40 feet in: ", feetToMeters(40), " in meters");

//conversion of 25 plots in acres
function conversionToAcres(totalPlots){
    var totalArea = 0;
    for(i=1; i<=totalPlots; i++){
        totalArea += (feetToMeters(60) * feetToMeters(40))
    }
    return totalArea /= 0.000247;
}
console.log("Area of rectangular plot in acres is: ",conversionToAcres(25));
