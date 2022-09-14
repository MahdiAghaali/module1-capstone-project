const hambergerBtn = document.getElementById('hambergerBtn');
const menuContainer = document.getElementById('menuContainer');
const menu = document.getElementById('menu');
const btnCloseMenu = document.getElementById('closeMobileMenu');

function openMobileMenu() {
  menuContainer.classList.add('open');
  menu.classList.add('open');
  hambergerBtn.classList.add('hidden');
}

function closeMobileMenu() {
  menuContainer.classList.remove('open');
  menu.classList.remove('open');
  hambergerBtn.classList.remove('hidden');
}

hambergerBtn.addEventListener('click', openMobileMenu);
btnCloseMenu.addEventListener('click', closeMobileMenu);
