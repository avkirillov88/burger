// Slider
$(function() {

	var moveSlide = function (container, slideNum) {
		var items = container.find('.burger__item'),
				activeSlide = items.filter('.active'),
				reqItem = items.eq(slideNum),
				reqIndex = reqItem.index(),
				list = container.find('.burger__list'),
				duration = 700;

			if (reqItem.length) {
				list.animate({
					'left' : -reqIndex * 100 + '%'
				}, duration, function () {
					 activeSlide.removeClass('active');
					 reqItem.addClass('active');
				});
			}		
	}

		$('.arrow__nav').on('click', function(e){
			e.preventDefault();

			var $this = $(this),
					container = $this.closest('.burger'),
					items = container.find('.burger__item'),
					activeItem = items.filter('.active'),
					nextItem = activeItem.next();
					prevItem = activeItem.prev();

					if ($this.hasClass('arrow__right')) {

						if (nextItem.length) {
							moveSlide(container, nextItem.index());
						} else {
							moveSlide(container, items.first().index());
						}
						
					}

					if ($this.hasClass('arrow__left')) {
						moveSlide(container, prevItem.index());
					}
					
	});
});