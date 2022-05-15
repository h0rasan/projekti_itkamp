// kolicina = parseInt(prompt('Koliko brojeva zelite'));
// brojac = 0;
// broj = 0;

// while (brojac != kolicina) {
//     if (broj % 2 === 1) {
//         console.log(broj);
//         brojac++;
//     } broj++;
// }


//////////////////////////////////////////

// kolicina = parseInt(prompt('unesite neki broj'))
// brojac = 0;
// sum = 0;
// while (brojac <= kolicina) {
//     brojac++;
//     sum += brojac;
// }
// console.log(sum);


//////////////////////////////////////////


// brojac = 0;

// while (brojac < 100) {
//     brojac++;
//     if (brojac % 3 === 0 && brojac % 5 === 0) {
//         console.log('FizzBuzz');
//     }else if (brojac % 3 === 0){
//         console.log('fizz');
//     } else if (brojac % 5 === 0) {
//         console.log('Buzz')
//     } else console.log(brojac);
//     } 


///////////////////////////////////////////////////

brRed = parseInt(prompt('Unesi broj redova'));
n = 0;
cont = "";

while (n < brRed) {
    console.log(cont+="*");
    n++;

}