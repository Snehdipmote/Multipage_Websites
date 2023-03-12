let a=document.getElementById("heading");
let b=document.getElementById("change");
// let c="The most affordable learning platform";
// let d="PW Skills";
function changeheading()
{
    // a.innerText=c?a.innerText=d:a.innerText=c;
    if(a.innerText=="The most affordable learning platform")
    {
        a.innerText="PW Skills";
    }
    else
    {
        a.innerText="The most affordable learning platform";
    }
}

b.addEventListener("click",changeheading);
