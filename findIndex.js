let number = [10, 20, 30, 40, 50, 60, 70, 80, 90]

let result = number.findIndex((currentValue, index, array)=>{
    return currentValue > 100 //return index
})

console.log(result)