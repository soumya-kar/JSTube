var myBucket= ["Soumya", 28, true, 12.8]
console.log(myBucket)
//[ 'Soumya', 28, true, 12.8 ]
myBucket.pop();
console.log(myBucket)
//[ 'Soumya', 28, true ]
myBucket.shift();
console.log(myBucket)
//[ 28, true ]
myBucket.unshift("BMHS")
console.log(myBucket)
//[ 'BMHS', 28, true ]
myBucket[3]="hii"
console.log(myBucket)
//[ 'BMHS', 28, true, 'hii' ]

var nums=[5, 7, 8, 3, 8, 6]
//Returns a section of an array.
var slicedArray= nums.slice(1, 4)
console.log(slicedArray)
//[ 7, 8, 3 ]
//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
nums.splice(1, 3, "Hi", "Bye" )
console.log(nums)
//[ 5, 'Hi', 'Bye', 8, 6 ]

//fill and filter
//fill-Returns the this object after filling the section identified by start and end with value
var testArray= [2, 7, 4, 6, 9, 1, 8]
console.log(testArray.fill("h", 2, 4))
//Output: [2, 7, 'h', 'h', 9, 1, 8]

//filter-Returns the elements of an array that meet the condition specified in a callback function.
var myNum= [54, 34, 78, 89, 23, 90, 65, 45]
const result= myNum.filter((num)=> num>45 )
console.log(result)
