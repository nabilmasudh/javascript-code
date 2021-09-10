while(true){
    let randomNum = (Math.round(Math.random() * 5))
    if(randomNum == 5){
        console.log('This Random Number is Break Here And Game Over '+randomNum)
        break;
    }else{
        console.log('Random Number is '+randomNum)
    }
}

for(let i = 1; i <= 20; i++){
    if(i % 10 === 0){
        console.log('This Number is Break Here')
        break;
    }else{
        console.log('Number is '+ i)
    }
}