// 6} Vowel Counter
// We want to count the number of vowels in a person's name. Given a name as input, the program should iterate
// through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should be
// counted
let name="Steve Rogers";
let vow="aeiouAEIOU";
let count=0;
function containsvowels(str)
{
    for(i=0;i<str.length;i++)
    {
        
        for(j=0;j<10;j++)
        {
            
            if(str[i]==vow[j])
            {
                count=count+1;

            }
        }
       
    }
    console.log(name,"contains",count,"vowels.");  
}
containsvowels("steve Rogers");
