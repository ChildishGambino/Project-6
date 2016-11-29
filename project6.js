var playerX = 250;
var playerY = 250;
document.addEventListener("keydown", function(e) {
  if(e.keyCode == 37){
    playerX -=15;
 document.getElementById("player").setAttribute("x", playerX)

  }
  else if (e.keyCode == 39){
        playerX +=15;
 document.getElementById("player").setAttribute("x", playerX)


  }

  else if (e.keyCode == 40){
        playerY +=15;
  document.getElementById("player").setAttribute("y", playerY)


  }

  else if (e.keyCode == 38){
        playerY -=15;
 document.getElementById("player").setAttribute("y", playerY)


  }


})

var food1 = document.getElementById("food1")

foodX = Number(food1.getAttribute("x"))
foodY = Number(food1.getAttribute("y"))
