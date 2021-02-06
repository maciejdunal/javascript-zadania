//Exercise 1

var x=1;
var y=2;

if(x>y) {
   console.log("x jest wieksze"); 
} else {
    console.log("x jest mniejsze");
}
//Exercise 2

let num1 = 112;
let num2 = 115;
let num3 = 20;

if(num1 > num2 && num1 > num3) {
    console.log('num1 jest największe');
} else if(num2 > num3) {
    console.log('num2 jest największe');
} else {
    console.log('num3 jest największe');
}


//Exercise 3

for (let i=0; i<11; i++) {
    console.log("Lubię JavaScript");
}
//Exercise 4

var result = 0;

for(var i = 0; i <11; i++) {
    result += i;
    console.log(result);
}

//Exercise 5:

var n = 5;
for(var i = 0; i<=n; i++)
    {
        if(i%2==0)
            {
                console.log("liczba " +i+ " jest parzysta");
            }
        else
            {
                console.log("liczba " +i+ " jest nie parzysta");
            }
   
       
    }


//Exercise 6: 

for(let i=0; i< 5; i++){
    for(let j=0; j < 5; j++){
        console.log("i= " + i + ", j= " + j);
    }
    
}

//Exercise 7:

console.log(0);
for(var i=1;i<=100;++i){
    if (i%3==0 && i%5==0){
        console.log("FizzBuzz");
    } else if(i%3==0){
        console.log("Fizz");
    }
    else if (i%5==0){
        console.log("Buzz");
    
    }
    else {
        console.log(i);
    }
}
//Exercise 8:

//a
var x = "     *";

for (var i=0; i<5;i++)
{
  console.log(x)
  x += '*';
  x++;
}

//b 
var x = ' *';
var z = 5;

for (var i=0;i<z;i++){
    var space = '';
    for (var k=0; k<z-i; k++){
        space += ' ';
    }
    console.log(space + x);
    x +=' *';
}