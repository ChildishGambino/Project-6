var playerX = 250;
document.addEventListener("keydown", function(e) {
  if(e.keyCode == 37){
    playerX -=15;
 document.getElementById("player").setAttribute("x", playerX)

  }
  else if (e.keyCode == 39){
        playerX +=15;
 document.getElementById("player").setAttribute("x", playerX)
  }
})
