




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