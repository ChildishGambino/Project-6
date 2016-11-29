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
  if (playerX > foodX && playerX < foodX + 80 && playerY > foodY && playerY < foodY + 80){
   console.log("hello")
  }


})

var food1 = document.getElementById("food1")


var food2 = document.getElementById("food2")

foodX = Number(document.getElementById("food1").getAttribute("x"))
foodY = Number(document.getElementById("food1").getAttribute("y"))

foodX = Number(document.getElementById("food2").getAttribute("x"))
foodY = Number(document.getElementById("food2").getAttribute("y"))
