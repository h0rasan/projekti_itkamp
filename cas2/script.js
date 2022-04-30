tmp_dan = 2;
tmp_mesec = 2;
tmp_godina = 2022;

godine = 1995;
mesec = 7;
dan = 4;

if (dan <= tmp-dan) {
    console.log('Imam', tmp-dan - dan, 'dana');
} else {
    tmp_mesec -= 1;
    console.log('Imam', tmp-dan + 30 - dan, 'dana');
}