var isArr = [2, 1, 3, 4, 5, 6, 7, 3];

var find_result = isArr.find(function(value){
    return value === 6
})

console.log(find_result)

var findIndex_result = isArr.findIndex(function(value){
    return value === 6
})
console.log(findIndex_result)


function myFind(isArr, Callback){
    for(var i = 0; i < isArr.length; i++){
        if(Callback(isArr[i])){
            return isArr[i]
        }
    }
}

var myFind_result = myFind(isArr, function(value){
    return value === 6
})

console.log(`My find function result is : ${myFind_result}`)

function myFindIndex(array, Callback){
    for(var i = 0; i < array.length; i++){
        if(Callback(i))
        return i
    }
}

var myFindIndex_result = myFindIndex(isArr, function(index){
    return index === 6
})
console.log(`My findIndex function result is : ${myFindIndex_result}`);