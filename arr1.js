//part1

const numbers = [10,20,30,40,50];
const [firstNumber,secondNumber] = numbers;

console.log(numbers.length);

 //part2

 const myString = "abc";
 const myNumber = 15;
 const myBoolean = true;

 console.log(typeof myString, typeof myNumber, typeof myBoolean);

 //part3
//math with array's elements

console.log(firstNumber+secondNumber);
console.log(firstNumber-secondNumber)
console.log(firstNumber*secondNumber)
console.log(firstNumber/secondNumber)
console.log(secondNumber%firstNumber)
console.log(firstNumber==secondNumber)
console.log(firstNumber===secondNumber)
console.log(firstNumber!=secondNumber)
console.log(firstNumber!==secondNumber)
console.log(firstNumber>secondNumber)
console.log(firstNumber<secondNumber)
console.log(firstNumber<=secondNumber)
console.log(firstNumber>=secondNumber)

//part4

console.log((firstNumber%2)==0 && firstNumber>0 )
console.log((firstNumber%2)==0 || firstNumber>0)
console.log(firstNumber<0)
