function login() {
    var username = document.getElementById('username').value.toLowerCase();
    var password = document.getElementById('password').value;
    var alertBox = document.getElementById('alert');

    if (username === 'orangzaibchachar' && password === '123') {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'orangzaib.html';
    } else {
        // Display the alert
        alertBox.style.display = 'block';
    }
}