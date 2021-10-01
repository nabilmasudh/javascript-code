const care = {
    name: 'BMW',
    model:'80529',
    weight: '800kg',
    color:'Black',

    start: function(){
        console.log('car has started')
    },
    drive: function(){
        console.log('care is driving')
    }
}

for (property in care) {
  console.log(property);
}

let result = care.drive()


let arrays = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (variable in arrays) {
  console.log(variable);
}