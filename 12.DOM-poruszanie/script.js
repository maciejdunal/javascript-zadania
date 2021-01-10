//Exercise 1

var parent = document.getElementById("buz").parentElement;
console.log('aaa', parent);

var brat = document.getElementById("buz").nextElementSibling;
console.log(brat);

var dzieci = document.getElementById("foo").children;
console.log(dzieci);

var rodzic = document.getElementById("foo").parentNode;
console.log(rodzic);

var pierwszeDziecko = document.getElementById("foo").children[0];
console.log(pierwszeDziecko);

var srodkoweDziecko = document.getElementById("foo").children[1];
console.log(srodkoweDziecko)

//Exercise 2

const listenEvent = (element) => {
    element.addEventListener("click", () => {
        console.log(element.children[0].children[0].children[0].children[1].
                   children[0].children[0].textContent);
    })
}

ex2Element = document.querySelector("#ex2");
listenEvent(ex2Element);


//Exercise 3

const buttons = document.querySelectorAll("#ex3 div button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
       const span = button.nextElementSibling;
        if(span.style.display === "none") {
            span.style.display = "block";
        } else {
            span.style.display = "none";
        }
    });
})

//Exercise 4

function changeColor() { 
    let buttons = document.querySelectorAll('#ex3 button');
    buttons.forEach(element => { 
    element.addEventListener('click', () => {
        let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    element.parentElement.style.backgroundColor = randomColor;
    })})
    }
    
    changeColor();


    //Exercise 5

    function changeColor() {
        var element = document.getElementById('ex5');
        element.querySelectorAll('div').forEach((div) => {
            div.onmouseover = () => {
                //var elem = element.querySelectorAll('ul li:first-child');
                //var elem = element.querySelectorAll('ul li:last-child');
                //var elem = element.querySelectorAll('ul li:nth-of-type(2n)')
                //var elem = element.querySelectorAll('ul li');
                var elem = element.querySelectorAll('ul');
               
                elem.forEach(el => el.style.backgroundColor = div.style.backgroundColor);
            };
        
        });
    }
    changeColor();
    

//Exercise 6

const ex6 = document.getElementById('ex6');

let first = ex6.firstElementChild.firstElementChild.firstElementChild;

let second = ex6.firstElementChild.parrentNode.firstElementChild.firstElementChild.nextElementSibling.parentNode;

let third = ex6.parentNode.firstElementChild.parentNode.children[1].firstElementChild.firstElementChild.firstElementChild;

