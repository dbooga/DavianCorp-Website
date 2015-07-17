var main = function() {
	
	$('.menuitem').click(function(){
		$('.menuitem').removeClass('active');
		$(this).addClass('active');
	});


	//$(document).on("scroll", onScroll);
/*
	$('menuitem a[href^="#"]').on('click', function(e){
		e.preventDefault();
		$('menuitem a').each(function(){
			$('.menuitem').removeClass('active');
		})
		$(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);

        $("html, body").stop().animate(
        	{scrollTop: $target.offset().top}, 
        	1300,
            "easeInOutExpo",
            function(){
            	window.location.hash = target;
            	$(document).on("scroll", onScroll);
            })		
	})

	*/

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
}


$(document).ready(main);