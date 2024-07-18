
 window.addEventListener("scroll", scrollment);


 function scrollment(){
   document.getElementById("window").style.backgroundColor = "black"
   document.getElementById("window").style.position = "fixed"
   document.getElementById('bigNavbar').style.backgroundColor = "black"
  //  document.getElementById("bigNavbar").style.position = "fixed"

 }


//    

let funMenu = document.getElementById('menu');
let dropDown = document.getElementById('drop-down')
let navbar = document.getElementById('window')

funMenu.addEventListener("click", ()=>{
  dropDown.classList.toggle("hidden")
  console.log('hello problem')
  navbar.style.backgroundColor = "black"
})

