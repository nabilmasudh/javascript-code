var isArr = [3, 6, 8, 9, 7, 4]

// var isfilter = isArr.filter(function(value){
//     return  value < 4;
// })
// console.log(isfilter)


// function myFilter(isArr, callBk){
//     var tempArr = []
//     for(var i = 0; i < isArr.length; i++){
//         if(callBk(isArr[i], i, isArr))
//         tempArr.push(isArr[i])
//     }
//     return tempArr;
// }

// var result1 = myFilter(isArr, function(value){
//     return value % 2 === 0
// })
// console.log(result1)


function myFilter(isArr, callbackFunction){
    var tempArr = []
    for(var i = 0; i < isArr.length; i++){
        if(callbackFunction(isArr[i], i, isArr)){
            tempArr.push(isArr[i])
        }
    }
    return tempArr;
}

var result2 = myFilter(isArr, function(value, index, array){
    return value
})
// console.log(result2)


let number = [10, 20, 30, 40, 50, 60, 70, 80, 90];

let result = number.filter((currentValue, index, array)=>{
    return currentValue > 50
})

console.log(result)
