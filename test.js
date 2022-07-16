
//    PRVI ZADATAK


// function countOddNums(arr, n) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0 && arr[i] <= n) {
//       newArr.push(arr[i]);
//     }
//   }
//     return newArr;;
// }

// res = countOddNums([2, 3, 4, 23, 2, 22, 32, 3], 10);

// console.log(res);


///////////////////////////////////////////////////

//    DRUGI ZADATAK


function mergeArrs(arr1, arr2) {
    arr3 = [...arr1, ...arr2];
    newArr = [];
    for (let i = 0; i < arr3.length; i++) {
        if (!newArr.includes(arr3[i])) {
            newArr.push(arr3[i]);
        } newArr.sort((a, b) => a - b);
    }
    return newArr;
}


    res = mergeArrs([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]);

    console.log(res);