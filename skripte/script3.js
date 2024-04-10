var x, y;
var zbroj;

x = 1;
y = 2;

/*if (x > 0 && y > 0) {
    zbroj = x + y;
    console.log("Zbroj=" + zbroj);
} else {
    alert("Unio si negativne vrijednosti!")
}*/

if (x > 0) {
    if (y > 0) {
        zbroj = x + y;
        console.log("Zbroj=" + zbroj);
    } else {
        alert("Unio si negativan y");
    }
} else {
    alert("Unio si negativan x");
} else {
    alert("Oba su negativna");
}

//očekujemo zbroj
//zbroj=