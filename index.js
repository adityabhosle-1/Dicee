var randomVariable1 = Math.floor(Math.random()*6)+1;

document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice"+randomVariable1+".png")

var randomVariable2 = Math.floor(Math.random()*6)+1;

document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice"+randomVariable2+".png")

if (randomVariable1 > randomVariable2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
}
else if (randomVariable2 > randomVariable1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
}
else{
    document.querySelector("h1").innerHTML = "Draw"
}

