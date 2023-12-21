const passwordInput = document.getElementById('password');
const iconEye = document.querySelector('.bi-eye-fill');

iconEye.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    iconEye.classList.add('bi-eye-slash');
  } else {
    passwordInput.type = 'password';
    iconEye.classList.remove('bi-eye-slash');
  }
});