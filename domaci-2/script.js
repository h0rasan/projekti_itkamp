// for (var i = 1; i <= 3; i++) {
//     console.log('JavaScript');
// }

// for (var i = 1; i <= 3; i++) {
//     console.log('je super!');
// }




// nmbr = prompt('Unesi neki broj!');
// for (var i = 0; i <= nmbr; i= i+2) {
//         console.log(i)
// }



// nmbr = prompt('Unesi neki broj!');
// for (var i = nmbr; i >= 0; i--) {
//     console.log(i)
// }


unos= prompt('Koliko brojeva unosite?');

for(i=1; i<=unos; i++) {
    broj=prompt('Unesite neki broj!');
    if ((broj % 2)==0) {
   console.log('Broj', broj, 'je paran');    
} else console.log('Broj', broj, 'je neparan');
}