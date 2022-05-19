


// let novcanice = 25;

// brojac = 0;
// while (brojac < novcanice) {
//     brojac++;
// }

// console.log('broj novcanica je ', brojac);


/////////////////////////////////////////////////////////////////////


// let novcanice = [10, 5, 20, 50, 5, 10, 100, 20, 50];
// let broj_novcanica = novcanice.length;

// for(let brojac = 0; brojac < broj_novcanica; brojac++) {
//     console.log(novcanice[brojac]);
// }


///////////////////////////////////////////////////////////////////

// let automobili = ['Audi', 'BMW', 'Mercedes', 'VW', 'SEAT'];
// for (let automobil of automobili) {
//     console.log(automobil);
// }


//////////////////////////////////////////////////////////////////////


// let novcanice = [10, 5, 20, 50, 5, 10, 100, 20, 50];
// let broj_novcanica = novcanice.length;
// let ukupno_novca = 0;

// for (let brojac = 0; brojac<broj_novcanica; brojac++) {
//     console.log(novcanice[brojac]);
//     ukupno_novca = ukupno_novca + novcanice[brojac];
// }

// console.log("***kraj petlje***");
// console.log(ukupno_novca); 


///////////////////////////////////////////////////////////////

// let novcanice = [10, 5, 20, 50, 5, 10, 100, 20, 50];

// for (let brojac in novcanice) {
//     console.log(brojac);
//     console.log(novcanice[brojac]);
//     console.log('------------')
// }

///////////////////////////////////////////////////////////////


// let novcanice = [10, 5, 20, 50, 5, 10, 100, 20, 50];

// for (let novcanica of novcanice) {
//     console.log(novcanica);
// }


//////////////////////////////////////////////////////////////


// let automobili = ['Audi', 'BMW', 'Porsche', 'Mercedes'];

// automobili.forEach(function (automobil) {
//         console.log(automobil);
// })


////////////////////////////////////////////////////////////


// let automobili = {
//     audi: ['70000', '2017', 'Q7'],
//     bmw: ['50000', '2018', '330d'],
//     mercedes: ['60000', '2019', 's400']

// };

// for (automobil in automobili) {

//     console.log(automobili[automobil]);
// }


/////////////////////////////////


// let nekretnine = {
//     stan: 70000,
//     kuca: 150000,
//     plac: 30000
// };

// racunanje_mjesecne_rate(15, 'stan');
// racunanje_mjesecne_rate(5, 'plac');
// racunanje_mjesecne_rate(20, 'kuca');

// function racunanje_mjesecne_rate(godine, vrsta_nekretnine) {
//     let mjeseci = godine * 12;
//     let rata = nekretnine[vrsta_nekretnine] / mjeseci;
//     rata = rata.toFixed(2);

//     console.log('---------------------');
//     console.log('Mjesecna rata za', vrsta_nekretnine, 'iznosi', rata, 'eura na', godine, 'godina');
// }


////////////////////////////////////////////////////////////////////


// let brand = document.getElementsByTagName('span');
// console.log(brand[0].innerText);
// console.log(brand[1].innerText);
// console.log(brand[2].innerText);

function inflationCalculator() {
    let inflationRate = document.querySelector('#inflationRate');
     
    console.log(inflationRate.value);
    console.log(money.value);
}