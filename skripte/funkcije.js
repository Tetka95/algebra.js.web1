function ispisi(unos) {
    console.log('DEBUG: ---> ' + unos);
    var x = 2;
    x++;
    return x;
}

ispisi('nešto ispiši na konzolu'); //samo ispis, bez vrijednosti

var nekaVarijabla = ispisi(); //kako bi pokazali da funkcija nema vrijednost

console.log('>>>' + nekaVarijabla); //vratit će vrijednost zbog returna