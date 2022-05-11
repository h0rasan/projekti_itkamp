// n = Number(prompt('Koliko brojeva unosite?'));
// zbir = 0;
// for (var i = 0; i < n; i++) {
//     unos = Number(prompt('Unesite broj!'));
//     zbir += unos;
    
// }
// console.log('Zbir brojeva je:', zbir);
//     console.log('Aritmeticka sredina je:', zbir/n);

//=========================================================


// n= Number(prompt('Unesite neki broj!'));

// for (i=0; i<n; i++) {
//     if (i%2===1){
//         console.log(i);
//     }
// }


//=========================================================

n = Number(prompt('Unesite koliko redova zelite'));
znak = prompt('Unesite zvzdicu');
s = '';
for (i=0; i<n; i++) {
    s = s+znak
    console.log(s);
}