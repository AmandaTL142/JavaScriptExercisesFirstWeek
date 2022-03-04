//Færdig


//1) Create an object with four different properties, with values of your own choice (ex: name, birthday, hobby, email).
//Use a for-in loop (as sketched below) to demonstrate that we can iterate over the properties in an object.

//Object:
const myCat = {
    breed: "British Shorthair",
    color: "Grey",
    owner: "Karen",
    birthyear: 2020
}

console.log("Properties:")

let count = 0;

//for-in loop
for(prop in myCat){
    console.log(prop,myCat[prop])
    count = count+1;
}

console.log("Number of properties: " + count)

//Use the delete keyword to demonstrate we can delete existing properties from an object
//(delete a property, and iterate over the properties again)

delete myCat.owner

count = 0;

console.log("\nProperties:")

//for-in loop
for(prop in myCat){
    console.log(prop,myCat[prop])
    count = count+1;
}

console.log("Number of properties: " + count)


//Add a new property to your object to demonstrate that we can add new properties to existing objects
myCat.eyeColor = "Blue"
myCat["hobby"] = "Catching mice";

console.log("\nProperties:")

count = 0;

//for-in loop
for(prop in myCat){
    console.log(prop,myCat[prop])
    count = count+1;
}

console.log("Number of properties: " + count)