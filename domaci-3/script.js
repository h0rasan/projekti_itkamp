
// ZADATAK BR 12 = *

// n = Number(prompt('Unesite proizvoljan broj'));
// pismo = 0;
// glava = 0;
// for (i=0; i<n; i++) {
//     let num = Math.random();

//     if (num < 0.5) {
//       glava++;
//     } else { 
//       pismo++;
//     }    
// }

// console.log('Vjerovatnoca pisma je:', pismo/n*100, '%');
// console.log('Vjerovatnoca glave je:', glava/n*100, '%');



////////////////////////////////////////////////////////////////////



// ZADATAK BR 12

// a = Number(prompt('Unesite prvu stranicu trougla:'));
// b = Number(prompt('Unesite drugu stranicu trougla:'));
// c = Number(prompt('Unesite trecu stranicu trougla:'));

// console.log('Prva stranica je: ', a);
// console.log('Druga stranica je: ', b);
// console.log('Treca stranica je:', c);

// if (a+b>c && a+c>b && b+c>a) {
//         console.log('Postoji takav trougao');
//         if (a===b && b!==c) {
//             console.log('Ugao je jednakokraki')};
        
//         if (c===b && b!==a) {
//             console.log('Ugao je jednakokraki');}
        
//         if (c===a && a!==b) {
//             console.log('Ugao je jednakokraki');}
        
//         if (a===b && b===c) {
//             console.log('Ugao je jednakostranican');}
        
//         if (a!==b && b!==c && c!==a) {
//             console.log('Ugao je raznostranican');}
        
        
//     } else {console.log('Ne postoji takav trougao!');}


////////////////////////////////////////////////////////////////////

// ZADATAK BR 13 

// ucenik = Number(prompt('Unesite broj ucenika:'));
// n = Number(prompt('Unesite broj za kriterijum:'));

// for (i=1; i<=ucenik; i=i+n) {
//     console.log('Ispitivat ce se ucenik sa rednim brojem: ', i);}


//////////////////////////////////////////////////////////////////////



//ZADATAK BR 14

n = Number(prompt('Unesite broj ucenika!'));
visina = [];
minVisina = 0;
maxVisina = 0;
for (i=0; i<n; i++) {
    visina[i] = Number(prompt('Unesite visinu ucenika u centrimetrima'));   
}
console.log(visina);
minVisina = Math.min(...visina);
maxVisina = Math.max(...visina);
console.log('Najnizi u razredu ima', minVisina,'cm');
console.log('Najvisi u razredu ima', maxVisina,'cm');