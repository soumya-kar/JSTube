const User = require("./08ClassExample.js")

const user1= new User("Shyam", "sp@gmail.com")

user1.showDetails()

user1.enrollCourses("Java course")
user1.enrollCourses("Protractor course")
user1.enrollCourses("Devops course")
user1.enrollCourses("Testing course")

console.log(`Total courses are ${user1.getCourseList().length}
and courses are ${user1.getCourseList()}`)