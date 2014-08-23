$(document).ready(function(){

	updatecurrent();

});

$("#navbar li a").click(function(e) {

	e.preventDefault();
     
    var goto = $(this).attr('href');
 
    gotoelement(goto);

    updatecurrent();

});

// $('.up-button').click(function() {

// 	pageup();

// });

// $('.down-button').click(function() {

// 	pagedown();

// });

$(document).keydown(function (e) {

	if (e.keyCode == 33 || e.keyCode == 38) { //pageup, arrowup
		pageup();
	} 

	if (e.keyCode == 34 || e.keyCode == 40) { //pagedown, arrowdown
		pagedown();
	}

	if (e.keyCode == 36) { //home
		gotoelement('#aboutme');
	}

	if (e.keycode == 35) { //end
		gotoelement('#friends');
	}

});

$(window).scroll(function(){ // bind window scroll event

	updatecurrent();

});

var updatecurrent = function() {

	var id = $('.contentbox:onScreen').attr('id');
	var $oldLi = $('#navbar ul li.active');
	var $newLi = $("[href='#" + id + "']").parent('li');

	$oldLi.removeClass('active');
	$newLi.addClass('active');

};

var pageup = function() {

	var $thisLi = $('#navbar ul li.active');
	var prev = $thisLi.prev().find('a').attr('href');
	
	gotoelement(prev);

}

var pagedown = function() {

	var $thisLi = $('#navbar ul li.active');
	var next = $thisLi.next().find('a').attr('href');

	gotoelement(next);

}

var gotoelement = function(goto) {

	$('html, body').animate({
        scrollTop: $(goto).offset().top
    }, 500);

    updatecurrent();

}