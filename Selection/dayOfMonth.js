let date = new Date().getDate();
let month = new Date().getMonth() + 1;

console.log(date);
console.log(month);

if(month > 3 && month < 6 || month == 3 && date > 20 ||month == 6 && date < 20 ){
    console.log("True");
}else{
    console.log("False");
}