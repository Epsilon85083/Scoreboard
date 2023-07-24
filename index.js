let homeScore = document.getElementById("home-score")
let awayScore = document.getElementById("away-score")
let homeHolder = document.getElementById("home-holder")
let awayHolder = document.getElementById("away-holder")
let homeTotal = 0;
let awayTotal = 0;

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

function away1Point() {
    awayTotal += 1
    awayScore.textContent = awayTotal
}

function away2Point() {
    awayTotal += 2
    awayScore.textContent = awayTotal
}

function away3Point() {
    awayTotal += 3
    awayScore.textContent = awayTotal
}

function newGame() {
    homeScore.textContent = 0;
    awayScore.textContent = 0;
    homeHolder.style.backgroundColor = "rgba(8, 0, 1, 1)"
    awayHolder.style.backgroundColor = "rgba(8, 0, 1, 1)"
}

function leader() {
   if(awayTotal > homeTotal) {
        homeHolder.style.backgroundColor = "rgba(8, 0, 1, 1)"
        awayHolder.style.background = "rgba(252, 211, 77, 1)"
    }
    else if (homeTotal > awayTotal) {
            homeHolder.style.backgroundColor = "rgba(252, 211, 77, 1)"
            awayHolder.style.backgroundColor = "rgba(8, 0, 1, 1)"
        }
    else {
        homeHolder.style.backgroundColor = "rgba(8, 0, 1, 1)"
        awayHolder.style.backgroundColor = "rgba(8, 0, 1, 1)"
    }
}