// broj = 8;

// for (i=0; i<= broj; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// unos= Number(prompt('Koliko brojeva unosite?'));
// brojParnih=0;
// brojNeparnih=0;
// sumaParnih=0;
// sumaNeparnih=0;
// for(i=1; i<=unos; i++) {
//     broj=Number(prompt('Unesite neki broj!'));
//     if ((broj % 2)==0)
//      {console.log('Broj', broj, 'je paran!');
//      brojParnih++
//      sumaParnih+=broj
//     }     
//      else {console.log('Broj', broj, 'je neparan!');
//      brojNeparnih++
//      sumaNeparnih+=broj
//     }
     
// }

// console.log('Broj Parnih je', brojParnih);
// console.log('Broj Neparnih je', brojNeparnih);

// console.log('Suma parnih je: ',sumaParnih);
// console.log('Suma neparnih je:',sumaNeparnih);


unos=Number(prompt('Unesite proizvoljnu vrijednost'));
brDel=0;

for (i=0;i<=unos; i++) {
    if (unos % i === 0) {
        console.log('brojevi sa kojim je', unos, 'deljiv su', i)
        brDel++
    }
}

if (brDel === 2) {
    console.log('Ovo je prost broj')
}