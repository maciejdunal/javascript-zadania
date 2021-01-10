//Exercise 1:

function printString() {
    console.log("Udalo sie!");
}
printString('');

//Exercise 2:
function printParam(x) {
    console.log(x);
}

printParam('Test');


//Exercise 3

const exampleArray = ["raz", "dwa", "trzy"];

function returnArray(array) {
  return array;
}

//Exercise 4

function printString(string) {
    let counter = 1;
    let timer = setInterval(function () {
        if (counter < 5) {
            console.log(string);
            counter++;
        } else {
            clearInterval(timer);
            console.log("Koniec");
        }
    }, 3000);
}

