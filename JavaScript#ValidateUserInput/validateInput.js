const passwordInput = document.getElementById('password');
const sendPassword = document.getElementById('sendPassword');

passwordInput.addEventListener('input', ($event) => {
  if ($event.target.value.length >= 6 && $event.target.value.length <= 12) {
    sendPassword.removeAttribute('disabled');
  } else {
    sendPassword.setAttribute('disabled', true);
  }
});
