//search field animation
const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
icon.onclick = function() {
    search.classList.toggle('active');
}

//search
function doSearch() {
    const searchField = document.getElementById('mySearch');
    const input = searchField.value.toLowerCase();

    const allItems = document.getElementsByClassName('item');
    const selectedItems = document.getElementById('content').querySelectorAll('[id*="' + input +'"]');

    if(input.length == 0) { //all visible
        for (i = 0; i < allItems.length; i++) {
            allItems[i].style.display = 'block';
        }
    } else {
        for (i = 0; i < allItems.length; i++) { //remove all
            allItems[i].style.display = 'none';
        }

        for (i = 0; i < selectedItems.length; i++) { //show selection
            selectedItems[i].style.display = 'block';
        }
    }
}

//filter - button selection
const btns = document.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("activated");
      
      current[0].classList.remove("activated");
      this.classList.add('activated');
    });
}

//filter
function filterSelection(itemType) {
    const allItems = document.getElementsByClassName('item');
    const selectedItems = document.getElementsByClassName(itemType);

    if(itemType.length == 0) { //all visible
        for (i = 0; i < allItems.length; i++) {
            allItems[i].style.display = 'block';
        }
    } else {
        for (i = 0; i < allItems.length; i++) { //remove all
            allItems[i].style.display = 'none';
        }

        for (i = 0; i < selectedItems.length; i++) { //show selection
            selectedItems[i].style.display = 'block';
        }
    }
}