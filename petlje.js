//1. zadatak
var x = 0
while (x < 20) {
    x++;

    if (x <= 3) {
        continue;
    }
    
   /* if (x == 9 || x == 18) {
        continue;
    }
    može ovako, ali je bolje rješenje ispod
    */ 

    if (x % 9 === 0) {
        continue;
    }
    console.log('x=' + x); 
}

//2. zadatak
var varOne = 0;
for (i = 0; i < 4; i++) {
    for  (j = 0; j < 4; j++) {
        varOne++;
    }
}
console.log(varOne);