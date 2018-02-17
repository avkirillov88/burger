const nav_hamburger = document.querySelector('#nav_hamburger');
var active = $('.nav_hamburger');

(function () {
	$('#nav_hamburger').on('click', function() {
        $('.hamburger-menu-link__bars').toggleClass('animate');
        $('.nav__list').toggleClass('hamburger__view');
        $('.arrow__scroll').toggleClass('arrow__scroll--none');
        $('.nav_hamburger').toggleClass('active');

        if (active.hasClass('active')){
            $.fn.fullpage.setKeyboardScrolling(false);
            $.fn.fullpage.setAllowScrolling(false);
            }else{
                $.fn.fullpage.setKeyboardScrolling(true);
                $.fn.fullpage.setAllowScrolling(true);
            }
        })  
})();