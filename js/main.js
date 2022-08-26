$(".slider").owlCarousel({
  items: 1,
  loop: true,
  nav: true,
  margin: 30,
  dots: true,
  autoplay: true,
  autoplayTimeout: 4000,
  smartSpeed: 1150,
  autoplayHoverPause: true,
});

$(".social__slider").owlCarousel({
  items: 2,
  loop: true,
  margin: 0,
  dots: true,
  autoplay: true,
  autoplayTimeout: 2500,
  smartSpeed: 1150,
  autoplayHoverPause: true,
  responsive : {
    // breakpoint from 0 up
    0 : {
      items: 1,
      margin: 30,
    },
    // breakpoint from 992 up
    992 : {
      items: 2,
    }
}
});

(function ($) {
  $(function () {
    $("ul.catalog__tabs").on("click", "li:not(.catalog__tab_active)", function () {
      $(this)
        .addClass("catalog__tab_active")
        .siblings()
        .removeClass("catalog__tab_active")
        .closest("section.catalog")
        .find("div.catalog__content")
        .removeClass("catalog__content_active")
        .eq($(this).index())
        .addClass("catalog__content_active");
    });
  });
})(jQuery);


$(document).on('click', '.discount__close_btn', () => {
  $('.discount').css({
   'display': `none`
  }); 
});

$(document).ready(function () {
  $(".burger__menu, .burger_link").click(function (event) {
    $(".burger__menu, nav").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

$(function() {
	
// DISCOUNT
	$(".mob__title").on("click", function(e) {

		e.preventDefault();
		var $this = $(this);
		if (!$this.hasClass("active")) {
			$(".mob__content").slideUp(10);
			$(".mob__title").removeClass("active");
			$(".mob__title-text").css("display","none");
			$(".mob__title").css("justify-content","center");
		}
		$this.toggleClass("active");
		$this.next().slideToggle();
	});

  $(".close").on("click", function(e) {
			$(".discount").css("display","none");
			$(".modal").css("display","none");
	});

  $(".button2").on("click", function(e) {
    $(".discount").css("display","none");
    $(".modal").css("display","block");
});

});


