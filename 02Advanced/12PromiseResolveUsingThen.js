const uno = ()=>{
    return "I am one";
}

// const dos = ()=>{
//     setTimeout(() => {
//         return "Hello I am two"
//     }, 3000)
// }

const dos = ()=>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("I am two");
        }, 3000)
    })
}

const tres = ()=>{
    return "I am three";
}



const callMe = () =>{
    let valOne = uno();
    console.log(valOne);

    dos().then((valTwo)=>{
        console.log(valTwo)
    });
    

    let valThree= tres();
    console.log(valThree);
}

callMe()