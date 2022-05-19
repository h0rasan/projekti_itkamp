// i = 999;
// j = 999;
// sum = 0;

// while (i >= 100 && j >= 100) {
//     i--;
//     j--;
//     sum = i * j;
//     if (isPalin)
// }


// function largestPalindrome(){

//     for(var i =999; i>100; i--){
//         for(var j = 999; j>100; j--){
//             var mul = j*i;
//             if(isPalin(mul)){
//                 return i * j;
//             }
//         }
//     }
// }

// function isPalin(i){
//     return i.toString() == i.toString().split("").reverse().join("");
// }

// console.log(largestPalindrome());


// function largestPalindrome(){

//     var arr = [];    
//     for(var i =999; i>100; i--){
//         for(var j = 999; j>100; j--){
//             var mul = j*i;
//             if(isPalin(mul)){
//                 arr.push(j * i);
//             }
//         }
//     }

//     return Math.max.apply(Math, arr);
// }

// function isPalin(i){
//     return i.toString() === i.toString().split("").reverse().join("");
// }

// console.log(largestPalindrome());





let pol = 0;
for (let i = 999; i >= 100; i --) {
    for (let j = 999; j >= 100; j --) {
        let num = i * j;
        let s = String(num);
        let rs = s.split('').reverse().join('');
        if (s === rs) {
            pol = Math.max(pol, num);
        }
    }
}
 console.log(pol);