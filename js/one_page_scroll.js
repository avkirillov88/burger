$(function() {

    $('#fullpage').fullpage({
      verticalCentered: false,
      onLeave: function(index, nextIndex, direction) {
        $('.fixed__item').eq(nextIndex - 1).addClass('active')
          .siblings()
          .removeClass('active');

          if (nav_list.classList.contains('hamburger__view')) {
              e.preventDefault();
              $.fn.fullpage.setKeyboardScrolling(false);
              $.fn.fullpage.setAllowScrolling(false);
          }
        }
    });

    $('.fixed__item-link, .onepage').on('click', function(e) {
      e.preventDefault();
  
      var $this = $(this),
          href = parseInt($this.attr('href'));
  
      $this.closest('li').addClass('active')
        .siblings()
        .removeClass('active');

      $(".nav__list").removeClass('hamburger__view');
  
      $.fn.fullpage.moveTo(href);
    });
  
    $('.arrow__scroll').on('click', function(e) {
      e.preventDefault();
      $.fn.fullpage.moveSectionDown();
    });

    $('.hamburger__view').on('event',function(e) {
      e.preventDefault();
      
    });

  });