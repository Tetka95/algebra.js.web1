var x = 'Lorem ipsum',
    y = 2345,
    z = '2345',
    q = false,
    w = true;

var trueFalse = q;

console.log('trueFalse = ' + trueFalse);

if (trueFalse === 'true') {
    console.log('1.q = ' + trueFalse);
}

if (trueFalse !== 'true') {
    console.log('2.q = ' + trueFalse);
}

if (q && w) {
    console.log('q ili w su true');
} else {
    console.log('jedan od q ili w nije true');
}

console.log('ostatak pri cjelobrojnom dijelnjenju od 9/2 =' + (9 % 2)); 
console.log('ostatak pri cjelobrojnom dijelnjenju od 5/2 =' + (5 % 2)); 


///i jedan i drugi
if (9 % 3 === 0 && 5 % 2 === 0) {
    console.log('ostatak pri cjelobrojnom dijelnjenju je 0');
} else {
    console.log('ostatak pri cjelobrojnom dijeljenju NIJE 0');
}

///ili jedan ili drugi
if (9 % 3 === 0 || 5 % 2 === 0) {
    console.log('ostatak pri cjelobrojnom dijelnjenju je 0');
} else {
    console.log('ostatak pri cjelobrojnom dijeljenju NIJE 0');
}