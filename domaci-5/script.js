
n = parseInt(prompt('Unesite neki broj'));
odg = 1;

if (n === 0 || n === 1) {
    console.log(odg)
} else {
    for (var i = n; i >= 1; i--) {
        odg = odg * i;
    } console.log(' Faktorijal od', n, 'je', odg);
}