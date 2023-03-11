// 8. Inverted right-angled triangle pattern with asterisks
// Write a program that takes an integer input i and prints an inverted right angled triangle pattern of asterisks
// with i rows.
// Inverted right angled pattern:
// If i=6
console.log("The right angled triangle with * ");
console.log("");
for(j=7;j>0;j--)
{
    let s=[];
    print(j,s);
}

function print(n,str)
{
    
    for(m=0;m<n;m++)
    {
        str[m]="*";
    }
    console.log(str.join(""));
}

