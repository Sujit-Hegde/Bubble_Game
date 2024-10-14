var timer = 60;
var score = 0;
var ran = 0;
function make_bubble() {
    var panelbottom = document.querySelector(".panelbottom");
    var a = "";
    for (let i = 0; i <= 79; i++) {
        var ran1 = Math.floor(Math.random() * 10);
        a += `<div class="bubble">${ran1}</div>`;
    }
    panelbottom.innerHTML = a;

}
function Set_timer() {
    var a = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#Timer").textContent = timer;
        }
        else {
            document.querySelector(".panelbottom").innerHTML=`<h1>Game Over <br> Your score ${score}</h1>`;
            clearInterval(a);
        }
    }, 1000)
}
function incrementScore() {
    score += 10;
    document.querySelector("#Score").textContent = score;
}
function Hit() {
    ran = Math.floor(Math.random() * 10);
    document.querySelector("#Hit").textContent = ran;
}
document.querySelector(".panelbottom").addEventListener("click", function (details) {
    var a = Number(details.target.textContent);
    if (a === ran&&timer>0) {
        incrementScore();
        make_bubble();
        Hit();
    }
})
make_bubble();
Set_timer();
Hit();