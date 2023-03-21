// 1. Reverse String.
// The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of 2 seconds before reversing the string. The reversed string should then be printed as output.
let input="Snehdip Anil Mote"
let newinput=[];

function reverse(str)
{
    for( i=str.length-1;i>=0;i--)
    {
        newinput=newinput+str[i]
    }
    console.log("Reversed string after 2ms of delay is:");
    console.log(newinput);
}
setTimeout(()=>{reverse(input)},2000)
// [Running] node "/config/workspace/a.js"
// Reversed string after 2ms of delay is:
// etoM linA pidhenS
//*************************************************************************************************





// 2. Random Number Generator with Delay and Progress Indication: 

// The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
// variable so can be modified. The program displays a message every second indicating the time remaining
// until the random number is generated and then outputs the generated number. 
let delay=3000;
function time(d)
{
    const a=setInterval(()=>
    {
        if(d>0)
        {
        console.log("the time remaining to generate random number:",d)
        d=d-1000;
        }
        else
        {
            console.log("Random number generated is:",Math.random())
            clearInterval(a);
        }
    },1000)

}
time(delay)
// output:
// [Running] node "/config/workspace/a.js"
// the time remaining to generate random number: 3000
// the time remaining to generate random number: 2000
// the time remaining to generate random number: 1000
// Random number generated is: 0.052437807480394616

// [Done] exited with code=0 in 4.087 seconds





// -----------------------------------------------------------------------------------------------------------------
// 3. Build a feature for Store's Inventory.

// Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
// program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
// use the map higher-order function to create a new object with the converted prices in Rupees.
const v={handwash:7,fruits:12,snacks:25,book:2}
function updat(obj)
{
    let newobj=new Object();
    console.log("The cart with product price in $:")
    console.log(obj)
    console.log("")
    Object.keys(obj).map((key)=>{
        newobj[key]=obj[key]*80;
    })
    console.log("The cart with product price in INR:")
    console.log(newobj);
    return newobj;
}
updat(v)
// [Done] exited with code=0 in 0.062 seconds

// [Running] node "/config/workspace/tempCodeRunnerFile.js"
// The cart with product price in $:
// { handwash: 7, fruits: 12, snacks: 25, book: 2 }

// The cart with product price in INR:
// { handwash: 560, fruits: 960, snacks: 2000, book: 160 }

// [Done] exited with code=0 in 0.063 seconds
// ----------------------------------------------------------------------------------------------------------------


// 4. Filtering and Capitalizing: Books Published After 2010 with Author Names.

// Write a program that takes a list of books, including their authors and publication years as input. The program
// should then filter out all books that were published before 2010 and create a new array with the remaining
// books, but with their author names capitalized.
const books={steve_rogers:2010,natasha_romanoff:1999,tony_stark:2001,thor_asgardian:2045,clint_barton:2011,dr_bruce_banner:2006}
function Booksbefore(obj)
{
    let newobj=[];
    Object.keys(obj).map((key)=>{
        if(obj[key]<2010)
        {
            newobj.push(key[0].toUpperCase()+key.slice(1))
        }
    })
    console.log(newobj)
}
Booksbefore(books);

// ----------------------------------------------------------------------------------------------------------------
// 5. URL validation.

// Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.Print a message indicating if the input matches the conditions or not.

const urltocheck="https://www.google.com/search?q=geeksforgeeks&rlz=1C1UEAD_enIN1027IN1027&oq=gee&aqs=chrome.1.69i57j0i67i131i433j0i67j0i67i433j0i67l3j46i131i199i433i465i512j0i131i433j0i512.5070j1j15&sourceid=chrome&ie=UTF-8"
function checkvalidurl(a)
{
    const reg=/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig
    const res=reg.test(a)
    console.log(res)
    if(res==true)
    {
        console.log("It's a valid URL")
    }
    else
    {
        console.log("It's not a valid URL")
    }
}
checkvalidurl(urltocheck)
// [Running] node "/config/workspace/tempCodeRunnerFile.js"
// true
// It's a valid URL

// [Done] exited with code=0 in 0.062 seconds
// ----------------------------------------------------------------------------------------------------------------

// 6. LinkedIn Profile URL Validator.

// As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are
// formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and
// end with a letter or digit. The length of the profile ID should be between 5 and 30 characters.
// The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs
// that do not follow this format or contain invalid characters. The program should provide clear output messages
// indicating whether each input is a valid LinkedIn profile URL or not.
const profileurltocheck="https://www.linkkedin.com/in/mattea-azara-shoker-7b566673"
const profileurltocheck2="https://in.linkedin.com/in/snehdip-mote-7931051b6"
function checkprofile(a)
{
    const reg=/(^((https?:\/\/)?((www|\w\w)\.)?)linkedin\.com\/)((([\w]{2,3})?)|([^\/]+\/(([\w|\d-&#?=])+\/?){1,}))$/gmi
    const res=reg.test(a)
    console.log(res)
    if(res==true)
    {
        console.log("It's a valid LinkedIn Profile URL")
    }
    else
    {
        console.log("It's not a valid LinkedIn Profile URL")
    }
}
checkprofile(profileurltocheck)
checkprofile(profileurltocheck2)
// [Running] node "/config/workspace/tempCodeRunnerFile.js"
// false
// It's not a valid LinkedIn Profile URL
// true
// It's a valid LinkedIn Profile URL

// [Done] exited with code=0 in 0.078 seconds
