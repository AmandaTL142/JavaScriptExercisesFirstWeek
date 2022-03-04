//Færdig + ekstra ikke lavet

//1) Declare a JavaScript array and initialize it with some names (Lars, Jan, Peter, Bo, Frederik etc.).
//Use the filter method to create a new array with only names of length <=3.
//Use the forEach method to iterate and print (console.log) both the original and the new array.

const names = ["Amanda","Oda","Alberte","Lis"];

var shortNames = names.filter(function(name){
    return name.length <= 3;
})

console.log("All names:")
names.forEach(function(name){
    console.log(name);
})

console.log("\nShort names:")
shortNames.forEach(function(name){
    console.log(name);
})

//2) Use the names-array created above, and, using its map method, create a new array with all names uppercased.
var upperCaseNames = shortNames.map(function(name){
    return name.toUpperCase();
});


//3) Use map, join + just a little bit more to create a function, which given the array of names, for example:
//["Lars", "Peter", "Jan", "Ian"] returns a string with the HTML for the names in an <ul> as sketched below:

//<ul>
//<li>Lars</li>
//<li>Peter</li>
//<li>Jan</li>
//<li>Ian</li>
//<ul>
//The output above was shown with newlines for readability, but this is actually what we want (why):

//<ul><li>Lars</li><li>Peter</li><li>Jan</li><li>Ian</li><ul>
//Eventually we will use DOM manipulation and place this into a “running” web-page.


//Løsning uden map
const func = function(array){
    let temp = array.join("</li><li>")
    let result = "<ul><li>" + temp + "</li><ul>"
    return result
}

console.log("\nEksempel på HTML-string fra array:")
console.log(func(["a","b","c"]))

//4)  Given this JavaScript array
const cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];


//a) Use the filter filter function to get arrays with only:


//Cars newer than 1999
var newCars = cars.filter(function(car){
    return car.year > 1999;
})

console.log("\nNew cars:")
console.log(newCars)

//All  Volvos
var volvos = cars.filter(function(car){
    return car.make === 'Volvo';
})

console.log("\nVolvos:")
console.log(volvos)

//All cars with a price below 5000
var cheapCars = cars.filter(function(car){
    return car.price < 5000;
})

console.log("\nCheap cars:")
console.log(cheapCars)

/*4a) (Extra, ONLY if you have time) Use map, join + just a little bit more to implement a function,
that , given the cars array used above, will create, and return a string with valid SQL statements to insert
the data into a table with matching column names (id, year, make, model, price) as sketched below:

    INSERT INTO cars (id,year,make,model,price) VALUES ( 1, 1997 'Ford','E350', 3000 );
...*/


