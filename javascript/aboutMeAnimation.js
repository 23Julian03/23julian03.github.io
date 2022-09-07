//ANIMATION
const block = document.querySelectorAll('.block'); //all circles

window.addEventListener('load', function() { //page is loading
    setTimeout(function () {  //wait 400 milliseconds
        block.forEach(item => { //each block which one circle
            let numElement = item.querySelector('.num');
            let num = parseInt(numElement.innerText); //maximum number (percentage) of the circle
            let count = 0; //counts to the maximum number
            let time = 2000 / num; //calculates the length of the code stops to get the animation duration of 2 seconds and not longer
            let circle = item.querySelector('.circle'); //circle
    
            setInterval(() => {
                if(count == num) { //stop animation
                    clearInterval();
                } else { //increase percentage label
                    count += 1;
                    numElement.innerText = count;
                }
            }, time)
    
            circle.style.strokeDashoffset = 503 - (503 * (num / 100)); //circle animation
    
            let dots = item.querySelector('.dots');
            dots.style.transform = `rotate(${360 * (num / 100)}deg)`; //dot of the circle animation
            if(num == 100) { //percentage of 100 - remove dot
                dots.style.opacity = 0;
            }
        })
    }, 400);
});