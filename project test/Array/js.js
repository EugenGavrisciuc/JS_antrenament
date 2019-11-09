let array = [1, 2, 3, 4, 5];

array.pop();
array.push("6");
array.shift();
array.unshift("0");

for( let i = 0; i < array.length; i++){
    console.log(array[i]);
}

array[99]="sass";

console.log(array);
console.log(array.length); // nu avem 100 de elemente, dar se adauga +1 (deoarece 0 este la inceput) la ultimul element din vector (elementul 99)

array.forEach(function(item, i, mass){
    console.log(i + ":" + item + " ( massiv :  " + mass + ")");
});

let newmass = [1, 3, 4, 6, 7];
for (let key in newmass) {
    console.log(key);
}

let ans = prompt ("", "");
    arx = [];
arx = ans.split(',');
console.log(arx);   

let arrax = ["first", "arrxx", "newarr", "newword", 2, 5];
    kk = arrax.join(", ");
    jj = arrax.join("");
    console.log(arrax);
    console.log(kk);
    console.log(jj);


let earr = ["first", "arrxx", "newarr", "newword", 2, 99, 3, 11, 98, "Alabala", "ABcedar", "aBecedar", "abecedar"];
    console.log(earr);
    nn = earr.sort(compareNum);
    console.log(nn);

    // function compareNum(a,b){
    //     return a-b;
    // }
