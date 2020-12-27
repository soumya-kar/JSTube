// fetch('https://api.chucknorris.io/jokes/random')
// .then(response => {
//     console.log("API :",response.json())
// })
// .catch();

fetch('https://api.chucknorris.io/jokes/random')
.then(response => {
    return response.json();
})
.then(data => {
    console.log("The value/joke is: ",data.value)
})
.catch();