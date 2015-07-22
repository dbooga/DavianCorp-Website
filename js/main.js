var main = function() {
	
	$(document).on("scroll", onScroll);

	$('.menuitem').click(function(){
		$('.menuitem').removeClass('active');
		$(this).addClass('active');
	});

	$('#davianhome').on('click', function(e){
		e.preventDefault();
		$('.menuitem').removeClass('active');

		var target = $('#page-top'),
		menu = target;
		$target = $(target);

		$("html, body").stop().animate(
			{scrollTop: $(target).offset().top}, 
			1300,
			"easeInOutExpo",
			function(){
				window.location.hash = target;
			});

	});

	$('.menuitem a[href^="#"]').on('click', function(e){
		e.preventDefault();
		$(document).off("scroll");

        var target = this.hash,
            menu = target;
        $target = $(target);

        $("html, body").stop().animate(
        	{scrollTop: $(target).offset().top}, 
        	1300,
            "easeInOutExpo",
            function(){
            	window.location.hash = target;
            	$(document).on("scroll", onScroll);
            });
        
	});

}

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.menuitem a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        // console.log(currLink.parent(), currLink);
        //if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        if (refElement.offset().top <= scrollPos){
            $('.menuitem').removeClass("active");
            currLink.closest('.menuitem').addClass("active");
        }
        else{
            currLink.closest('.menuitem').removeClass("active");
        }
    });
}

$(document).ready(main);