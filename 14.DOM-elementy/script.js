//Exercise 1
const moreDivs = document.querySelectorAll('.more-divs');

function myFunc(paramArray) {
    let newArray = [];
    for(let i = 0; i < paramArray.length; i++) {
        newArray.push(paramArray[i].tagName)
    }
    return newArray;
}

console.log(myFunc(moreDivs));

function showDetails(showList) {
    console.log(showList.innerHTML);
    console.log(showList.outerHTML);
    console.log([...showList.classList].join(', '));
    console.log([...showList.classList]);
    console.log(showList.dataset)
}

//Exercise 2

var sList = document.querySelector('ul.short-list');

function showDetails(element){
    console.log(element.innerHTML);
    console.log(element.outerHTML);
    console.log(element.className);
    console.log(element.classList);
    console.log(element.dataset);
}

showDetails(sList)

//Exercise 3

var sumAndSub = (element) =>{
    console.log(element.dataset)
    var num1 = parseInt(element.dataset.numberone);
    var num2 = parseInt(element.dataset.numbertwo);
    var num3 = parseInt(element.dataset.numberThree);
    var sum = num1 + num2 + num3;
    var sub = num1 - num2 - num3;
    return [sum,sub];
};
console.log(sumAndSub(document.querySelector('#datasetCheck')));

//Exercise 4

const span = document.getElementById('spanText');
span.innerText = 'zmieniony tekst';

//Exercise 5
document.querySelector('#spanText').className = 'test'

//Exercise 6

var table = document.getElementById("classes");
function takeclass(classList) {
    console.log(classList)
    let newArray = [];
    for(var i=0; i<classList.length; i++)
        {
            console.log(classList[i]);
            newArray.push(classList[i]);
        }
        
        console.log(newArray.join(" + "));
    
    
    table.className = '';
    
    console.log('Usunięto wszystkie klasy');
    
}

takeclass(table.classList)

//Exercise 7
let elements = document.querySelector('#longList').querySelectorAll('li');
	

elements.forEach((element) => {
    if (element.dataset.text == null) {
        element.dataset.text = "text";
    }
});


//Exercise 8
let strToObj = (str) => { 
    return {
        newClass: str
    };
 };
let objToStr = (obj) => {
    return obj.newClass;
};


let objFromStr = strToObj('mystr');
let strFromObj = objToStr(objFromStr);
document.querySelector(`#myDiv`).classList.add(strFromObj);


//Exercise 9
function randomNumberClass(num) {
    let el = document.querySelector('#numbers');
    let cssClass = num % 2 == 0 ? 'even' : 'odd';


    el.classList = cssClass;
}
let randNumber = Math.round(Math.random() * 10);


randomNumberClass(randNumber);


//Exercise 10
let longList = document.querySelector('#longList');

function arrayFilledWithValuesFromLongList(longList) {
    let arr = [];


    longList.querySelectorAll('li').forEach((element) => {
        arr.push(element.innerText.trim());
    });


    return arr;
}


console.log(arrayFilledWithValuesFromLongList(longList));


//Exercise 11
function giveMeChildren(children) {
    let childrenAsArray = [...children];


    childrenAsArray.forEach((element) => {
        let randNumber = Math.round(Math.random() * 10);
        
        element.dataset.oldValue = element.innerText.trim();
        element.innerText = randNumber;
    });
}


let children = document.querySelector('#longList').children;
giveMeChildren(children);
