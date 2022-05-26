
var num = window.prompt('Unesite niz brojeva');
var str = num.toString();
var result = [str[0]];

for (var x = 1; x < str.length; x++) {
  if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
    result.push('-', str[x]);
  } else {
    result.push(str[x]);
  }
}
console.log(result.join(''));


/////////////////////////////////////////////////////////////


// arr = [5, 6, 7, 8, 9, 10, 11, 12, 13, 10, 11, 12, 13, 10, 11,];

// newArr = [...new Set(arr)];

// console.log(newArr);


/////////////////////////////////////////////////////////////////


// arr = [1, 2, 3, 4, 5, 6, 7, 8]
// sum = 0;
// proizvod = 1;

// for (i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     proizvod *= arr[i];
// }

// console.log('Zbir je: ' + sum);
// console.log('Proizvod: ' + proizvod);