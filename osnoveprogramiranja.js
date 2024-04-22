//1. zadatak
var firstName = "Ivan";
var lastName = "Horvat";
var fullName = firstName + " " + lastName;

console.log(fullName);

//2. zadatak
var z= 6;
var y = 0;

var x = z === 2 ? y : 5;

if (z === 2) {
    x = y;
} else {
    x = 5;
}
console.log('x = ' + x);