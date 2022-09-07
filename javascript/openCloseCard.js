//open / close description of the selected item
function openClose(idTag) {
    const item = document.getElementById(idTag);
    
    if(item.classList.contains('is-active')) {
        item.classList.remove('is-active');
    } else {
        item.classList.add('is-active');
    }
}