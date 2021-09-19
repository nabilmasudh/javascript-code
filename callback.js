// function isMain(a, b){
//     var add = a + b;
//     var sub = a - b;
//     var results = sum(add, sub)
//     return results
// }
// function sum(a, b){
//     return a + b;
// }
// var result1 = isMain(5, 8)
// console.log(result1)


// ========================================================

// function multiple(number1, number2){
//     var add = number1 + number2;
//     var mul = number1 * number2;
//     var sub = number1 - number2;
//     var div = number1 / number2;

//     return summation(add, mul, sub, div)
// }

// function summation(props1, props2, props3, props4){
//     return (props1 + props2 + props3 + props4)
// }
    

// let result2 = multiple(5, 7)
// console.log(result2)


// ========================================================


// function isMain(a, b, callBk){
//     var c = a + b;
//     var d = a - b
//     var result = callBk(c, d)
//     return result
// }

// function sum(a, b,){
//     return a + b
// }

// var result = isMain(10, 20, sum)
// console.log(result)

// var result3  = isMain(10, 20, function(c, d){
//     return c - d
// })
// console.log(result3)

// ========================================================

function isMyFunction(number1, number2, isMyCallbackFunction){
    var add = number1 + number2;
    var mul = number1 * number2;
    var div = number1 + number2;
    var sub = number1 + number2;

    return isMyCallbackFunction(add, mul, div, sub)
}

function multiplication(props1, props2, props3, props4){
    return parseFloat(props1 * props2 * props3 * props4).toFixed(2)
}

let result4 = isMyFunction(7, 9, multiplication)

console.log(result4)