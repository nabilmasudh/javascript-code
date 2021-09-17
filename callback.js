// function isMain(a, b){
//     var add = a + b;
//     var sub = a - b;
//     var results = sum(add, sub)
//     return results
// }
// function sum(a, b){
//     return a + b
// }
// var result = isMain(5, 8)
// console.log(result)



function isMain(a, b, callBk){
    var c = a + b;
    var d = a - b
    var result = callBk(c, d)
    return result
}

function sum(a, b,){
    return a + b
}

var result = isMain(10, 20, sum)
console.log(result)

var result2  = isMain(10, 20, function(c, d){
    return c - d
})
console.log(result2)