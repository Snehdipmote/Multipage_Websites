// 10. Correct a bug
// You are working on an e-commerce website where customers can add items to their cart. Thq cart stores the quantity of each item that the customer wants to purchase in an array of numbers. However, the website is currently experiencing a bug where the quantity of each item is being recorded incorrectly by reducing it to half. As a result, you need to write a JavaScript function that can double the quantity of each item in the cart array to correct the bug.
const arr2=[4,14,3,6,9,12,18,15,21,27,30,1];
console.log("");

for(i=0;i<arr2.length;i++)
{
    arr2[i]=arr2[i]*2;
    continue;
}
console.log(arr2);

