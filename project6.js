var BatX = 250;
document.addEventListener("keydown", function(e) {
  if(e.keyCode == 37){
    BatX -=15;
 document.getElementById("bat").setAttribute("x", BatX)

  }
  else if(e.keyCode == 39){
        BatX +=15;
 document.getElementById("bat").setAttribute("x", BatX)
  }
})
