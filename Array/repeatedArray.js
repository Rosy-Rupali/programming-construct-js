/**
 * Program to take a range from 0 – 100, 
 * find the digits that are repeated twice like 33, 77,
 * etc and store them in an array
 */
const min = 1;
const max = 100;

//declaring an array
let arr = [];
//find the repeating the number and storin in an array
for (let count = min; count <= max; count++) {
  if (count % 11 == 0) {
    arr.push(count);
  }
}

//displaying the array
console.log(arr);
