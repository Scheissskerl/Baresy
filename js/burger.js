let burgerLine = document.querySelector('.header__burger');
let burgerMenu = document.querySelector('.header__burger-menu');
let burgerLink = document.querySelectorAll('.header__nav-link');

burgerLine.addEventListener('click', function () {
  burgerLine.classList.toggle('rotate');
  burgerMenu.classList.toggle('open');
});

for (link of burgerLink) {
  link.addEventListener('click', function () {
    burgerMenu.classList.toggle('open');
    burgerLine.classList.toggle('rotate');
  })
};