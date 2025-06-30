var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomDiceImage);
var randomNumber2=(Math.floor(Math.random()*6)+1);
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src" , randomDiceImage2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!"
    showCelebration();
}
else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw!"
}
else{
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩"
    showCelebration();
}
function showCelebration() {
  var celeb = document.getElementById("celebration");
  celeb.style.display = "block";
  celeb.classList.add("animate");

  // Remove animation after it's done so it can be triggered again on next refresh
  setTimeout(function() {
    celeb.classList.remove("animate");
    celeb.style.display = "none";
  }, 1000);
}
