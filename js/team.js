$(function() {

    $('.team__link').on('click', function(e) {
      e.preventDefault();
  
      var $this = $(this),
          item = $this.closest('.team__item'),
          container = $this.closest('.team__accordeon'),
          items = container.find('.team__item'),
          content = item.find('.team__desc'),
          otherContent = container.find('.team__desc'),
          contentHeight = content.find('.team__desc-wrap').outerHeight();
  
      if (item.hasClass('team__item-active')) {
        item.removeClass('team__item-active');
        content.height(0);
      }
      else {
        item.addClass('team__item-active')
          .siblings()
          .removeClass('team__item-active');
        otherContent.height(0);
        content.height(contentHeight);
      }
    });
  
  });