const nav_hamburger = document.querySelector('#nav_hamburger');

(function () {
	$('#nav_hamburger').on('click', function() {
    $('.hamburger-menu-link__bars').toggleClass('animate');
    $('.nav__list').toggleClass('hamburger__view');
    $('.arrow__scroll').toggleClass('arrow__scroll--none');
    })
    
})();