class User{

    constructor(name, email){
        this.name = name
        this.email = email
    }

    //We can make ariable private by adding # as a first letter in name
    #courses= []
    get showDetails(){
        console.log(`Name is ${this.name} and email is ${this.email}`)
    }

    enrollCourses(item){
        this.#courses.push(item)
    }

    get CourseList(){
        return this.#courses;
    }
}

let obj= new User("Soumya", "sk@gmail.com")
obj.showDetails  //Name is Soumya and email is sk@gmail.com
obj.enrollCourses("Selenium")
console.log(obj.CourseList)

