// function recursiveFunction(value){
//     if(value === 0){
//         return 
//     }
//     console.log(value)
//     return recursiveFunction(value -1)
// }

// recursiveFunction(10)


// function sum(number){
//     if(number === 1){
//         return 1
//     }
//     return number + sum(number-1)
// }
// console.log(sum(10))

// function factorialCalculation(number){
//     if(number === 1){
//         return 1
//     }
//     return number * factorialCalculation(number -1)
// }
// console.log(factorialCalculation(10))

var arr = [1, 2, 3, 4, 5]

function recursiveFunction(array, lastIndex){
    if(lastIndex < 0){
        return 0
    }
    return array[lastIndex] + recursiveFunction(array, lastIndex - 1)
}

console.log(recursiveFunction(arr, arr.length - 1))