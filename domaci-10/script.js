n = parseInt(prompt('Unesite broj'));

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

newArr = arr.slice(Math.max(arr.length - n));

console.log(newArr);