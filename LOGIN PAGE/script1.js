// script1.js

document.getElementById('togglePassword').addEventListener('click', function () {
  const passwordInput = document.getElementById('password');
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);

  // Toggle icon (optional)
  this.textContent = type === 'password' ? '👁️' : '🙈';
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Dummy authentication
  if (email === 'admin@shopease.com' && password === '1234') {
    alert('Login successful!');
    // Redirect to dashboard or home
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid email or password.');
  }
});
