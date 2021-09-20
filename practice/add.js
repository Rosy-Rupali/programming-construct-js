let a = 10;
let b = 20;
let c = a + b;
console.log(c);

let s1 = "10";
let s2 = "20";
let s3 = s1 + s2;
console.log("addition" + s3);

let d = new Date();
let today =
  "today is: " +
  (d.getMonth() + 1) +
  " : " +
  d.getDate() +
  " : " +
  d.getFullYear();
let time = "Time is: " + d.getHours() + " : " + d.getMinutes();
console.log("today is: " + today);
