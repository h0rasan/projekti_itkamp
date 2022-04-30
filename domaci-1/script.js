let godine = prompt('Koje godine si rodjen?');
console.log('Imas ', 2021 - godine, 'godina');

let meseci = Number(prompt('Kojeg mjeseca si rodjen? Upisi redni broj mjeseca!'));

if (meseci < 4) {
    console.log('Imas ', 4 - meseci, 'meseca');
} else if (meseci === 4) {
    console.log('Imas 0 meseci');
} else if (meseci > 4) {
    console.log('Imas ', 12 - meseci + 4, 'meseci');
}

let dani = prompt('Kojeg dana si rodjen?');
if (dani < 30) {
    console.log('Imas ', 30 - dani, 'dana');
} else if (dani === 30) {
    console.log('Imas 0 dana');
} 
