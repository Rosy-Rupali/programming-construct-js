//take input
const ps = require("prompt-sync")
const prompt = ps();
const num = prompt('Enter the number');

prime_factors(num);

function prime_factors(num) {
    function is_prime(num) {
      for (var i = 2; i <= Math.sqrt(num); i++)
      {
        if (num % i == 0) 
        return false;
      }
      return true;
    }
    var result = [];
    for (var i = 2; i <= num; i++)
    {
      while (is_prime(i) && num % i == 0) 
      {
        if (result.indexOf(i) == -1) result.push(i);
        num /= i;
      }
    }
    console.log(result);
  }
  