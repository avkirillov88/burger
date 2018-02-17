$(function() {

    $('#fullpage').fullpage({
      verticalCentered: false,
      onLeave: function(index, nextIndex, direction) {
        $('.fixed__item').eq(nextIndex - 1).addClass('active')
          .siblings()
          .removeClass('active');
        }
    });

    $('#nav_hamburger').click(function(){
      $.fn.fullpage.setKeyboardScrolling(false);
      $.fn.fullpage.setAllowScrolling(false);
    });
    
    $('.fixed__item-link, .onepage').on('click', function(e) {
        e.preventDefault();
  
        var $this = $(this),
            href = parseInt($this.attr('href'));
  
        $this.closest('li').addClass('active')
          .siblings()
          .removeClass('active');
  
        $.fn.fullpage.moveTo(href);

        $(".nav__list").removeClass('hamburger__view');
        $(".hamburger-menu-link__bars").removeClass('animate');

        $.fn.fullpage.setKeyboardScrolling(true);
        $.fn.fullpage.setAllowScrolling(true);
    });
  
    $('.arrow__scroll').on('click', function(e) {
      e.preventDefault();
      $.fn.fullpage.moveSectionDown();
    });

    $('.hamburger__view').on('event',function(e) {
      e.preventDefault();
      
    });
  });