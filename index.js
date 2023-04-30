// alert("working!");
var randomnumber1=Math.floor(Math.random()*6)+1;//we add +1 because we were inntiially gtting the numbers from 0 to 5 so we wanted the random number upto 6 so wee did this !!

//we can concatenante and retrive the dace1-dice6 images randomly 

var randomDiceImage ="dice"+ randomnumber1 +".png"; //dice.1-dice6

var randomImageSource ="images/" +randomDiceImage; //images/dice.1-dice.6

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);


var randomnumber2=Math.floor(Math.random()*6)+1;

var randomImageSource2 ="images/dice" +randomnumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML = " Player-1 WINS !!";
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="Player-2 WINS!!";
}
else{
    document.querySelector("h1").innerHTML="GAME TIED !! "
}