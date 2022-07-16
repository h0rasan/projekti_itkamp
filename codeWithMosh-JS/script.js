// let person = {
//     name: 'Seid',
//     age: 33
// };

// console.log(person);

// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };

// const another = {};

// for (let key in circle) {
//     another[key] = circle[key];
// }

// const another = ({ ...circle });

// console.log(another);

// const adress = {
//     street: '123 Main Street',
//     city: 'Anytown',
//     state: 'California',
//     zipcode: 12345
// }

// function showAdress(adress) {
//     for (let key in adress) {
//         console.log(adress[key]);
//     }
    
// }

// showAdress(adress);

//factory function
// let adress1 = new Adress("a", "b", "c");
// let adress2 = new Adress("a", "b", "c");

// console.log(areEqual(adress1, adress2));
// console.log(areSame(adress1, adress2));

// function Adress(street, city, zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
// }


// function areEqual(adress1, adress2) {
//     return adress1.street === adress2.street &&
//         adress1.city === adress2.city &&
//         adress1.zipCode === adress2.zipCode;
// }

// function areSame(adress1, adress2) {
//     return adress1 === adress2;
// }


// let post = new Post('a', 'b', 'c');

// console.log(post);

// function Post(title, body, author) {
//     this.title = title;
//     this.body = body;
//     this.author = author;
//     this.views = 0;
//     this.comments = [];
//     this.isLive = false;
// }


// let priceRanges = [
//     { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
//     { label: '$', tooltip: 'Inexpensive', minPerPerson: 11, maxPerPerson: 20 },
//     { label: '$', tooltip: 'Inexpensive', minPerPerson: 21, maxPerPerson: 30 },
// ];



//ARRAYS


// numbers.push(5, 6);
// numbers.unshift(1, 2);
// numbers.splice(2, 0, 'a', 'b');
// console.log(numbers);


// const numbers = [1, 2, 3, 4];
 
// const courses = [
//     { id: 1, name: 'a' },
//     { id: 2, name: 'b' },
// ];

// const course = courses.find(course => course.name === 'a');

// console.log(course);


let numbers = [1, 2, 3, 4];

let another  
