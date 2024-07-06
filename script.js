const toggleBtn = document.querySelector('.toggle-btn');
const navMenu = document.querySelector('.nav-menu');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
  navMenu.classList.toggle('active');
});