//5. we can pass function as an Arguments

//6. we can return function from another function

function add(a, b){
    return a * b
}

function isMain(a, b, func){
    var add = a + b
    var sub = a - b

    return function(){
        var result = func(a, b)
        return add*sub*result
    }
}

var multiply = isMain(5, 7, add)
console.log(multiply())