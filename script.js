// Dojo Pizza Assignment


function pizzaOven (crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizzaOrder1 = pizzaOven ("deep dish", "traditional", ["mozzarella"], ["pepperoni", 'sausage']);
console.log(pizzaOrder1);


var pizzaOrder2 = pizzaOven ("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", 'olives', "onions"]);
console.log(pizzaOrder2);


var pizzaOrder3 = pizzaOven ("deep dish", "marinara", ["mozzarella"], ["mushrooms", 'jalapenos', "pepperoni"]);
console.log(pizzaOrder3);


var pizzaOrder4 = pizzaOven ("hand tossed", "barbeque", ["mozzarella"], ["chicken", 'onions', "green peppers"]);
console.log(pizzaOrder4);


// Dojo Pizzeria Chef's Choice

var crustTypes = [
    "thin",
    "thick",
    "hand tossed",
    "deep dish",
    "vegetable",
]

var sauceTypes = [
    "traditional",
    "marinara",
    "ranch",
    "siracha",
    "barbeque",
    "buffalo"
]

var cheeses = [
    "mozzarella",
    "feta",
    "blue cheese",
    "vegan",
    "white cheddar"
]

var toppings = [
    "sausage",
    "pepperoni",
    "ham",
    "olives",
    "onions",
    "mushrooms",
    "jalapenos",
    "bacon",
    "chicken",
    "spinach",
    "anchovies",
    "peppers"
]

function ingredientPicker (arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i]
}


function randomPizza () {
    var chefChoice = {};
    chefChoice.crustType = ingredientPicker(crustTypes);
    chefChoice.sauceType = ingredientPicker(sauceTypes);
    chefChoice.cheeses = ingredientPicker(cheeses);
    chefChoice.toppings = ingredientPicker(toppings);
    return chefChoice;
}

var chefChoiceOrder = randomPizza()
console.log (chefChoiceOrder)