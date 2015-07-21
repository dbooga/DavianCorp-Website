var main = function() {
	



	$(document).on("scroll", onScroll);

	$('.menuitem').click(function(){
		$('.menuitem').removeClass('active');
		$(this).addClass('active');
	});

	$('.menuitem a[href^="#"]').on('click', function(e){
		e.preventDefault();
		$(document).off("scroll");
/*
		$('.menuitem a').each(function(){
			$(this).removeClass('active');
		})
		$(this).addClass('active');
		*/


        var target = this.hash,
            menu = target;
        $target = $(target);
/*
        $("html, body").stop().animate(
        	{scrollTop: $(target).offset().top}, 
        	{
        	duration: 1300,
            easing: "easeInOutExpo"
        	})
        */
        $("html, body").stop().animate(
        	{scrollTop: $(target).offset().top}, 
        	1300,
            "easeInOutExpo",
            function(){
            	window.location.hash = target;
            	$(document).on("scroll", onScroll);
            });
        
	});

	
	/*
	$('.menuitem').click(function(){
		$('.menuitem').removeClass('active');
		$(this).addClass('active');
	});

	$("#click-about").click(function (e){
		e.preventDefault();
        $("html, body").stop().animate(
        	{scrollTop: $("#about").offset().top}, 
        	{
        	duration: 1300,
            easing: "easeInOutExpo"
        	})
    	});

	$("#click-portfolio").click(function (e){
		e.preventDefault();
        $("html, body").stop().animate(
        	{scrollTop: $("#portfolio").offset().top}, 
        	{
        	duration: 1300,
            easing: "easeInOutExpo"
        	})
    	});

	$("#click-contact").click(function (e){
		e.preventDefault();
        $("html, body").stop().animate(
        	{scrollTop: $("#contact").offset().top}, 
        	{
        	duration: 1300,
            easing: "easeInOutExpo"
        	})
    	});

	$("#davianhome").click(function (e){
		e.preventDefault();
        $("html, body").stop().animate(
        	{scrollTop: $("#page-top").offset().top}, 
        	{
        	duration: 1300,
            easing: "easeInOutExpo"
        	})
    	});

    $(window).bind("mousewheel", function() {
    	$("html, body").stop();
	});
	*/
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