/********************************************************************
 * Purpose - This code is wrriten to get second minimum
 * and second maximum of random numbers array
 *
 * @author Rosy Rupali
 * @since 12-07-2021
 *******************************************************************/

//Declared Array
let randomNumArr = new Array();

//Running through loop to get ten random numbers and stored in an array
for (let c = 1; c <= 10; c++) {
  let number = Math.floor(Math.random() * 899) + 100;
  randomNumArr.push(number);
}

//Printing array
console.log("Array is [" + randomNumArr + "]");

let max = randomNumArr[0];
let secMax = randomNumArr[0];

//Loop for finding second maximum
for (let i = 0; i < 10; i++) {
  if (randomNumArr[i] > max) {
    secMax = max;
    max = randomNumArr[i];
  } else if (randomNumArr[i] > secMax) {
    secMax = randomNumArr[i];
  }
}

let min = randomNumArr[0];
let secMin = randomNumArr[0];
//Loop for finding second minimum
for (let i = 0; i < 10; i++) {
  if (randomNumArr[i] < min) {
    secMin = min;
    min = randomNumArr[i];
  } else if (randomNumArr[i] < secMin) {
    secMin = randomNumArr[i];
  }
}

//Printing all numbers
console.log("Largest Number: " + max);
console.log("Second Largest Number: " + secMax);
console.log("Smallest Number: " + min);
console.log("Second Smallest Number: " + secMin);
