var User = function (firstName, courseCount){
    this.firstName= firstName;
    this.courseCount= courseCount;
    this.getCourseCount= function(){
        console.log(`Course count is: ${this.courseCount}`)
    };
}

User.prototype.getFirstName= function(){
    console.log(`Your first name is: ${this.firstName}`)
}

var  user1= new User("Soumya", 2)
//console.log(user1)
user1.getCourseCount()
user1.getFirstName()

var  user2= new User("Pritam", 4)
//console.log(user2)
user2.getCourseCount()
user2.getFirstName()