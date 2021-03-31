const userName = document.querySelector('#username');
const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (userName.value === '') {
    alert('Nem írtál be usernevet');
  }

  alert(userName.value);
  userName.value = '';
});
