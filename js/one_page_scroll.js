// One Page Scroll
$(function() {

    $('#fullpage').fullpage({
      verticalCentered: false,
      onLeave: function(index, nextIndex, direction) {
        $('.fixed__item').eq(nextIndex - 1).addClass('active')
          .siblings()
          .removeClass('active');
      }
    });
  
    $('.arrow__scroll').on('click', function(e) {
      e.preventDefault();
      $.fn.fullpage.moveSectionDown();
    });
  
    $('.fixed__item-link, .onepage').on('click', function(e) {
      e.preventDefault();
  
      var $this = $(this),
          href = parseInt($this.attr('href'));
  
      $this.closest('li').addClass('active')
        .siblings()
        .removeClass('active');
  
      $.fn.fullpage.moveTo(href);
    });
  
  });