var person= {
    isHuman: false,
    printIntroduction: function(){
        if(this.isHuman ===true)
            console.log(`My name is ${this.name} and I am human`)
        else
         console.log(`My name is ${this.name} and I am not human`)
    }
}

// var me=Object.create(person)
// me.name="Mimo"
// me.isHuman=true
// me.printIntroduction()

var you= Object.create(person, {
    name : {value : "Manav"},
    isHuman : {value : true}
})

you.printIntroduction()