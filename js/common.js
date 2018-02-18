// Ajax форма
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