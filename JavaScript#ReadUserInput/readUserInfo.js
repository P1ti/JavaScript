const username = document.getElementById('first-name');
const password = document.getElementById('last-name');
const loginBtn = document.getElementById('loginBtn');
const displayInfosUsername = document.getElementById('first-name-result');
const displayInfosPassword = document.getElementById('last-name-result');

loginBtn.addEventListener('click', ($event) => {
  $event.preventDefault();
  displayInfosUsername.textContent = username.value;
  displayInfosPassword.textContent = password.value;
});
