const togglePasswordButton = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
const passwordToggleIcon = document.getElementById('passwordToggleIcon');

togglePasswordButton.addEventListener('click', function () {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    passwordToggleIcon.classList.remove('bi-eye-fill');
    passwordToggleIcon.classList.add('bi-eye-slash-fill');
  } else {
    passwordInput.type = 'password';
    passwordToggleIcon.classList.remove('bi-eye-slash-fill');
    passwordToggleIcon.classList.add('bi-eye-fill');
  }
});