function numberToWeekDays(number){
    switch(parseInt(number)){
        case 0:
            console.log("Sunday");
            break;
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid"); 
    }
}

//take input
const ps = require("prompt-sync")
const prompt = ps();
const number = prompt('Enter the number to check the week day');

numberToWeekDays(number);