function checkUnitPlace(number){
    switch(parseInt(number)) {
        case 1:
            console.log("Unit");
            break;
        case 10:
            console.log("Ten");
            break;
        case 100:
            console.log("Hundred");
            break;
        case 1000:
            console.log("Thousand");
            break;
        case 10000:
            console.log("Ten Thousand");
            break;
        default:
            console.log("Invalid");
            break;
    }
}

//take input
const ps = require("prompt-sync")
const prompt = ps();
const number = prompt('Enter the number 1, 10, 100, 1000 or 10000 to display unit place');
checkUnitPlace(number);