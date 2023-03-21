let arr=[2,3,4,5,6,6,6];
arr.forEach(function (value,index,anyarray)
{
    console.log(value,index,anyarray);
}
)
// 2 0 [
//     2, 3, 4, 5,
//     6, 6, 6
//   ]
//   3 1 [
//     2, 3, 4, 5,
//     6, 6, 6
//   ]
//   4 2 [
//     2, 3, 4, 5,
//     6, 6, 6
//   ]
//   5 3 [
//     2, 3, 4, 5,
//     6, 6, 6
//   ]
//   6 4 [
//     2, 3, 4, 5,
//     6, 6, 6
//   ]
//   6 5 [
//     2, 3, 4, 5,
//     6, 6, 6
//   ]
//   6 6 [
//     2, 3, 4, 5,
//     6, 6, 6
//   ]
const name1=["Chandler","Monica","Rachel","Ross","Joey","Phoebe"];
name1.forEach((el)=>
    {
        console.log(el.toUpperCase());
    })
    // CHANDLER
    // MONICA
    // RACHEL
    // ROSS
    // JOEY
    // PHOEBE
const name1containso=name1.filter((h)=>{
    return h.startsWith('R');
})
console.log(name1containso);
// [ 'Rachel', 'Ross' ]

// let arr=[2,3,4,5,6,6,6];
// reduce is a function which gives access to previous and current element of array
// also it reduces the array to a single element
// here 0 is the initaial value for first iteration
let sum= arr.reduce((previous,current)=>previous+current,0);
console.log(sum);
// 32
let sum1= arr.reduce((previous,current)=>previous+current,8);
console.log(sum1);
// 40

// let arr=[2,3,4,5,6,6,6];
// to check wheteher all values in array is of specific types lets say numbers
let d=arr.every((v)=>typeof v ==="number")
console.log(d);
// true
// if let d=arr.every((v)=>typeof v ==="Number")
// false
// if let arr=[2,3,4,5,6,6,6."m"]; and let d=arr.every((v)=>typeof v ==="number")
// false

// to check number greater than 4
let e=arr.find(v=>v>4)
// this search for numver greater than 4 in an array and when finds first it stops there and doesn't search further
console.log(e);
console.log(typeof e);
// 5
// number

console.log(arr.findIndex(six))
function six(v)
{
    return v===3
}
// return v===6
// 4
// return v===8
// -1 for not found
// return v===3
// 1
function s(v)
{
    return v>10
}
console.log(arr.some(six))
// true
// returns true if condition satisfies
console.log(arr.some(s))
// false

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());
console.log(fruits.reverse());
// [ 'Apple', 'Banana', 'Mango', 'Orange' ]
// [ 'Orange', 'Mango', 'Banana', 'Apple' ]
