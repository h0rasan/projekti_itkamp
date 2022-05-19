// niz = [3, 5, 21, 83, 12, 93, 12, 43, 28, 63, 1];
// sum = 0;
// for (var i = 0; i < niz.length; i++) {
//     sum = sum + niz[i];
// }
// console.log(sum);


//////////////////////////////////////////////////////////////////


// unos = prompt('Koliko brojeva unosite?');
// arr = []
// for (var i = 0; i < unos; i++) {
//     num = parseInt(prompt('Unesite broj'));
//     arr.push(num);
// } console.log(arr);


///////////////////////////////////////////////////////////////////

// niz = [3, 5, 10, 1, 7];
// rev = [];
// for (i = niz.length - 1; i >= 0; i--) {
//     rev.push(niz[i]);
// } 
// console.log(rev);


//////////////////////////////////////////////////////////////////


// arr = [1, 2, 3, 4, 5, 6];

// upit = parseInt(prompt('Unesite broj za proveru'));
// founded = false;
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] === upit) {
//         founded = true;
//         break;
//     } 
// }

// if (founded) {
//     console.log('found');
// } else {console.log('False')}


//////////////////////////////////////////////////////////////////


arr = [1, 2, 3, 4, 5];
newArr = []
unos = parseInt(prompt('Unesite broj'));

for (i = 0; i < arr.length; i++) {
    if (arr[i] != unos) {
        newArr.push(arr[i]);
    }
} console.log(newArr)

