

// niz = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// suma = [];
// for (var i = 0; i < niz.length; i++) {
//     s = 0;
//     for (var j = 0; j < niz[i].length; j++) {
//         console.log(niz[j][i]);
//         s += niz[j][i];
//     }
//     suma.push(s);
// }
// niz.push(suma);
// console.log(niz);


/////////////////////////////////////

// niz = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// for (let i = 0; i < niz.length; i++) {
//     red = '';
//     for (let j = 0; j < niz[i].length; j++) {
//         if (i === j) {
//             red += niz[i][j] + " ";
//         } else {
//             red += " ";
//         }
//     }
//     console.log(red);
// }

niz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < niz.length; i++) {
    red = "";
    for (let j = 0; j < niz[i].length; j++) {
        if (i + j === niz.length - 1) {
            red += niz[i][j] + " ";
        } else {
            red += " ";
        }
    }
    console.log(red);

}