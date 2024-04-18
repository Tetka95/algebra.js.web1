var myString = '   Lorem ipsum dolor sit amet ipsum  ';
console.log(myString);
var duljina = myString.length;
console.log('Duljina teksta je: ' + myString.length + ' znakova');
console.log(typeof duljina);
console.log('Znak na mjestu 12 je: ' + myString.charAt(12));
console.log(myString.trim());
console.log(myString.trimStart());
console.log(myString.trimEnd());
console.log(myString.indexOf('ipsum'));
console.log(myString.replace('ipsum', 'novi string'));
console.log(myString.replaceAll('ipsum', 'novi string'));
console.log(myString.toUpperCase());
console.log(myString.substring(12, duljina));

var myNiz = myString.split(' ');

console.log('kraj');