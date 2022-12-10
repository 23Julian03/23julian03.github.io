//variables
const nextEl = document.querySelector('.next'); //next-button
const prevEl = document.querySelector('.prev'); //previous-button

const imageContainerEl = document.querySelector('.image-container');
const imgsEl = imageContainerEl.querySelectorAll('img'); //all images
const sLabel = document.getElementById('softwarename'); //software name label

let currentImg = 1;
let timeout;

//available software
const software = [
    "Job Scheduler",
    "Evil One",
    "Random Generator",
    "Simon Click",
    "Tower Of Hanoi",
    "Shutdown Manager",
    "OneSound-MP",
    "File Manager",
    "Vacuum Cleaner Simulator",
    "War And Peace",
    "Pong",
    "Rock Paper Scissors",
    "Yahtzee",
    "Destroy The Numbers",
    "Train Your Brain",
    "Tic-Tac-Toe",
    "Game Of Life",
    "Clock",
    "Counter"
];

//next picture
nextEl.addEventListener('click', () => {
    currentImg++;
    clearTimeout(timeout);
    updateImg();
});

//previous picture
prevEl.addEventListener('click', () => {
    currentImg--;
    clearTimeout(timeout);
    updateImg();
});

//update image
updateImg();

function updateImg() {
    if(currentImg > imgsEl.length) {
        currentImg = 1;
    } else if(currentImg < 1) {
        currentImg = imgsEl.length;
    }

    imageContainerEl.style.transform = `translateX(-${(currentImg-1) * imageContainerEl.offsetWidth}px)`; //animation
    sLabel.innerHTML = software[currentImg-1]; //software name label

    timeout = setTimeout(() => { //every 3 seconds a new image
        currentImg++;
        updateImg();
    }, 3000);
}