class User{

    constructor(name, email){
        this.name = name
        this.email = email
    }
    courses= []
    showDetails(){
        console.log(`Name is ${this.name} and email is ${this.email}`)
    }

    enrollCourses(item){
        this.courses.push(item)
    }

    getCourseList(){
        return this.courses;
    }
}

// let obj= new User("Soumya", "sk@gmail.com")
// obj.showDetails()  //Name is Soumya and email is sk@gmail.com

module.exports = User