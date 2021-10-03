function modifier(strings, ...values){
    const modi = strings.reduce((prev, current)=>{
        return prev + current + (values.length ? "Mr. " + values.shift() : "")
    }, "")
    return modi
}

var name1 = "Nabil"
var name2 = "Masudh"

console.log(modifier`We have ${name1} and  ${name2} in our colleague`);