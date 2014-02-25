$(document).ready(function(){

	/* fot twitter content tab */
	$("#apptabs a").click(function(e){
		e.preventDefault();
		$(this).tab("show");
	});

	/* ----------------------------------------------------------- */

	/* content slideshow script */
	$(".contentSlider > .contentContainer:gt(0)").hide();
	setInterval(function() { 
		$(".contentSlider > .contentContainer:first")
		.removeClass("activated")
		.fadeOut(2000)
		.next()
		.addClass("activated")
		.fadeIn(2000)
		.end()
		.appendTo(".contentSlider")
	}, 5000);

	/* ----------------------------------------------------------- */

	/* pull down the signup form */
	$(".userSignupBtn").click(function(){
		$(".signuplogin").slideDown(function(){
			$(".backdrop_form").fadeIn();
			$("#signupForm").show();
		});
	});

	/* pull up the signup form */
	$("#signupForm .closeForm").click(function(){
		$(".signuplogin").slideUp(function(){
			$("#signupForm").hide();
			$(".backdrop_form").fadeOut();
		});
	});

	/* pull down the login form */
	$(".userLoginBtn").click(function(){
		$(".signuplogin").slideDown(function(){
			$(".backdrop_form").fadeIn();
			$("#loginForm").show();
		});
	});

	/* pull up the login form */
	$("#loginForm .closeForm").click(function(){
		$(".signuplogin").slideUp(function(){
			$("#loginForm").hide();
			$(".backdrop_form").fadeOut();
		});
	});

	/* close form section when click the black backdrop */
	$(".backdrop_form").click(function(){
		$(".signuplogin").slideUp(function(){
			$(".formContainer").hide();
			$(".backdrop_form").fadeOut();
		});
	});

	/* ----------------------------------------------------------- */

	/* script for mobile sidebar */
	$(".btn-sidebar").click(function(){
		if($(".leftSideMenu").hasClass("open")){
			$(".leftSideMenu").removeClass("open").animate({
				left: -232,
			}, "fast", function(){
				$(".leftSideMenu").hide();
			});
		}else{
			$(".leftSideMenu").addClass("open").show().animate({
				left: 0,
			}, "fast");
			$(".leftSideMenu").niceScroll({
		        cursorwidth: '7px',
		        cursorborder: 'none',
		        cursorcolor:"#000",
		        cursoropacitymax:0.2,
		        railoffset: '5px',
		        railalign: 'right',
		        preservenativescrolling: false,
		        autohidemode: true,
		    });
		}
	});

	/* activate & deactivate sidebar when window size change */
	$(window).bind("resizeEnd", function() {
		var winsize = $(window).width();
        if (winsize > 1023) {
        	$(".leftSideMenu").removeAttr("style").removeClass("open");
        }
	});
	$(window).resize(function() {
        if(this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function() {
            $(this).trigger('resizeEnd');
        }, 500);
    });

	/* ----------------------------------------------------------- */

    /* custom popup menu */
    $(".mpop").click(function(){
    	var wsize = $(this).outerWidth();
    	var hsize = $(this).outerHeight();
    	var xpo = $(this).offset();
    	var relkey = $(this).attr("rel");

    	$("#" + relkey).css({
    		"top": xpo.top + hsize + 6,
    		"left": xpo.left,
    	}).slideDown("fast");

    	$("#" + relkey + "." + "pos-right").css({
    		"top": xpo.top + hsize + 6,
    		"left": xpo.left - 202 + wsize,
    	}).slideDown("fast");
    });

    /* when click the cancel button */
    $(".mpop-cancel").click(function(){
    	$(".mpop-menu").hide();
    });

    /* after window is resized */
    $(window).resize(function(){
    	$(".mpop-menu").hide();
    });

	/* close mpop when clicked outside the popup menu */
	$(document).mousedown(function(e){
    	var container = $(".mpop-menu");
    	if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    	{
        	container.hide();
    	}
	});

	/* ----------------------------------------------------------- */

    /* date pickers */
    $("#bday_datepicker, #date_hired").datepicker();
});



	/* custom scroll */
	$(".signuplogin").niceScroll({
        cursorwidth: '7px',
        cursorborder: 'none',
        cursorcolor:"#000",
        cursoropacitymax:0.2,
        railoffset: '5px',
        railalign: 'right',
        preservenativescrolling: false,
        autohidemode: true,
    });

    $(".leftSideMenu").niceScroll({
        cursorwidth: '7px',
        cursorborder: 'none',
        cursorcolor:"#000",
        cursoropacitymax:0.2,
        railoffset: '5px',
        railalign: 'right',
        preservenativescrolling: false,
        autohidemode: true,
    });