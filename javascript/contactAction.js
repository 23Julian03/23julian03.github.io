//count the letters in the MESSAGE-text field
const textarea = document.querySelector('textarea');
const count = document.querySelector('.count');

function countLetters() {
    const textLength = textarea.value.length;
    count.innerText = `${textLength}` + " / 260";
}

//open mail-program of the user
function tryToSend() {
    //values of all text fields
    const name = document.getElementById('name').value; //header
    const subject = document.getElementById('subject').value;
    const softwareName = document.getElementById('softwareName').value;
    const softwareVersion = document.getElementById('softwareVersion').value; //header
    const message = document.getElementById('message').value; //body
                
    if(name.length > 0 && subject.length > 0 && softwareName.length > 0 && softwareVersion.length > 0 && message.length > 0) { //no empty text field
        const emailSubject = name + ": " + subject + " - " + softwareName + " - " + softwareVersion; //header
    
        window.open('mailto:help.julian.lamm@gmail.com?subject=' + emailSubject + '&body=' + message); //try to open mail program (pop-up)
    }
}