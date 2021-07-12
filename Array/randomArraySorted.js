/********************************************************************
 * Purpose - This code is wrriten to get second minimum
 * and second maximum of random numbers array in sorted way
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

//declaring the variable
let temp = 0;

//Loop for sorting the array
for (let i = 0; i < 10; i++) {
  for (let j = i + 1; j < 10; j++) {
    if (randomNumArr[i] > randomNumArr[j]) {
      temp = randomNumArr[i];
      randomNumArr[i] = randomNumArr[j];
      randomNumArr[j] = temp;
    }
  }
}

//Printing all numbers
console.log("Sorted array: " + randomNumArr);
console.log("second largest number = " + randomNumArr[8]);
console.log("second smallest number = " + randomNumArr[1]);
