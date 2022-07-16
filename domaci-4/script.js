var num = "";
var size = prompt("Enter the size of the pyramid");
for(var i=1; i<=size; i++)
{
  num = num + i
  console.log(num);
}

// ZADATAK2 VR1
// n = Number(prompt('Unesite broj!'));
// for (i=1; i<=n; i++) {
//     var res = [];
//     for (a = 1; a<= i; a++) {
//         res.push(i);
//     } console.log(res.join(""));
// }

//ZATADAK2 VR2

// brojRedova = Number(prompt('Unesite neki broj!'));
// n = '1';
// for (i = 1; i <= brojRedova; i++) {
//     console.log(n.replaceAll("1", String(i)));
//     n += "1"
// }