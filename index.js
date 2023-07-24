let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeHolder = document.getElementById("home-holder")
let guestHolder = document.getElementById("guest-holder")
let homeTotal = 0;
let guestTotal = 0;

function home1Point() {
    homeTotal += 1
    homeScore.textContent = homeTotal
}

function home2Point() {
    homeTotal += 2
    homeScore.textContent = homeTotal
}

function home3Point() {
    homeTotal += 3
    homeScore.textContent = homeTotal
}

function guest1Point() {
    guestTotal += 1
    guestScore.textContent = guestTotal
}

function guest2Point() {
    guestTotal += 2
    guestScore.textContent = guestTotal
}

function guest3Point() {
    guestTotal += 3
    guestScore.textContent = guestTotal
}

function newGame() {
    homeScore.textContent = 0;
    guestScore.textContent = 0;
    homeHolder.style.backgroundColor = "rgba(8, 0, 1, 1)"
    guestHolder.style.backgroundColor = "rgba(8, 0, 1, 1)"
}

function leader() {
   if(guestTotal > homeTotal) {
        homeHolder.style.backgroundColor = "rgba(8, 0, 1, 1)"
        guestHolder.style.background = "rgba(252, 211, 77, 1)"
    }
    else if (homeTotal > guestTotal) {
            homeHolder.style.backgroundColor = "rgba(252, 211, 77, 1)"
            guestHolder.style.backgroundColor = "rgba(8, 0, 1, 1)"
        }
    else {
        homeHolder.style.backgroundColor = "rgba(8, 0, 1, 1)"
        guestHolder.style.backgroundColor = "rgba(8, 0, 1, 1)"
    }
}