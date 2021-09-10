var isArray = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80]

var find  = 10
var isFound = false;

for(var i = 0; i < isArray.length; i++){
    if(isArray[i] === find){
        console.log('Data Found Here');
        isFound = true;
        break;
    }
}

if(!isFound){
    console.log('Data Not Found Here')
}