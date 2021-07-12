/**
 * Program to show Sum of three Integer adds to ZERO
 */

//taking input
const ps = require("prompt-sync")
const prompt = ps();
const number = prompt('Enter 3 numbers (give space after each number): ');
checkSumOfIntegers(number);
  
  function checkSumOfIntegers(number) {

    //Spliting the input by space(" ") to give to an array
    let numArray = number.split(" ");

    let add = 0;

    //Priting an Array
    console.log("Your array is :[" + numArray + "]");
    
    //Loop for adding all elements of array
    for (let i = 0; i < 3; i++) {
        add = (parseInt(numArray[i]) + add);
    }
    
    //Printing addition of array
    console.log("Addition of three numbers: " + add);
    
    if (add == 0) {
        console.log("Sum of your array is 0");
    }else {
        console.log("Sum of your array is not 0");
    }
  }