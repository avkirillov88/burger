const nav_hamburger = document.querySelector('#nav_hamburger');
const nav_list = document.querySelector('#nav__list');

(function () {
	$('#nav_hamburger').on('click', function() {
    $('.hamburger-menu-link__bars').toggleClass('animate');
    $('.nav__list').toggleClass('hamburger__view');
	})
})();