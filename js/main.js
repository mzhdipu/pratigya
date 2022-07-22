(function ($, window, document, undefined) {
    'use strict';
	
/*---------------------------------------------*
 // for progress-bar
 ---------------------------------------------*/
$(document).ready(function(){
    var percent = 0,
        interval = 30,//it takes about 6s, interval=20 takes about 4s
        $bar = $('.transition-timer-carousel-progress-bar'),
        $crsl = $('#myCarousel');
    $('.carousel-indicators li, .carousel-control').click(function (){$bar.css({width:0.5+'%'});});
    /*line above just for showing when controls are clicked the bar goes to 0.5% to make more friendly,
     if you want when clicked set bar empty, change on width:0.5 to width:0*/
    $crsl.carousel({//initialize
        interval: false,
        pause: true
    }).on('slide.bs.carousel', function (){percent = 0;});//This event fires immediately when the bootstrap slide instance method is invoked.
    function progressBarCarousel() {
        $bar.css({width:percent+'%'});
        percent = percent +0.5;
        if (percent>=100) {
            percent=0;
            $crsl.carousel('next');
        }
    }
    var barInterval = setInterval(progressBarCarousel, interval);//set interval to progressBarCarousel function
    if (!(/Mobi/.test(navigator.userAgent))) {//tests if it isn't mobile
        $crsl.hover(function(){
                clearInterval(barInterval);
            },
            function(){
                barInterval = setInterval(progressBarCarousel, interval);
            }
        );
    }
});
	

/*---------------------------------------------*
 // dropdown menu
 ---------------------------------------------*/
	$(document).ready(function(){
		$(".dropdown").hover(
			function() {
				$('.dropdown-menu', this).stop( true, true ).slideDown("fast");
				$(this).toggleClass('open');
			},
			function() {
				$('.dropdown-menu', this).stop( true, true ).slideUp("fast");
				$(this).toggleClass('open');
			}
		);
	});




/*---------------------------------------------*
 		// home slider
 ---------------------------------------------*/
	$('.slide').carousel({
		interval: 9000,
	})



/*---------------------------------------------*
 		//  main-menu-scroll
 ---------------------------------------------*/



	jQuery(window).scroll(function () {
		var top = jQuery(document).scrollTop();
		var height = 100;
		//alert(batas);

		if (top > height) {
			jQuery('.navbar-fixed-top').addClass('menu-scroll');
		} else {
			jQuery('.navbar-fixed-top').removeClass('menu-scroll');
		}
	});

//************ Magnific Popup for see our activity

/*------------------------------------
 Video Player
 --------------------------------------*/
	$('.video-popup').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		zoom: {
			enabled: true,
		}
	});


// for gallery
	//************* Mixit Up

	$('.gallery-images').mixItUp();


	//************ Magnific Popup

	$('.galleryItem').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300,
			opener: function(element) {
				return element.find('img');
			}
		}

	});



/*owl for volunteer*/

var owlCarousel = function(){



		var owl = $('.volunteer-slider');
		owl.owlCarousel({
			items: 4,
			loop: true,
			nav: true,
			dots: true,
			autoplay:true,
			autoplayTimeout:1000,
			autoplayHoverPause:true,
			smartSpeed: 800,
			navText: [
		      "<i class='glyphicon glyphicon-arrow-left'></i>",
		      "<i class='glyphicon glyphicon-arrow-right'></i>"
	     	],
	     	responsive:{
	        0:{
	            items:1
	        },
			400:{
				items:2
			},
	        700:{
	            items:3
	        },
			900:{
				items:3
			},
	        1000:{
	            items:4
	        }
	    	}
		});


		var owl = $('.volunteer-slider');
		owl.owlCarousel({
			items: 1,
			loop: true,
			nav: true,
			dots: true,
			smartSpeed: 800,
			autoplay:true,
			autoplayTimeout:1000,
			autoplayHoverPause:true,
			autoHeight: true,
			navText: [
		      "<i class='glyphicon glyphicon-arrow-left'></i>",
		      "<i class='glyphicon glyphicon-arrow-right'></i>"
	     	]
		});

	};


/*
 FOR SPONSER SECTION
 */
	var owl1 = $(".sponser-slider");
	owl1.owlCarousel({
		items:5,
		loop:true,
		margin:10,
		autoplay:true,
		autoplayTimeout:2000,
		autoplayHoverPause:false,


		responsive:{
			0:{
				items:3
			},
			600:{
				items:4
			},
			1000:{
				items:5
			}
		}
	});


	$(function(){
		owlCarousel();
	});











	// counter up
	$('.statistic-counter, .count-number').counterUp({
		delay: 10,
		time: 2000,
	});




	/*---------------------------------------------*
            // for testimonial
     ---------------------------------------------*/
	$(document).ready(function(){
		$("#testimonial-slider").owlCarousel({
			items:1,
			itemsDesktop:[1000,1],
			itemsDesktopSmall:[979,1],
			itemsTablet:[768,1],
			pagination:false,
			navigation:true,
			navigationText:["",""],
			autoPlay:true,
		});
	});


/*---------------------------------------------*
		// for map
 ---------------------------------------------*/
	function toggleIcon(e) {
		$(e.target)
			.prev('.panel-heading')
			.find(".more-less")
			.toggleClass('glyphicon-plus glyphicon-minus');
	}
	/*$('.panel-group').on('hidden.bs.collapse', toggleIcon);
	 $('.panel-group').on('shown.bs.collapse', toggleIcon);*/





/*---------------------------------------------*
 				* WOW
 ---------------------------------------------*/

	$(function(){
		new WOW().init();
	})

	var wow = new WOW({
		mobile: false // trigger animations on mobile devices (default is true)
	});
	wow.init();



	//***************************************************************************************************
				//color changer
	//***************************************************************************************************
	$('body').prepend('<div class="theme_configs hidden visible">'+
		'<div class="body">'+
		'<div class="head_title">Style Selector</div>'+
		'<div class="title">Themes</div>'+
		'<div class="box themes">'+
		'<div class="colorswitch1 active">'+
		'<span class="color"></span>'+
		'</div>'+
		'<div class="colorswitch2">'+
		'<span class="color"></span>'+
		'</div>'+
		'<div class="colorswitch3">'+
		'<span class="color"></span>'+
		'</div>'+
		'<div class="colorswitch4">'+
		'<span class="color"></span>'+
		'</div>'+
		'<div class="colorswitch5">'+
		'<span class="color"></span>'+
		'</div>'+
		'<div class="colorswitch6">'+
		'<span class="color"></span>'+
		'</div>'+
		'<div class="colorswitch7">'+
		'<span class="color"></span>'+
		'</div>'+
		'<div class="colorswitch8">'+
		'<span class="color"></span>'+
		'</div>'+
		'<div class="colorswitch9">'+
		'<span class="color"></span>'+
		'</div>'+
		'<div class="colorswitch10">'+
		'<span class="color"></span>'+
		'</div>'+
		'</div>'+
		'</div>'+
		'<div class="fa fa-angle-right btn"></div>'+
		'</div>');

	$(".theme_configs .btn").click(function(){
		var box = $(this).parent();
		if (box.hasClass("hidden")){
			box.animate({
				"left" : "0"
			}, 300);
			box.removeClass("hidden");
			$(this).removeClass("fa-angle-right").addClass("fa-angle-left");
		}else{
			box.animate({
				"left" : "-158px"
			}, 300);
			box.addClass("hidden");
			$(this).removeClass("fa-angle-left").addClass("fa-angle-right");
		}
	});

	$(".theme_configs .box.themes > div").click(function(){
		var current_theme = $("body").attr("class");

		var selected_theme = $(this).attr("class");

		if (current_theme == selected_theme){
			return false;
		}

		if ($("body").hasClass("onepage")){
			selected_theme += " onepage";
		}

		$(".theme_configs .box.themes > div.active").removeClass("active");
		$("body").attr("class", selected_theme);
		$(this).addClass("active");

	});




	//***************************************************************************************************

		// upcoming envet page
	//***************************************************************************************************


		(function slider() {

			$("#upcoming-event-slider .active").each(function () {

				if (!$(this).is(":last-child")) {
					$(this).delay(3000)
						.fadeOut(2000, function () {
							$(this).removeClass("active")
								.next().addClass("active")
								.fadeIn();
							slider()
						});
				} else {
					$(this).delay(3000)
						.fadeOut(3000, function () {
							$(this).removeClass("active");
							$("#upcoming-event-slider div").eq(0)
								.addClass("active").fadeIn();
							slider()
						});
				}


			});

		})();

	//******************************************************************************************************
		// clock for upcoming event
	//******************************************************************************************************
	$('#clock').countdown('2018/12/18', function(event) {
		var $this = $(this).html(event.strftime(''

			+ '<span>%d </span> days '
			+ '<span>%H </span> hr '
			+ '<span>%M </span> min '
			+ '<span>%S </span> sec'));
	});



	//******************************************************************************************************
	// blood list girl number
	//******************************************************************************************************






})(jQuery, window, document);



