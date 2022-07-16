let click = 0;
el = document.querySelector('h1');
// function bgClr() {
//     click++;
//     if (click % 2 === 0) {
//         el.style.backgroundColor = "green"
//     } else { el.style.backgroundColor = "blue" };
// }


// function bgClr() {
//     if (el.style.backgroundColor === "red") {
//         el.style.backgroundColor = "blue";
//         return;
//     }
//     e.style.backgroundColor = "red";
// }

// parent = document.getElementById('a');

// function add() {
//     a = document.createElement('h1');
//     a.innerHTML = "Hello world";
//     a.style.backgroundColor = "red";
//     parent.appendChild(a);
// }


users = ['John', 'Bob', 'Mary', 'Jane'];

parent = document.getElementById('main');
function add() {
    div = document.createElement('h1');
    div.innerText = users;
    parent.appendChild(div);
}