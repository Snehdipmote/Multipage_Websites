// 9. Check for divisibility
// Write a program that takes an array of numbers and prints all the numbers that are divisible by 3, but not by 2.Use a for loop and continue statement.
const arr1=[4,14,3,6,9,12,18,15,21,27,30,1];
console.log("The numbers that are divisible by 3, but not by 2 are :")
for(i=0;i<arr1.length;i++)
{
    if(arr1[i]%3==0 && arr1[i]%2!=0)
    {
        console.log(arr1[i]);
    }
    continue;
}
