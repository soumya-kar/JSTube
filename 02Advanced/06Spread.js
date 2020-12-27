//Example 1- Spread operator(...)
function add(a, b, c){
    return a+b+c
}
let nums= [3,6,8,9]
console.log(add(...nums)) //ouput- 17  
//9 will be ignored