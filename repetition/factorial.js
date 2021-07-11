  
function factorial(num) {
    
    if (num == 0 || num == 1)
      return 1;
    
    for (var i = num - 1; i >= 1; i--) {
      num = num * i; 
    }
    console.log("factorial", num);
}
//take input
const ps = require("prompt-sync")
const prompt = ps();
const num = prompt('Enter the number');

factorial(num);