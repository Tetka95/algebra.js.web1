var x = 'Lorem ipsum',
    y = 2345,
    z = '2345',
    q = false;

var trueFalse = !!false;
console.log('1. ' + trueFalse);

console.log(q || x || y || z);

var num = 6;
num--;
console.log(num);

const price = 26.5;
const taxRate = 0.082;

let totalPrice = price + price * taxRate;
totalPrice = totalPrice.toFixed(2);

console.log('Total:', totalPrice);
