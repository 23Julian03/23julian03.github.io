//BACKGROUND ANIMATION
function rain() {
    let amount = 70; //number of drops
    let body = document.getElementById('background');
    let i = 0;

    while(i < amount) { //creates the drops
        let drop = document.createElement('i');
        let size = Math.random() * 4;
        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -20;
        let duration = Math.random() * 7;

        drop.style.width = 0.2 + size + 'px';
        drop.style.left = posX + 'px';
        drop.style.animationDelay = delay + 's';
        drop.style.animationDuration = 1 + duration + 's';
        
        body.appendChild(drop);
        i++;
    }
}

rain();