

/*timer - RhymBil (youtube)*/

function timer(){
var time = 90;
var Countdown = setInterval (function() {
    --time;
    document.getElementById("countdown").innerHTML = time;
    if (time <= 0) {
    time = 0+1;}
},1000)}

timer();

/*clicker */
var click = 0;
function clickcounter() { 
    click = click +1;
    document.getElementsByClassName("card").innerHTML = click;
}


/*rotate*/
const cards = document.querySelectorAll(".card");

function rotate() {
    this.classList.toggle('rotate');
}

cards.forEach(card => card.addEventListener('click', rotate))