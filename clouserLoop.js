for(var i = 1; i <= 5; i++){
    (function(value){
        setTimeout(function(){
            console.log(value)
        }, 2000*value)
    })(i)
}