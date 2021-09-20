var val;
var datatype = typeof val;

var val = 0;
var datatype = typeof val;

var val = 10n;
var datatype = typeof val;

var val = "foo";
var datatype = typeof val;

var val = true;
var datatype = typeof val;

var datatype = typeof Symbol("id");

var datatype = typeof Math;

var datatype = typeof null;

let sayHi = function(){
    console.log.apply("say hi");
};

var datatype = typeof sayHi;
console.log(datatype);