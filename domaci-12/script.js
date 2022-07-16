 nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

 let maxSum = -Infinity;
 let currentSum = 0;

for (let i = 0; i < nums.length; i++) {
   currentSum = Math.max(nums[i], currentSum + nums[i]);
   maxSum = Math.max(currentSum, maxSum);
 }
 console.log(maxSum);

///////////////////////////////////////////////

strs = ["flower", "low", "flight"]            // program proverava da li i ako postoji ispisuje najduzi prefix svih elemenata u nizu

for (i = 0; i < strs.length; i++) {            //brojcanik za svaki index u nizu
  prefix = '';                                 // varijabla za cuvanje krajnjeg rezultata
  for (j = 0; j < strs[i].length; j++) {       //brojcanik za svaki index u elementu niza
    if (prefix[j] !== strs[0][j]) {
      break;          //uslov proverava da li su vrednosti indexa prvog elementa i prvog elementa iz niza iste
    }
    prefix += strs[i][j];                    // ako jesu, varijabla cuva tu vrednost i svakom narednom iteracijom dodaje trenutnu vrednost na postojecu
  }
} console.log(prefix);                         // ispis konacne vrednost
