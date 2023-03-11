// 14. Calculate the final order price
// A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on the unit price and quantity of each item.
let cart3=[{unitprice:20,quantity:5},{unitprice:18,quantity:5},{unitprice:40,quantity:2},{unitprice:30,quantity:6}]
const split=(arr)=>
{
let final=[];
let final_price=0;
for(i=0;i<arr.length;i++)
{
    final[i]=arr[i].unitprice*arr[i].quantity;
    final_price=final_price+final[i];
}
console.log("The customers cart is:")
console.log(arr);
console.log("The total bill to be paid for items in the cart:$",final_price);
}

split(cart3);
