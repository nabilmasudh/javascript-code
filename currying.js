function addition(number1, number2, number3){
    return number1 + number2 + number3
}

console.log(addition(10, 20, 30))


function summation(number1){
    return function(number2){
        return function(number3){
            return number1 + number2 + number3;
        }
    }
}

let result1 = summation(10)(15)(20)
console.log(result1)