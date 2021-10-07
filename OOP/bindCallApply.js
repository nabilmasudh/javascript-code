function myfunction(number3, number4){
    console.log(this)
    console.log(this.number1 + this.number2 + number3 + number4)
}

myfunction.call({number1: 10, number2: 20}, 30, 40)

myfunction.apply({ number1: 100, number2: 200 }, [40, 80]);

let result = myfunction.bind({number1: 200, number2: 300})
result(40, 500)
result(40, 99999999999999)