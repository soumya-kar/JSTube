user= {

    firstName : "Michael",
    lastname : "Jenkins",
    loggedIn : true,
    age : 30,
    courses : [],
    buyCourses : function (course){
        this.courses.push(course)
    },

    getCourses : function(){
        return `${this.firstName} has enrolled in ${this.courses.length} courses and Course name is/are  ${this.courses}`
    }

}

user.buyCourses("Selenium Java Course")
user.buyCourses("React JS Course")
user.buyCourses("Python Course")
console.log(user.getCourses());
console.table(user)
console.info(user);

