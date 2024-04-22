var text1 = 'moje ime';
var text_2 = 'moje_ime';

var x = text1 === text_2;

if (x === true) {
    console.log('varijable su identične');
} else {
    console.log('varijable NISU identične');
}


if (x) {
    console.log('varijable su identične');
} else if('moje ime' !== 'moje_ime') {
    console.log('varijable NISU identične')
} else {
    console.log('niti jedan uvijet nije ispunjen')
}