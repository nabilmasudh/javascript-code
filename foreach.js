let isArr = [1, 2, 3, 4]


// let sum = 0;
// isArr.forEach(function(value, index, isArr){
//     // console.log(value, index, isArr)
//     sum += value
// })
// console.log(sum)


function isForEach(isArray, callBk){
    for(var i = 0; i < isArr.length; i++){
        callBk(isArray[i], i, isArray)
    }
}

let sum = 0
isForEach(isArr, function(value, index, array){
    console.log(value, index, array)
    sum += value
})
console.log(sum)


isForEach(isArr, function(value, index, arrays){
    arrays[index] = value * 4
})

console.log(isArr)
