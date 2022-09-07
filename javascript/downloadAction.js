//download button animation
function animation(idTag) {
    const dbtn = document.getElementById(idTag);
    dbtn.classList.add('is-activated');

    setTimeout(() => { //animation stop
        dbtn.classList.remove('is-activated');
        showPopup();
    }, 9500);
}

//show pop-up
function showPopup() {
    const popup = document.getElementsByClassName('popup-container')[0];
    const card = document.getElementsByClassName('card')[1];

    card.classList.add('is-activated');
    popup.classList.add('is-activated');
   
    setTimeout(function() { //close pop-up
        card.classList.remove('is-activated');
        popup.classList.remove('is-activated');
    }, 3000);
}