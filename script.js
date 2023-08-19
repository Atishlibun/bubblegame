var timer = 60;
var score = 0;
var hitrn = 0;

function incScore(){
    score+=10;
    document.querySelector("#scoreVal").textContent = score; 
}

function getNewHit(){
     hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitVal").textContent = hitrn;
}

function bubblemaking(){
    var clutter = "";
for (let i=1; i<=220; i++){

    var rn=Math.floor(Math.random()*10);
   clutter +=`<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML=clutter;
}
function runTime(){
   var timerInt = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over </h1>`;
        }
    }, 1000)
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.textContent);
    if (clickedNum === hitrn){
        incScore();
        bubblemaking();
        getNewHit();

    }
})

runTime();
bubblemaking();
getNewHit();