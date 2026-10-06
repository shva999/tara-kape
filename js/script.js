

// SIGNATURE DRINKS PANNING FUNCTIONALITY
const drinks = ["assets/taho-latte.png", "assets/matcha-latte.png", "assets/spanish-latte.png"];
const titleDrinks = [
    "TAHO LATTE TAHO LATTE TAHO LATTE TAHO LATTE&nbsp;",
    "MATCHA LATTE MATCHA LATTE MATCHA LATTE MATCHA LATTE&nbsp;",
    "SPANISH LATTE SPANISH LATTE SPANISH LATTE SPANISH LATTE&nbsp;"
];


const marquees = document.querySelectorAll(".marquee-text");
const drink = document.getElementById("product-image");
const btnLeft = document.getElementById("btn-pan-lt");
const btnRight = document.getElementById("btn-pan-rt");

let currentDrink = 0;
drink.src = drinks[currentDrink];
btnRight.addEventListener("click", ()=> {
    currentDrink++
    if(currentDrink >= drinks.length){
        currentDrink = 0;
    }

    drink.src = drinks[currentDrink];
    
    marquees.forEach(span => {
        span.innerHTML = titleDrinks[currentDrink];
    });
});

btnLeft.addEventListener("click", ()=> {
    currentDrink--;
    if(currentDrink < 0){
        currentDrink = drinks.length - 1;
    }
    drink.src = drinks[currentDrink];

    marquees.forEach(span => {
        span.innerHTML = titleDrinks[currentDrink];
    });
});
// END OF SIGNATURE DRINKS
