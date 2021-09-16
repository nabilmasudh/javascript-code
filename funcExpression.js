var funcExpression = function(number1, number2){
    return number1 + number2
}

var expressionResult = funcExpression(40, 30)

setTimeout(function(){
    console.log(expressionResult)
},2000)


var result = funcExpression
console.log(result(10, 20))
