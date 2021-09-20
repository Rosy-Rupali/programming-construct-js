let originalDogs = ["bulldog", "beagle", "labrador"];
let cats = new Array("americal curl", "bengal");
let birds = new Array("falcons", "ducks", "flamingoes" );

//array copy elements
let slicedDogs = originalDogs.slice(1, 2);
let copyDogs = [...originalDogs];
let dogs = originalDogs.slice(0);

//stack function push and pop
let pushDog = dogs.push("golden retriever");
let popDog = dogs.pop();
dogs[dogs.length] = "poodle";

//add and remove from first
let addFirst = dogs.unshift("golden retriever");
let shiftDog = dogs.shift();


//atomic add and remove elements(where, how many to remove, element list)
dogs.splice(2, 1, "pug", "boxer");

//array function - concat, slice and sort
let animals = dogs.concat(cats, birds);
let newAnimal = [...dogs, ...cats, ...birds].toString();
let sortDog = dogs.slice(0).sort();
function scanArray([first, second]){
    console.log("scan: "+first+" : "+second);

}
scanArray(animals);
let joinAnimals = animals.join(" ");
let allAnimals = "";
for(let animal of animals) allAnimals += animal+" ";

console.log("Animals: "+allAnimals);