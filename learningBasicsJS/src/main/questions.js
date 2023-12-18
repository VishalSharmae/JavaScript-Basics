//create a string and add a number to it

const { type } = require("os")

let randomString = "Vishal"
let randomNumber = 887
console.log(randomString + randomNumber)


 // use .type operator to know thw datatype of a variable

console.log(typeof randomString)
console.log(typeof randomNumber)
console.log(typeof (randomNumber+randomString))


//create a const in js and try to change it to hold a number

const myself = {
  name: "Vishal",
  age: 20,
  isStudent: true
}

// myself = "Vishal"
// myself = 77

// add values in const

myself["friend"] = "Mayank"
myself["name"] = "Vishal Sharma"
console.log(myself)