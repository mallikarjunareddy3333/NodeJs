// function printStuff(stuff) {
//     console.log(stuff);
// }

//printStuff("Hello");

// let printStuff = function(stuff) { // anonymous function
//     console.log(stuff);
// }

// function mainFunction(anotherFuntion, value) {
//     anotherFuntion(value);
// }

// mainFunction(function(stuff){console.log(stuff);}, "World");

console.log(__filename);
console.log(__dirname);

function printStuff() {
    console.log("This is from setInterval");
}

//setTimeout(printStuff, 5000);
//setInterval(printStuff, 2000);


var athletics = require("./athletics");
athletics.relay();
athletics.longjump();
