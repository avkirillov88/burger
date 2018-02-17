// Fancybox
$(function() {
    $(".fancybox").fancybox({
      width: 460,
      height: 'auto',
      padding: 0,
      fitToView: true,
      autoSize: false,
      closeBtn: false
    });
  
    $('.review__pop-close').on('click', function(e){
      e.preventDefault();
      $.fancybox.close();
    });
  });