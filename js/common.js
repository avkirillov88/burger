// Ajax форма
$(function() {
  $('#phone').inputmask({alias: "numeric"});
});

$(function() {
  $('#house-mask').inputmask({alias: "numeric"});
});

$(function() {

  $('.form').each(function(){
    var form = $(this),
        btn = form.find('.form-button-send');
    
    form.find('.form__input-required').addClass('empty__field');
    
    function checkInput(){
      form.find('.form__input-required').each(function(){
        if($(this).val() != ''){
          $(this).removeClass('empty__field');
        } else {
          $(this).addClass('empty__field');
        }
      });
    }
    
    function lightEmpty(){
      form.find('.empty__field');
      setTimeout(function(){
        form.find('.empty__field').removeAttr('style');
      });
    }
    
    setInterval(function(){
      checkInput();
      var sizeEmpty = form.find('.empty__field').size();
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled')){
          return false
        } else {
          btn.addClass('disabled')
        }
      } else {
        btn.removeClass('disabled')
      }
    },500);

    btn.click(function(){
      if($(this).hasClass('disabled')){
        lightEmpty();
        return false
      }
    });
    
  });
  
})

$('#order-form').on('submit', function(event) {
  event.preventDefault();

  var form = $(this);
            formData = form.serialize();
            url = form.attr('action'),
            type = form.attr('method');
  
        $.ajax({
            url: 'order.php',
            type: 'post',
            data: formData
    })

    .done(function(data) {
  
      var popup = data.status ? '#order-success' : '#order-error';
  
      $.fancybox.open({href: popup}, {
        width: 200,
        height: 'auto',
        padding: 0,
        fitToView: false,
        autoSize: false,
        closeBtn: false,
        afterClose: function() {
        form.trigger('reset');
        }
      });
    });
  
    $('.order__send-close').on('click', function(event) {
      event.preventDefault();
      $.fancybox.close();
    });

});