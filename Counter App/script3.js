let c1=document.getElementById("count1");
let c2=document.getElementById("count2");
let c3=document.getElementById("count3");
let c4=document.getElementById("text");
c1.addEventListener("click",() =>
{
    const count=Number(c4.innerText);
    if(count>0)
    {
        c4.innerText=count-1;
    }
    else 
    {
        alert("Negative value not allowed");
    }
});
c2.addEventListener("click",() =>
{
    const count=Number(c4.innerText);
    c4.innerText=count+1;
});
function reset()
{
    c4.innerText=0;
};
c3.addEventListener("click",reset)

