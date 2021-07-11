//take input
var ps = require("prompt-sync")
var prompt = ps();
var a = prompt('Enter the first number: ');
var b = prompt('Enter the second number: ');
var c = prompt('Enter the third number: ');

let result1 = eval(a + b * c)
let result2 = eval(a % b + c)
let result3 = eval(c + a / b)
let result4 = eval(a * b + c)
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
let minimum;
let maximum;
//compare results to find max
if (result1 > result2 && result1 > result3 && result1 > result4) {
    maximum = result1;
} else if (result2 > result1 && result2 > result3 && result2 > result4) {
    maximum = result2;
} else if (result3 > result1 && result3 > result2 && result3 > result4) {
    maximum = result3;
} else if (result4 > result1 && result4 > result2 && result4 > result3) {
    maximum = result4;
}
console.log("Maximum value is : ", maximum);
//compare results to find min
if (result1 < result2 && result1 < result3 && result1 < result4) {
    minimum = result1;
} else if (result2 < result1 && result2 < result3 && result2 < result4) {
    minimum = result2;
} else if (result3 < result1 && result3 < result2 && result3 < result4) {
    minimum = result3;
} else if (result4 < result1 && result4 < result2 && result4 < result3) {
    minimum = result4;
}
console.log("Minimum value is:", minimum);
