//var firstName = "Marko"; (određena vrijednost varijable firstName kao "Marko")
var firstName, lastName, price, discount, fullPrice; //(ovako se uglavnom ne piše nego stavljamo var ispred svakog od tagova npr. var firstName; var lastName...)

firstName = "John";
var lastName = "Doe"

price = 19.9;
discount = 0.1;

var x = 1;
var isSet = false;

if (x == 1) {
    isSet = true;
} else {
    isSet = false;
}

if (isSet) {
    x = 2;
    console.log("x=" + x);
}

var a = 5;
console.log("a=" + a);
if (a) {
    var z = 44
    console.log("z=" + z);
    }

fullPrice = price * 100 / discount;
console.log(fullPrice);