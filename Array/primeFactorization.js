/**
 *Prime Factorization Program to store all the Prime Factors of a
 * number into an array and finally display the output.
 */

//taking input
const ps = require("prompt-sync")
const prompt = ps();
const number = prompt('Enter the number to get prime factors: ');

checkPrimeFactorization(number);

function checkPrimeFactorization(number){
    //declaring an array
    let arr = [];
    let isPrime = 0;
    for(let i = 2; i <= number; i++){
        for(let j = 2; j< i; j++){
            if(i % j == 0){
                isPrime = 1;
                break;
            }else{
                isPrime = 0;
            }
        }
        if(isPrime == 0){
            if(number % i == 0){
                arr.push(i);
            }
        }
    }

    //displaying the array
    console.log(arr);
}