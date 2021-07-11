let value1 = Math.floor(Math.random() * 899) + 100;
let value2 = Math.floor(Math.random() * 899) + 100;
let value3 = Math.floor(Math.random() * 899) + 100;
let value4 = Math.floor(Math.random() * 899) + 100;
let value5 = Math.floor(Math.random() * 899) + 100;

let minimum = 100;
let maximum = 1000;
if(value1 > value2 && value1 > value3 && value1 > value4 && value1 > value5){
    maximum = value1;
}else if(value2 > value1 && value2 > value3 && value2 > value4 && value2 > value5){
    maximum = value2;
}else if(value3 > value1 && value3 > value2 && value3 > value4 && value3 > value5){
    maximum = value3;
}else if(value4 > value1 && value4 > value2 && value4 > value3 && value4 > value5){
    maximum = value4;
}else if(value5 > value1 && value5 > value2 && value5 > value3 && value5 > value4){
    maximum = value5;
}

if(value1 < value2 && value1 < value3 && value1 < value4 && value1 < value5){
    minimum = value1;
}else if(value2 < value1 && value2 < value3 && value2 < value4 && value2 < value5){
    minimum = value2;
}else if(value3 < value1 && value3 < value2 && value3 < value4 && value3 < value5){
    minimum = value3;
}else if(value4 < value1 && value4 < value2 && value4 < value3 && value4 < value5){
    minimum = value4;
}else if(value5 < value1 && value5 < value2 && value5 < value3 && value5 < value4){
    minimum = value5;
}

console.log(value1, value2, value3, value4, value5);
console.log("Minimum value is : ", minimum);
console.log("Maximum value is : ", maximum);