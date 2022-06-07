arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

nRed1 = 0;
nRed2 = 0;
nRed3 = 0;
for (i = 0; i < arr.length; i++) {
  red = "";
  for (j = 0; j < arr[i].length; j++) {
    red += arr[i][j] + " ";
  }
  console.log(red);
  nRed1 += arr[i][0];
  nRed2 += arr[i][1];
  nRed3 += arr[i][2];
}
console.log(nRed1, nRed2, nRed3);

////////////////////////////////////////////////////////////////

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// row = 0;
// for (var i = 0; i < arr.length; i+4) {
//     row += arr[i];
//     console.log(row);
// }
