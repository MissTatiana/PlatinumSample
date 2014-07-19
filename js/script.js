/** 
 * Platinum Sample
 * Image Copy: Full Sail Univerist 
 * Code: Tatiana Kerck
 *
 *
 * Drop down and carousel functionality
**/

jQuery(document).ready( function ($) {


//Dropdown
$('.dropdown dt a').click(function() {
    $('.dropdown dd ul').toggle();
});

$('.dropdown dd ul li a').click(function() {
    var text = $(this).html();
    $('.dropdown dt a span').html(text);
    $('.dropdown dd ul').hide();
}); 

$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (! $clicked.parents().hasClass('dropdown'))
        $('.dropdown dd ul').hide();
});


//Carousel
$('.banner').unslider({
	speed: 500
});

var unslider = $('.banner').unslider();

$('#prev').click(function(e) {
	e.preventDefault();

	unslider.data('unslider').prev()
});

$('#next').click(function(e) {
	e.preventDefault();

	unslider.data('unslider').next()
})






});//end document