//1.
function ispisi(unos) {
    console.log('DEBUG: ---> ' + unos);
    var x = 2;
    x++;
    return x;
}

ispisi('nešto ispiši na konzolu'); //samo ispis, bez vrijednosti

var nekaVarijabla = ispisi(); //kako bi pokazali da funkcija nema vrijednost

console.log('>>>' + nekaVarijabla); //vratit će vrijednost zbog returna


//2.
var nekiNiz = ['ime', 'prezime', 'godine', 'broj cipela'];

function pronadjiNajduzuRijec(niz) {
    var najduzaRijec = '';
    var duljina = 0;
    for(var element of nekiNiz) {
        if (element.length > duljina) {
            duljina = element.length;
            najduzaRijec = element;
        }
    }
    return najduzaRijec;
}

var najduzaRijec = pronadjiNajduzuRijec(nekiNiz);
console.log(najduzaRijec);

//3. BIT ĆE U ISPITU
function getMax(a, b) {
    let retVal = 0;
    if(a > b) {
        retVal = a
    } else if (b > a) {
        retVal = b
    } else if (a === b) {
        retVal = a;
    } else {
        retVal = 'error'
    }
    return retVal;
}

console.log('veći broj je: ' + getMax('string', 2));
console.log('veći broj je: ' + getMax(5, 2));