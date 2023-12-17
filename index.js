console.log("hello mukul")
let man = "this is a string that contains"
.split("")
.reverse()
.map(parseInt)
.filter(a => a)
.reduce((a,b) => a+b)
.toString()
.split("")
.reverse()
.join("")

console.log(man)
