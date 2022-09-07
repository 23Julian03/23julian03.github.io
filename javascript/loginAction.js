function showPassword() {
    const password = document.getElementById('password');
    const visible = document.getElementById('visible');
    const notVisible = document.getElementById('notVisible');

    if(password.type == 'password') { /* password visible */
        password.type = 'text';
        
        visible.style.display = 'flex';
        notVisible.style.display = 'none';
    } else { /* password not visible */
        password.type = 'password';

        visible.style.display = 'none';
        notVisible.style.display = 'flex';
    }
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if(username.toUpperCase() == "LAMMJ" && password == "Lebens2303lauf#") { /* correct username and password */
        window.location.href = 'cv.html';
    } else { /*error - show message */
        document.getElementById('error').innerHTML = "Der Benutzername oder das Kennwort ist falsch";
    }
}