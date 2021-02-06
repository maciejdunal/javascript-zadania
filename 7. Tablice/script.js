//Exercise 1
let table = [1, 2, 3, 4,];

console.log(table[0])

//Exercise 2 
let myTable = [1, 2, 3, 4, 'aaa', 'bbbb'];

console.log(table[0]);
console.log(table[table.length-1]);
console.log(table);

for(let i=0; i<table.length; i++){
    if(i%2 == 0){
        console.log(table[i])
    }
    if(typeof(tble[i]) == 'string') {
        console.log(table[i])
    }
    if(typeof(table[i]) == 'number') {
        console.log(table[i])
    }
}


//Exercise 3 

const array = [13, 51, 3, -2, 5, 6, 8];
// 1
console.log(array.reduce((a, b) => a + b));
// 2
console.log(array.reduce((a, b) => a - b));
// 3
console.log(array.reduce((a, b) => a + b / array.length));
// 4
array.filter((v, i) => v % 2 === 0).forEach(v => 
        {
        console.log(v);
        }
    );
// 5
arr.filter((v, i) => v % 2 !== 0).forEach(v => {
    console.log(v);
});
// 6 
let biggest = 0;
arr.forEach(v => {
    if (v > biggest) {
        biggest = v;
    }
});
console.log(biggest);
// 7
let smallest = 0;
arr.forEach(v => {
    if (v < smallest) {
        smallest = v;
    }
});
console.log(smallest);
// 8
const arrLength = arr.length - 1;
arr.forEach((v, i) => {
    console.log(arr[arrLength - i]);
});

//Exercise 4
function table(paramTable){
    let result = 0;
    for(i=0; i<paramTable.length; i++){

        result = result + paramTable[i];
    }
    console.log(result)
};

myTable([1,2,3,4]);

//Exercise 5
function dividedByAverageArray(arr) {
	    let average = arr.reduce((x, y) => x + y) / arr.length;
	    return arr.map(x => x * average);
	}
	

	console.log(dividedByAverageArray([1, 2, 3]));


//Exercise 6 
myTable([1,2,3,4]);

function table(paramTable){
    var sum =0;
    var length = 0;
    for (i = 0; i < paramTable.length ; i++)
    {
        if(paramTable[i] % 2 == 0){
            
            sum = sum + paramTable[i];
            length++;
        }
            
    }

    let avg = sum / length;
    console.log(avg)
};
//Exercise 7
function sortArr(arr) {
	    return arr.sort();
	}
	

	console.log(sortArr([2, 3, 1]));

//Exercise  9
function reverseSing(paramTable)
{
  return  paramTable.map(el => {
    return el * (-1);
  })
}
console.log(reverseSing([1,-2,-2,1,7]));