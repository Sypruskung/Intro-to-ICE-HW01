$(document).ready(function(){

});

$("#navbar li a").click(function(e) {

	e.preventDefault();
     
    var goto = $(this).attr('href');
 
    $('html, body').animate({
        scrollTop: $(goto).offset().top
    }, 500);

    var $prevLi = $('#navbar ul li.active');
    $(this).parent('li').addClass('active');
    $prevLi.removeClass('active');

});

$('.up-button').click(function() {

	var $thisLi = $('#navbar ul li.active');
	var prev = $thisLi.prev().find('a').attr('href');
	
	$('html, body').animate({
		scrollTop: $(prev).offset().top
	}, 500);

    $thisLi.prev().addClass('active');
    $thisLi.removeClass('active');

});

$('.down-button').click(function() {

	var $thisLi = $('#navbar ul li.active');
	var next = $thisLi.next().find('a').attr('href');

	$('html, body').animate({
		scrollTop: $(next).offset().top
	}, 500);

	$thisLi.next().addClass('active');
    $thisLi.removeClass('active');

});

// if ($('#aboutme').visible(false)) {

// 	var $prevLi = $('#navbar ul li.active');
// 	var $gotoLi = $("[href='#aboutme']").parent('li');

// 	$gotoLi.addClass('active');
// 	$prevLi.removeClass('active');

// } else {
//     // The element is NOT visible, do something else
// }

$.fn.is_on_screen = function(){
    var win = $(window);
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
 
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
 
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};

var check_if_current_ele = function(element, button) {

	if($element.is_on_screen()) {
		var $prevLi = $('#navbar ul li.active');
    	$button.addClass('active');
    	$prevLi.removeClass('active');
	}

};

var update_current_ele = function() {
	check_if_current_ele($('#friendlist'), $("[href='#friends']").parent('li'));
};

// if( $('.target').length > 0 ) { // if target element exists in DOM
// 	if( $('.target').is_on_screen() ) { // if target element is visible on screen after DOM loaded
//         $('.log').html('<div class="alert alert-success">target element is visible on screen</div>'); // log info		
// 	} else {
//         $('.log').html('<div class="alert">target element is not visible on screen</div>'); // log info
// 	}
// }
$(window).scroll(function(){ // bind window scroll event
	update_current_ele();
});