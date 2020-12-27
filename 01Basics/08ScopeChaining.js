var name="Soumya"

console.log("Line number 3",name)

function sayMyName() {
    var name= "skar"
    console.log("Line No 7",name)
    sayHisName()
    function sayHisName(){
        console.log("Line No 10", name)
    }
}

sayMyName()
