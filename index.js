// let array = [6, 7, 8, 9, 10, 11, 12, 13, 14,15];
// for (let i =  array.length-1; i >= 0 ; i--){
//     console.log(array[i] )
// }




// let arrays = [6, 7, 8, 9, 10, 11, 12, 13, 14,15]
// for(variable of arrays){
//     console.log(variable)
// }



// let n = 9
// console.log(Math.round(Math.random() * 50 + 1))
// console.log(Math.sqrt(n))
// console.log(Math.pow(2, 3))
// console.log(Math.PI)
// console.log(Math.E)

// let factorial = 4
// let sum = 1
// for(let i = 1; i <= factorial; i++){
//     sum = sum * i
// }
// console.log(sum)

// var str ='Nabil Masudh Howlader'
// var length = 0;
// while(true){
//     if(str.charAt(length) == ''){
//         break;
//     } else{
//         length++
//     }
    
// }
// console.log(length)
// console.log(str.length)

// let number = 255;
// console.log(number.toString(16));


/*
const number = [1, 2, 3, 4, 5]
const cars = ["Orange", "Yellow", "Aqua", "light"];

cars[cars.length] = "Pink";
cars[cars.length] = "Black";


console.log('Array Length : '+ cars.length)

let result = []
for(i = 0; i < cars.length; i++){
    console.log(cars[i])
    result.push(cars)
}
console.log(result.length)

console.log(typeof cars)
console.log(typeof number)
*/

const numbers = [10, 20, 30, 40, 50];

function myFunction(total, value, index, array){
    console.log(total)
    return total + value
}

const newNumbers = numbers.reduce(myFunction)

console.log(newNumbers)