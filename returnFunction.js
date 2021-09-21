function isName(name){
    function isAddress(address){
        return name + ', ' + address;
    }
    return isAddress;
}

var result1 = isName('Nabil Masudh')
var result2 = result1('Bagerhat, Khulna');

console.log(result2)



function base(number1){
    function power(number2){
        var result = 1;
        for(var i = 0; i < number1; i++){
            result *= number2
        }
        return result;
    }
    return power;
}
var result3 = base(5);
console.log(result3(2))


function addition1(number1){
    function addition2(number2){
        return number1 + number2
    }
    return addition2;
}
var result4 = addition1(4)
var result5 = result4(10)
console.log(result5)


