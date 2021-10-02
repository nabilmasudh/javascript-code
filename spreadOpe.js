//array spreading
let number = [1, 2, 3, 4, 5];

let newNumber = [...number] //exact copy of number


console.log(`Original array: ${number}`);

number.push(6)

console.log(`Spreade Operator: ${newNumber}`)

console.log(`Original array is Change: ${number}`)


let number1 = [1, 2, 3, 4, 5];
let number2 = [6, 7, 8, 9];

let result = [...number1, ...number2]

console.log(result)

//object spreading

const myObj1 = {
    a: 10,
    b: 20
}

const myObj2 = {
    c: 30,
    d: 40
}

console.log({...myObj1, ...myObj2})