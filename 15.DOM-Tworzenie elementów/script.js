//Exercise 1
let div = document.createElement('div');
div.innerHTML = 'To jest nowy element';
root.appendChild(div);


//Exercise 2
let ul = document.createElement('ul');
ul.id = "moja-super-lista";


let li1 = document.createElement('li');
li1.innerText = "Ananas";

let li2 = document.createElement('li');
li2.innerText = "Mandarynka";

let li3 = document.createElement('li');
li3.innerText = "Granat";

let li4 = document.createElement('li');
li4.innerText = "Wisnia";

let li5 = document.createElement('li');
li5.innerText = "Jablko";

let li6 = document.createElement('li');
li6.innerText = "Banan";


ul.appendChild(li1);

ul.appendChild(li2);

ul.appendChild(li3);

ul.appendChild(li4);

ul.appendChild(li5);

ul.appendChild(li6);


root.appendChild(ul);


//Exercise 3
function hideSomeFruits(event) {
    if (event.key != 'd') {
        return;
    }


    let target = document.querySelector('#moja-super-lista');
    let children = [...target.children];
    
    let numOfChildren = children.length;


    for (let i = 0; i < numOfChildren; i++) {
        if (i % 2 == 0) {
            children[i].remove();
        }
    }


    document.removeEventListener('keypress', hideSomeFruits)
}


document.addEventListener('keypress', hideSomeFruits);


//Exercise 4
let button = document.createElement('button');
button.innerText = 'Super przycisk';

button.addEventListener('click', (event) => event.target.remove());

root.appendChild(button);


//Exercise 5
let randNumber = Math.round(Math.random() * 10);


for (let i = 0; i < randNumber; i++) {
    let div = document.createElement('div');
    
    div.innerHTML = `To jest div numer ${i + 1}`;
    root.appendChild(div);
}