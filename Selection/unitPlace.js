function checkUnitPlace(number){
    if(number == 1) {
    console.log("Unit");
}else if(number == 10){
    console.log("Ten");
}else if(number == 100){
    console.log("Hundred");
}else if(number == 1000){
    console.log("Thousand");
}else if(number == 10000){
    console.log("Ten Thousand");
}else{
    console.log("Invalid");
    }
}

//take input
const ps = require("prompt-sync")
const prompt = ps();
const number = prompt('Enter the number 1, 10, 100, 1000 or 10000 to display unit place');
checkUnitPlace(number);
