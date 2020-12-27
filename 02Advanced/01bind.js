var user1= {
    name : "Soumya",
    city : "Burdwan",
    courseCount : 6,

    showDetails : function(){
        console.log(`
            Name is ${this.name}
            City is ${this.city}
            Course count is ${this.courseCount}
        `)
    }
}

user1.showDetails();

var user2= {
    name : "Rock",
    city : "New york",
    courseCount : 4
}

user1.showDetails.bind(user2)()




