var is_Array = [1, 2, 3]

// let sum = 0
// var isResult = is_Array.map(function(value){
//     return sum += value

// })
// console.log(sum)


function isMap(is_Array, callBk){
    var tempArray = []
    for(var i = 0; i < is_Array.length; i++){
        var temp = callBk(is_Array[i])
        tempArray.push(temp)
    }
    return tempArray
}
var square = isMap(is_Array, function(value){
    return value * value
})
console.log(square)
