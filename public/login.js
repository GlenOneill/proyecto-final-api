const loginForm = document.getElementById('login-form');
const message = document.getElementById('message');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Evita que la página se recargue

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            
            localStorage.setItem('token', data.token);
            message.style.color = "green";
            message.textContent = "¡Login exitoso! Redirigiendo...";
            
            setTimeout(() => {
                window.location.href = 'tasks.html';
            }, 1500);
        } else {
            message.style.color = "red";
            message.textContent = data.message || "Error al iniciar sesión";
        }
    } catch (error) {
        message.style.color = "red";
        message.textContent = "No se pudo conectar con el servidor.";
    }
});