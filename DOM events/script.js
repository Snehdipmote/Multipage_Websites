let c1=document.getElementById("doubleclick");
c1.addEventListener("click",()=>{
    c1.innerText="Clicked";
    c1.style.backgroundColor="Yellowgreen";
    alert(
        "click event is working properly)"
      );
})
c1.addEventListener("dblclick",()=>{
    c1.innerText="Clicked twice";
    c1.style.backgroundColor="Orange";
    alert(
        "Double click event is working properly)"
      );
})

let c2=document.getElementById("mover");

c2.addEventListener("mouseover",()=>{
    alert(
        "you entered in Restricted Area 🙅 (mouse over event is working properly)"
      );
})

let c3=document.getElementById("mout");

c3.addEventListener("mouseout",()=>{
    alert("you left the safe zone 🙅 (mouse out event working properly)");
})

let c4=document.getElementById("keypress");

c4.addEventListener('keypress', function(e){
    display.innerText ="you have Pressed " + e.key
})

let c5=document.getElementById("display2");
// adding a keydown event listener to the document
// key down shows till when key is pressed
document.addEventListener("keydown", function (e) {
    c5.style.color = "red";
    c5.innerText = e.key + " is keyDown";
  });
  
// adding a keyup event listener to the document
//   keyup is shown when key is released
  document.addEventListener("keyup", function (e) {
    c5.style.color = "green";
    c5.innerText = e.key + " is keyUp";
  });

