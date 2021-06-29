




var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];


for(var i = 0; i < 7; i++){
    if(numbers[i] >= 0){
        countPositives += 1;
    }


}

console.log("there are " + countPositives + " positive values");



// REVERSE AN ARRAY
// CREATE A FUNCTION WHERE GIVEN AN ARRAY YOU REVERSE THE ARRAY AND RETURN THE ARRAY
// ["a", "b", "c", "d", "e"] => ["e", "d", "c", "b", "a"]

// CREATE A FUNCTION WRAPPER (1 param / array type)
// ITERATE THROUGHT ARRAY (FOR LOOP)
// NEED A TEMP VARIABLE TO STORE A VALUE
// SWAP THE VALUES WITHIN THE ARRAY
// RETURN THE ARRAY

var array = ["a", "b", "c", "d", "e"];


function ReversePro(array){
        var temp;
    var last = array.length - 1;
    for(var i = 0; i < array.length/2; i++){
        temp = array[i];
        array[i] = array[last];
        array[last] = temp;
        --last;
    }
    return array;
}



// var floor = Math.floor(1.9) Will round down so this will equal 1
// var ceil = Math.ceil(3.2) Will always round up so this will equal 4
// var random = Math.random() Without a value the default wiill print between 0 - 1 Example 0.84569 

// console.log(floor)
// console.log(ceil)
// console.log(random)

// function d6() {
//     var max = 6
//     var min = 1
//     var roll = Math.floor(Math.random() * (max - min + 1) + min);
//     return roll
// }

// var playerRoll = d6();
// console.log(playerRoll)


// Magic Eight-Ball:
// Using the following array, write a function that will answer all of our questions by randomly choosing a response.
// Our terminal should print out one of these answer upon calling on your function!


// Algo Week 2 Day 1
var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function magic8(lifesAnswers){
    var max = lifesAnswers.length
    var min = 0
    var predict = Math.floor(Math.random() * (max - min) + min);
    return lifesAnswers[predict]
}

var prediction = magic8(lifesAnswers)
console.log(prediction) 





// OBJECTS Lecture 06/28/2021

var pizza = {
    "crust" :  "thin crust",
    "sauce" :  "alfredo",
    "topping" : ["chicken", "basil", "bacon"],
    "slices" : 8,
    "vegetarian" : false,
    "pizzaInfo" : function(){ //This function within an object doesn't need a name for the function
        console.log("Crust: " + pizza.crust)
        console.log("Sauce: " + pizza.sauce)
        console.log("Toppings: " + pizza.topping)
        console.log("Slices: " + pizza.slices)
        console.log("Vegetarian: " + pizza.vegetarian)
    }
}

console.log("Crust: " + pizza.crust); //This is how you select a specific part of an object

pizza.sauce = "Marinara"; //This is how you can change a specific value within an object and then log it
console.log("Sauce: " + pizza.sauce); 

pizza.pizzaInfo(); //This is how you would print out the function and all the values within it. You don't need a console.log because it
// already has it within the function. 



var pizza2 = {
    "crust" :  "thin crust",
    "sauce" :  "alfredo",
    "topping" : ["chicken", "basil", "bacon"],
    "slices" : 8,
    "vegetarian" : false,
    "pizzaInfo" : function() { //This function within an object doesn't need a name for the function
        console.log(this)
        console.log("Crust: " + this.crust)
        console.log("Sauce: " + this.sauce)  //the "this" syntax will pull values from the entire object, without needing to console.log
        console.log("Toppings: " + this.topping) //each individual value
        console.log("Slices: " + this.slices)
        console.log("Vegetarian: " + this.vegetarian)
    }
}

pizza2.pizzaInfo();



// Algos Array of Objects 06/29/2021


var monster = {
    "id": 1,
    "name" : "Bulbasaur",
    "types": ["poisen", "grass"]    
}

console.log(monster.name) //Both of these will print the monster name
monster.name

monster.types[1] //Will print grass

// Object set as an Array with Objects in that Array

var pokémon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] }, //Index of 0
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] }, //Index of 1
    { "id": 9,   "name": "Blastoise",  "types": ["water"] }, //Index of 2
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] }, //Index of 3
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] }, //Index of 4
    { "id": 23,  "name": "Ekans",      "types": ["poison"] }, //Index of 5
    { "id": 24,  "name": "Arbok",      "types": ["poison"] }, //Index of 6
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] }, //Index of 7
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] }, //Index of 8
    { "id": 52,  "name": "Meowth",     "types": ["normal"] }, //Index of 9
    { "id": 63,  "name": "Abra",       "types": ["psychic"] }, //Index of 10
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] }, //Index of 11
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] }, //Index of 12
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] }, //Index of 13
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] }, //Index of 14
    { "id": 98,  "name": "Krabby",     "types": ["water"] }, //Index of 15
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] }, //Index of 16
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] }, //Index of 17
    { "id": 133, "name": "Eevee",      "types": ["normal"] }, //Index of 18
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] }, //Index of 19
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] }, //Index of 20
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] }, //Index of 21
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] } //Index of 22
];

//Iterate through the pokemon Array and prining the pokemon with an id greater than 99

for(var i=0; i<pokémon.length; i++) { //This checks every index in the Array 
    if(pokémon[i].id > 99) { //This is the same as when we were looking for monster.type[1] 
        console.log(pokémon[i].name); //This will print any id greater than 99 
    }
}

//Console.log the pokémon objects whose id is evenly divisible by 3


for(var i=0; i<pokémon.length; i++) { 
    if(pokémon[i].id % 3 == 0) {  
        console.log(pokémon[i]); //This prints out the entire Object 
    }
}

//Console.log the pokémon objects that have more than one type

for(var i=0; i<pokémon.length; i++) { 
    if(pokémon[i].types.length > 1) {  
        console.log(pokémon[i]); //This prints out the entire Object
    }
}

//Console.log the names of the pokémon whose only type is "poison"

for(var i=0; i<pokémon.length; i++) { 
    if(pokémon[i].types.length == 1 && pokémon[i].types[0] == "poison") {  //This checks if the types is only equal to one value "poison"
        console.log(pokémon[i].name); 
    }
}

//Console.log the first type of all the pokémon whose second type is "flying"

for(var i=0; i<pokémon.length; i++) { 
    if( pokémon[i].types.length > 1) { 
        if(pokémon[i].types[1] == "flying"){  //This checks if the index of 1 in the Array is == to "flying" 
            console.log(pokémon[i].types[0]);
        } 
    }
}
