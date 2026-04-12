const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

window.addEventListener('resize', () =>
{
    if (window.innerWidth >= 768) {
        menu.classList.add('hidden');
    }
});