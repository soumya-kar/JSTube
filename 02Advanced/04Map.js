var myMap= new Map();

myMap.set(1, "One");
myMap.set(2, "Two");
myMap.set(3, "Three");
myMap.set(4, "Four");

console.log(myMap)
//oouput-Map { 1 => 'One', 2 => 'Two', 3 => 'Three', 4 => 'Four' }

for(let key of myMap.keys())
    console.log(`Key is ${key}`)
for(let value of myMap.values())
    console.log(`Value is ${value}`)

//Print both key and value
myMap.forEach((v, k)=>{console.log(`Key is ${k} and Value is ${v}`)})
