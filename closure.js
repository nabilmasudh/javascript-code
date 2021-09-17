// rum this function brawser

function a(){
    var x = 5;
    return function(){
        console.log(x)
    }
}

var result = a()
console.dir(result)

