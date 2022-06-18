let startBtn = document.getElementById("startBtn")
let pauseBtn = document.getElementById("pauseBtn")
let resetBtn = document.getElementById("resetBtn")
let time = document.getElementById("time")

let timer;
let currrentTime = 0;

startBtn.onclick = () => {
    timer = setInterval(() => {
        time.innerHTML = (currrentTime += 1)
    }, 1000)
}

pauseBtn.onclick = () => {
    clearInterval(timer)
}

resetBtn.onclick = () => {
    currrentTime = 0
    clearInterval(timer)
    time.innerHTML = 0
}