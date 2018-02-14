$(function() {

    $('.menu-acco__trigger').on('click', function(event) {
      event.preventDefault();
  
      var $this = $(this),
          item = $this.closest('.menu-acco__item');
  
      if (!item.hasClass('active')) {
        item.addClass('active')
          .siblings()
          .removeClass('active');
      }
      else {
        item.removeClass('active');
      }
    });
  
    $(document).on('click', function(event) {
      var menu = $(event.target).closest('.menu-acco'),
          items = $('.menu-acco__item');
  
      if (!menu.length) {
        items.removeClass('active');
      }
    });
  
  });
  