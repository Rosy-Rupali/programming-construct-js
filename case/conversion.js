var ps = require("prompt-sync")
var prompt = ps();
var number = prompt('Enter a value for conversion: ');
var choice = prompt('Enter a choice 1.feet to inches 2.feet to meters 3.inches to feet 4:meters to feet');

function conversion(choice) {

    switch (choice) {
        case 1:
            console.log(number + " foot = " + number * 12 + " inches");
            break;
        case 2:
            console.log(number + " foot = " + number * 0.3048 + " meters");
            break;
        case 3:
            console.log(number + " inches = " + number * 0.0833333 + " foot");
            break;
        case 4:
            console.log(number + " meters = " + number * 3.28084 + " feets");
            break;
        default :
            console.log("wrong choice");    
            break;
    }
}
conversion(parseInt(choice));

