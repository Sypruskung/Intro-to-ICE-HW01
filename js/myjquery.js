$(document).ready(function(){
	// $("p").hide();
});

$("#navbar li a").click(function(e) {

	e.preventDefault();
     
    var goto = $(this).attr('href');
 
    $('html, body').animate({
        scrollTop: $(goto).offset().top
    }, 500);

    var $thisLi = $(this).parent('li');
    var $ul = $thisLi.parent('ul');

    if (!$thisLi.hasClass('active')) {
    	$ul.find('li.active').removeClass('active');
    	$thisLi.addClass('active');
    }

});