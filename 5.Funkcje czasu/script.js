//Exercise 1

function Person(firstName,lastName,age,country,city,language)
{
  this.firstName = firstName;
  this.lastName = lastName;
  this.age= age;
  this.country = country;
  this.city = city;
  this.language = language;
  this.changeAge = function changeAge(Age)
  {
    this.age= Age;
  }
  this.changeCity = function changeCity(City)
  {
    this.city = City;
  }
  }


const Person1 = new Person("Jan","Kowalski","33","Polska","Krakow","Polski");
//const Person2 = new Person("Adam","Nowak","25","Polska","Warszawa","Polski");
//const Person3 = new Person("Maciej","ZAQR","23","Polska","Lublin","Polski");
//const Person4 = new Person("Darek","QAZW","51","Polska","Gdansk","Polski");
//const Person5 = new Person("Czarek","WSXrdx","15","Polska","Katowice","Polski");
console.log(Person1);
//console.log(Person2);
//console.log(Person3);
//console.log(Person4);
//console.log(Person5);

Person1.changeAge(76);
Person1.changeCity("London");
console.log(Person1);



//Exercise 2

function Calculator() {
    this.memory = [];
    this.sum = function(a, b) {
        this.memory.push('Dodawanie');
        return a + b;
    }
    
    this.sub = function(a, b) {
        this.memory.push('Odejmowanie');
        return a - b;
    }
    
    this.mult = function(a, b) {
        this.memory.push('Monożenie');
        return a * b;
    }
    
    this.div = function(a, b) {
        this.memory.push('Dzielnie');
        return a / b;
    }
    
    this.clear = function() {
        this.memory = [];
    }
    
}

const calc = new Calculator();
console.log(calc.sum(2,5));
console.log(calc.sum(5,5));
console.log(calc.memory)
calc.clear();
console.log(calc.memory)



//Exercise 3

function Constructor() { 
    this.number = 0;
    this.myInterval = undefined;
    
    this.init = function(){
        this.myInterval = setInterval(() => {
            this.setNumber()
        }, 1000);
    }
    
    this.setNumber = function() { 
        this.number = Math.floor(Math.random() * 10);
        this.checkNumber();
    }
    
    this.checkNumber = function() { 
        console.log(this.number)
        if(this.number > 5) {
            clearInterval(this.myInterval);
        }     
    }
}

const newProg = new Constructor();
newProg.init();




