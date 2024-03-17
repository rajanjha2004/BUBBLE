function makeBubbkle() {
    var clutter = "";

    for (var i = 1; i<=160; i++){

        rn = Math.floor(Math.random()*10)
        clutter+=`<div class="bubble">${rn}</div>`
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

var timer=60;
function runTimer() {
    var timerint= setInterval(function () {
        if(timer > 0) {
            timer--;
            document.querySelector("#timevalue").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER</h1>`;
        }    
    }, 1000);
    
}

var hitrn;
function runHit() {
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent=hitrn;
    
}

score=0;
function runScore(){
    score+=10;
    document.querySelector("#scorevalue").textContent=score;
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
    var clicked=(Number(details.target.textContent));
    if (hitrn==clicked){
        runScore();
        makeBubbkle()
        runHit()

    }
});

makeBubbkle();
runTimer();
runHit();
