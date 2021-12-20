// Give the elements HTML.

let addMileseconds = document.querySelector("#tens");
let addSeconds = document.querySelector("#seconds");
let addMinutes = document.querySelector("#minutes");
let buttonStart = document.querySelector("#button-start");
let buttonStop = document.querySelector("#button-stop");
let buttonReset = document.querySelector("#button-reset");

let seconds = 0;
let minutes = 0;
let mileseconds = 0;
let interval;

function timer() {
    mileseconds++;  
    addMileseconds.innerHTML = mileseconds;

    if(mileseconds <= 9) {
        addMileseconds.innerHTML = "0" + mileseconds;
    }

    if(mileseconds > 99) {
        mileseconds = 0;
        seconds++;
        addSeconds.innerHTML = seconds;
    }

    if(seconds <= 9) {
        addSeconds.innerHTML = "0" + seconds;
    }

    if(seconds > 60) {
        seconds = 0;
        minutes++;
        addMinutes.innerHTML = "0" + minutes;
    }

    if(minutes <= 9) {
        addMinutes.innerHTML = "0" + minutes;
    }else {
        addMinutes.innerHTML = minutes;
    }


}

buttonStart.addEventListener("click", () => {
    interval = setInterval(() => {timer()}, 10);
});

buttonStop.addEventListener("click", () => clearInterval(interval));

buttonReset.addEventListener("click", () => {
    clearInterval(interval);
    addSeconds.innerHTML = "00";
    addMinutes.innerHTML = "00";
    addMileseconds.innerHTML = "00";
})

const scrollReveal = ScrollReveal({
    origin: 'left',
    distance: '40px',
    duration: 600,
    reset: true
})
  
scrollReveal.reveal(`.container, p, .container button`,{ interval: 100})