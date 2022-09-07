const toggle_button = document.querySelector('.toggle_button');
const content = document.getElementById('content');

toggle_button.addEventListener('click', function() { //open-menu-button is clicked - show animation
	this.classList.toggle('is-active');

	//checks if navbar opened
	if(toggle_button.classList.value == "toggle_button is-active") {
		content.style.zIndex = -1; //sets content to the background
	} else {
		content.style.zIndex = 0; //sets content to the foreground
	}
});