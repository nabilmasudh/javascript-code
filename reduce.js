var isArr = [2, 1, 3, 4, 5, 6, 7, 3]

// var reduceResult = isArr.reduce(function(previusValue, currentValue){
//     return previusValue + currentValue
// },69)
// console.log(reduceResult);

// var reduceResult2 = isArr.reduce(function (previusValue, currentValue) {
//   return Math.min(previusValue, currentValue);
// });
// console.log(reduceResult2);

function myReduce(isArr, Callback, previusValue){
    for(var i = 0; i < isArr.length; i++){
        previusValue = Callback(previusValue, isArr[i])
    }
    return previusValue;
}
var sum_result = myReduce(isArr, function( previusValue, currentValue){
    return previusValue + currentValue;
},50)
console.log(sum_result)

var max_result2 = myReduce(isArr, function(previusValue, currentValue){
    return Math.max(previusValue, currentValue)
}, isArr[0])
console.log(max_result2)
