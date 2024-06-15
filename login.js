document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        // Retrieve username and password from form inputs
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const messageElement = document.getElementById("message");

        try {
            const response = await fetch('http://localhost:3000/user-api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const result = await response.json();

            if (response.ok) {
                showMessage(result.message, 'successful login');
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 2000);
            } else {
                showMessage(result.message, 'error');
            }
        } catch (error) {
            console.error('Error:', error);
            showMessage('An error occurred during login. Please try again.', 'error');
        }
    });

    function showMessage(message, type) {
        const messageElement = document.getElementById("message");
        messageElement.textContent = message;
        messageElement.className = `message ${type}`;
        messageElement.style.display = 'block';
    }
});
