const icon__bar = document.querySelector('.icon__bar');
const menu = document.querySelector('.menu__links');

icon__bar.addEventListener('click', function() {
	menu.classList.toggle('move');
	icon__bar.classList.toggle('move__bars');
});