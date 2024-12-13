let text = document.querySelector('.hero__specialOffer-description');
let btn = document.querySelector('.hero__specialOffer-btn');

btn.addEventListener('click', function () {
    text.classList.toggle('text-open')
    if (text.classList.contains('text-open')) {
        btn.textContent = 'Hidden';
    } else {
        btn.textContent = 'Know more';
    }
});