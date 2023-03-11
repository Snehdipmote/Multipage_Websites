
// 14. Calculate the final order price
// A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on the unit price and quantity of each item.
let cart3=[{unitprice:20,quantity:5},{unitprice:18,quantity:5},{unitprice:40,quantity:2},{unitprice:30,quantity:6}]
let final=[];
let final_price=0;
for(i=0;i<cart3.length;i++)
{
    final[i]=cart3[i].unitprice*cart3[i].quantity;
    final_price=final_price+final[i];
}
console.log(final);
console.log("The total bill to be paid for items in the cart:$",final_price);
