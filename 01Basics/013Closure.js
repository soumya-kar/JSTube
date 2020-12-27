function init(){
    var name="Vikas"
    function showName(){
        console.log(name)
    }
    return showName
}

var printName=init()
printName()

console.log("-------------------")

function add(num){
    return function withThis(num2){
        return num +num2
    }
}

var a= add(8)
console.log(a(8))
//We can do the addition in one line as well
console.log(add(6)(8))