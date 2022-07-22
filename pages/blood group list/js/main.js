/*/ for DropDown menu

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
});*/

// for carousel Time Control

$('.carousel').carousel({
  interval: 2000
})

// for Scroll Animation (wow.js)

$(function(){
	new WOW().init();
})


