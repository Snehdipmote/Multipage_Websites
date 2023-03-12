// 15. Calculate the percentage of the discount
// A retail store is offering a discount on its products and wants to calculate the percentage of the discount to show customers how much they can save. Given the original price and the discounted price of a product, implement an arrow function to calculate the percentage of the discount rounded off to two decimal places.This function could be useful for the store's marketing team to create promotions and offers that attract Customers.

// To calculate the percentage of the discount formula should be ((original price-discounted price)/original price)*100;
const percentage=(original,discount)=>
{
    let percent=Math.round(((original-discount)/original)*100);
    console.log("Todays deal:",percent,"% off on $",original);
}
percentage(250,175);
