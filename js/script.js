$(document).ready(function(){
    // init Isotope
 var $grid = $('.project-item').isotope({
     // options
   });
   // filter items on button click
   $('.project-menu').on( 'click', 'li', function() {
     var filterValue = $(this).attr('data-filter');
     $grid.isotope({ filter: filterValue });
   });
  }); 


    // slick slider
	$('.autoplay').slick({
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 500,
		arrows: false,
	});