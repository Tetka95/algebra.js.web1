var arr = [
    'Ivana', 
    'Martina', 
    'Domagoj', 
    'Luka', 
    'Mihovil', 
    'Iva', 
    'Ivan', 
    'Martina',
];

var arrNum = [1, 2, 3, 4, 5, 6];

var arrCombo = [1, 'Ime', 2, 'Prezime'];

console.log('Niz ima ' + arr.length + ' elemenata');

var duljina = 0;
var minDuljina = 0;
var kratkoIme = '';

for (i = 0; i<arr.length; i++) {
    console.log('Item ' + i + ' = ' + arr[i]);
    duljina = arr[i].length;
    console.log('Ime ' + arr[i] + ' sadrži ' + duljina + ' znakova');
    
    if(minDuljina == 0) {
        minDuljina = duljina;
        kratkoIme = arr[i];
    }

    if(duljina < minDuljina) {
        minDuljina = duljina;
        kratkoIme = arr[i];
    }
}

console.log('Ime sa najmanje znakova sadrži ' + minDuljina + ' znaka.');
console.log(kratkoIme);

for(x = 0; x < arr.length; x++) {
    if (arr[x].length === minDuljina) {
        console.log(arr[x]);
        break;
    }
}
//nije efikasno

var name1 = 'John',
    name2 = 'Jane',
    name3 = 'Mike';

var prazanNiz = [];
var niz = ['John', 'Jane', 'Mike'];

console.log(niz);
console.log(typeof(niz));

for (i = 0; i<prazanNiz.length; i++) {
    console.log('1. element na poziciji ['+ i + '] = ' + prazanNiz[i]);
}
console.log('1.1. element na poziciji [5] = ' + prazanNiz[5]);

var i = 0;
do {
    console.log('2. element na poziciji ['+ i + '] = ' + prazanNiz[i]);
    i++;
} while (i<prazanNiz.length);

while (i < prazanNiz.length) {
    console.log('3. element na poziciji ['+ i + '] = ' + prazanNiz[i]);
}

var brojcaniNiz = [1, 2, 3, 4, 5, 6, 7];
//zbroji sve članove niza

//var suma = brojcaniNiz [0] + brojcaniNiz [1] + brojcaniNiz [2] + brojcaniNiz [3]; // ...

var suma = 0;
for(var x = 0; x < brojcaniNiz.length; x++) {
    suma = suma += brojcaniNiz[x];
}

console.log('suma = ' + suma);

var weirdBrojčaniNiz = [1, 2, , 3, 4, 5, 6, 7];
var sumaW = 0;

for(var x = 0; x < weirdBrojčaniNiz.length; x++) {
    /*if(typeof weirdBrojčaniNiz[x] !== typeof number) {
        continue;
    } --> nije radilo*/

    if(weirdBrojčaniNiz[x] === undefined) {
        continue;
    }
    sumaW += weirdBrojčaniNiz[x];
}

console.log('sumaW = ' + sumaW);

var matrix = [
    [1, 2, 3], 
    ['John', 'Jane', 'Mike'],
];

for (var i = 0; i < matrix.length; i++) {
    //console.log(matrix[i].join());
    for (var j = 0; j < matrix[i].length; j++) {
        console.log('matrix[' + i + '][' + j + '] = ' + matrix[i][j]);
    }
}