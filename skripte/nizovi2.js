var names = ['John', 'Jane', 'Bob', , 'Mike'];
var x = 1;
var y= 1;

//1. zadatak 
for(var list of names) {
    console.log([x] + '.' + list);
    x++;
}

//2. zadatak
names.push('Martina');

for(var list of names) {
    console.log([y] + '.' + list);
    y++;
}

//3. zadatak
for (var list of names) {
    if (list === 'Jane') {
        break;
    }
}
console.log('3. zadatak: ' + list);

//4. zadatak
var list2 = [];
for (var list of names) {
    if (list === undefined) {
        continue;
    }
    list2.push(list);
}

console.log(list2.join());

//5. zadatak
names.sort();
console.log(names.join());

//6. zadatak
for (var abcNames of names.sort()) {
    if(abcNames === undefined) {
        continue;
    }
    console.log(abcNames);
}
