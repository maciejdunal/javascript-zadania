//Exercise 1
	let car = {
	    brand: 'Volvo',
	    model: 'XC90',
	    production_year: '2020'
	};
	

	console.log(car.brand);
	console.log(car.model);
	console.log(car.production_year);
	

// Exercise 2
	car.changeModel = function(newModel) {
	    this.model = newModel;
	}
	

	car.changeModel("XC60");
	console.log(car.model);
	

// Exercise 3
	let calc = {
	    sum: 0,
	    sumArr: function(arr) {
	        this.sum = arr.reduce((x, y) => x + y);
	    }
	};
	

	calc.sumArr([1, 2, 3, 4]);
	console.log(calc.sum);
	

// Exercise 4
	let car2 = {
	    name: 'Ford',
	    age: '3'
	};
	

	for (let prop in car2) {
	    console.log(`${prop}: ${car2[prop]}`);
	}
	

// Zadanie 5
	let car3 = {
	    someObj: {
	        price: 999900 
	    }
	};
	console.log(car3.someObj.price);
	

// Zadanie 6
	let car4 = {};
	car4.price = "868765";
	car4.sayHello = () => console.log("Hello");
	

	car4.sayHello();