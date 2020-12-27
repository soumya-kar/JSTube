function sumNumbers(...args){
    let sum=0
    for(const arg of args){
        sum +=arg
    }
    return sum
}

console.log(sumNumbers(5,7,4,7))  //23