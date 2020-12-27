// var user= ["Soumya", 35, "Consultant"]

// console.log("Name is ",user[0])

// var [name, id, role]= user;

// console.log("Name-",name)
// console.log("Id-",id)
// console.log("Role-",role)

//Using Object
const user={
    name : "Sammy",
    id : 34,
    role : "Analyst"
}
console.log("User name ",user.name)

const {name, id, role} = user
console.log(`Id is ${id}`)