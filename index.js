const coffeeMenu = require('./coffeedata');

// orint array of all drinks
const allDrinks = coffeeMenu.map(item => item.name);
console.log(allDrinks);

//print array of drinks $5 or less
const cheapDrinks = coffeeMenu.filter(item => item.price <= 5).map(item => item.name);
console.log(cheapDrinks);

//print array of drinks at an even number
const evenPricedDrinks = coffeeMenu.filter(item => item.price % 2 === 0).map(item => item.name);
console.log(evenPricedDrinks);

//print the total if you order one of each
const total = coffeeMenu.reduce((acc, item) => acc + item.price, 0);
console.log(total);

//print array with seasonal drinks
const seasonalDrinks = coffeeMenu.filter(drink => drink.seasonal);
console.log(seasonalDrinks);


// print array and add "with importated beans"
const seasonalDrinksWithBeans = seasonalDrinks.map(drink => `${drink.name} with imported beans`);
console.log(seasonalDrinksWithBeans);