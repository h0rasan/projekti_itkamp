niz = [2, 3, 4, 5, 6, 7, 7, 8, 8, 9, 10, 11, 8, 8, 8];
newArr = []

for (element of niz) {
    if (!newArr.includes(element)) {
        newArr.push(element);
    }
}

console.log(newArr);


////////////////////////////////////////////////////////////////


// arr = [NaN, 0, 15, false, -22, '', undefined, 47, null]
// newArr = []
// for (el of arr) {
//     if (el) {
//         newArr.push(el);
//     }
// } console.log(newArr);


////////////////////////////////////////////////////////////////

// arr1 = [1, 2, 3];
// arr2 = [2, 30, 1];
// arr3 = [];
// arr4 = [];
// arr3 = arr1.concat(arr2);

// for (el of arr3) {
//     if (!arr4.includes(el)) {
//         arr4.push(el);
//     }
// }
// console.log(arr4);


/////////////////////////////////////////////////////////////////


// unos = parseInt(prompt('Unesite velicinu niza'));
// num = parseInt(prompt('Unesite vrednost u nizu'))

// arr = [];
// for (var i = 0; i < unos; i++) {
//     arr.push(num);
// }

// console.log(arr);


//////////////////////////////////////////////////////////////////


