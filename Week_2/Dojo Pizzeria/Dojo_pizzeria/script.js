


var pizza = {
    "crust" : ["deep dish", "traditional"],
    "cheeses" : "mozzeralla",
    "topping" : ["pepperoni", "sausage"],
    "pizzaOven" : function(){ 
        console.log("Crust: " + pizza.crust)
        console.log("Toppings: " + pizza.topping)
        console.log("Cheeses: " + pizza.cheeses)
    }
}

pizza.pizzaOven()

var pizza2 = {
    "crust" : "hand tossed",
    "sauce" : "marinara",
    "cheeses" : ["mozzeralla", "feta"],
    "topping" : ["mushrooms", "olives", "onions"],
    "pizzaOven" : function(){ 
        console.log("Crust: " + pizza2.crust)
        console.log("Sauce: " + pizza2.sauce)
        console.log("Toppings: " + pizza2.topping)
        console.log("Cheeses: " + pizza2.cheeses)
    }
}

pizza2.pizzaOven()

var pizza3 = {
    "crust" : ["deep dish", "traditional"],
    "sauce" : "alfredo",
    "cheeses" : "three cheese blend",
    "topping" : ["pepperoni", "chicken", "bacon"],
    "pizzaOven" : function(){ 
        console.log("Crust: " + pizza3.crust)
        console.log("Sauce: " + pizza3.sauce)
        console.log("Toppings: " + pizza3.topping)
        console.log("Cheeses: " +pizza3.cheeses)
    }
}

pizza3.pizzaOven()

var pizza4 = {
    "crust" : ["deep dish", "traditional"],
    "sauce" : "marinara",
    "cheeses" : "provolon",
    "topping" : ["basil", "garlic", "pepper"],
    "pizzaOven" : function(){ 
        console.log("Crust: " + pizza4.crust)
        console.log("Sauce: " + pizza4.sauce)
        console.log("Toppings: " + pizza4.topping)
        console.log("Cheeses: " + pizza4.cheeses)
    }
}

pizza4.pizzaOven()