// HOF
const square = n =>
{
  return n**2;
}
console.log(square(5));
// Square was a simple function
// Now we want a function having square as a argumnet or returning a function that will be a HOF
// Lets create a function that gives cube 
const cube = (square,n )=>
{
  return square(n)*n;
}
console.log(cube(square,5));
// 125
function say()
{
  return ()=>
  {
    console.log("This is a HOF in which its returning another function");
  }
}
let a=say();
console.log(a);
//[Function (anonymous)]

// Now lets create a HOF in like nested way
function d(l)
{
  function b(m)
  {
    function c(n)
    {
      return l*m*n;
    }
    return c;
  }
  return b;
}
console.log(d(2)(3)(4));
// 24

// We use for to loop through array but there is simple foreach function through which we can do it in single line
const array=[2,3,4,4,5,6,7];
const sum = arr =>
{
  let total=0;
  // arr.forEach(element => {
  //   total=total+element;
  // });
  // OR
  arr.forEach(function (element) {
    total+=element;
  });
  return total;
}
console.log(sum(array));
// 31

// there are two function related to timing
// setinterval : it repeats after the specifid interval of times 
function greet()
{
  console.log("this is a random function but Welcome:",Math.random());
}
// setInterval(greet,1000);
// this is a random function but Welcome: 0.590834978013264
// this is a random function but Welcome: 0.553725897596923
// this is a random function but Welcome: 0.5836653187490592
// this is a random function but Welcome: 0.9324104739818215
// this is a random function but Welcome: 0.19457784764838726
// this is a random function but Welcome: 0.6484011982108215
// this is a random function but Welcome: 0.7454368075832178
setTimeout(greet,10000);
// this is a random function but Welcome: 0.23945464620440338
// above output is printed to screen only once after specified time
