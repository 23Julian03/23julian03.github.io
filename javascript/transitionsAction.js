window.onload = () => {
    const transition_el = document.querySelector('.transition'); //div-container
    const anchors = document.getElementById('navbarContent').querySelectorAll('a'); //links

    setTimeout(() => { //close animation
        transition_el.classList.remove('is-active');
    }, 400);
    
    for(let i = 0; i < anchors.length; i++) { //find the clicked link
        const anchor = anchors[i];

        anchor.addEventListener('click', e => { //the clicked link 
            e.preventDefault();
            let target = e.target.href;
            
            if(window.location.href != target) { //the page of the link is not opened yet
                transition_el.classList.add('is-active');

                setTimeout(() => { //open animation
                    window.location.href = target;
                }, 400);
            }
        });
    }
}