let startBtn = document.getElementById("startBtn")
let pauseBtn = document.getElementById("pauseBtn")
let resetBtn = document.getElementById("resetBtn")
let time = document.getElementById("time")

let timer;
let currrentTime = 0;
let isRuning = false;

startBtn.onclick = () => {
    if (isRuning) {
        return
    }
    timer = setInterval(() => {
        time.innerHTML = (currrentTime += 1)
    }, 100)
    isRuning = true
}

pauseBtn.onclick = () => {
    isRuning = false
    clearInterval(timer)
}

resetBtn.onclick = () => {
    isRuning = false
    currrentTime = 0
    clearInterval(timer)
    time.innerHTML = 0
}