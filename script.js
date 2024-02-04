var score = 0;
var hitrn=0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function makeBubble() {
    var clutter = "";

    for (var i = 1; i <= 108; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;

    }
    document.querySelector("#pbtm").innerHTML = clutter;
}
var timer = 60;
function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timervalue").textContent = timer;
        }
        else {
           
            clearInterval(timerint);
            document.querySelector("#main").innerHTML=`<h1>GAME OVER</h1>`;
        }

    }, 1000)
}
function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var numclick= Number(dets.target.textContent);
    if(numclick==hitrn)
    {
        increaseScore();
        makeBubble();
        getNewHit();
        
    }
})
runTimer();
makeBubble();
getNewHit();
