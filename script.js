let cartN = 0;
const bar = document.getElementById("bar")
const close = document.getElementById("close")
const nav = document.getElementById("navbar")
const cartNo = document.getElementById("cartNo")
const cartNo1 = document.getElementById("cartNo1")

if(bar){
    bar.addEventListener("click",()=>{
nav.classList.add("active")

    })
}

if(close){
    close.addEventListener("click",()=>{
    nav.classList.remove("active")

    })
}


 var numOfCart = document.querySelectorAll(".cart").length;
  for (var i = 0; i < numOfCart; i++) {
    document.querySelectorAll(".cart")[i].addEventListener("click", ALERT);
  }
  function ALERT() {
    cartN ++;
    cartNo.innerText = cartN ;
    cartNo1.innerText = cartN ;
  }
  
