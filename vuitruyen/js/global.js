$(document).ready(function() {
	//Mobile Detect
	var testMobile;
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};
	testMobile = isMobile.any();
	if (testMobile)	{
		$('#header').css('position','absolute');
	}else {
		//slimscroll relate video
        $('.scrollable').slimScroll({
            size: '5px',
            distance: '2px',
            color: "#888888",
            allowPageScroll: true
        });
		
		//disable scrollbar
		$(".scrollable").bind("mouseover", function () {
			disabler.disable_scrolling();
		});
		$(".scrollable").bind("mouseleave", function () {
			disabler.enable_scrolling();
		});
	}
	
	//tabs Global
	$('.btnListGrid a').click(function(e){
		e.preventDefault()
		$('.tabContent .current').removeClass('current');
		$('.btnListGrid a').removeClass('active');
		$(this).addClass('active');
		var currentTab = $(this).attr('href');
		$(currentTab).addClass('current');
	});
	
	///////////////////////////////////////////////////////////////////////
	//navMenu
	///////////////////////////////////////////////////////////////////////
	
	$('.navMenu li.haveSubMenu').hover(function(){
		$(this).find('.subMenu').stop().fadeIn();	
		$('.bgOverlay').stop().fadeIn();
		$(this).find('.statusStory').addClass('animateStatus');
		$(this).find('a:first').css('color','#f15e30');
	},function(){
		$(this).find('.subMenu').stop().fadeOut();	
		$('.bgOverlay').stop().fadeOut();
		$(this).find('.statusStory').removeClass('animateStatus');
		$(this).find('a:first').css('color','#525252');
		
	});
	
	///////////////////////////////////////////////////////////////////////
	//pop up 
	///////////////////////////////////////////////////////////////////////
	
	$('[data-popup-target]').click(function () {
		$('html').addClass('overlay');
		var activePopup = $(this).attr('data-popup-target');
		$(activePopup).addClass('visible animatePopup');
 
	});
 
	$(document).keyup(function (e) {
		if (e.keyCode == 27 && $('html').hasClass('overlay')) {
			clearPopup();
		}
	});
 
	$('.popup-exit').click(function () {
		clearPopup();
 
	});
 
	$('.popup-overlay').click(function () {
		clearPopup();
	});
 
	function clearPopup() {
		$('.popup.visible').addClass('transitioning').removeClass('visible animatePopup');
		$('html').removeClass('overlay');
 
		setTimeout(function () {
			$('.popup').removeClass('transitioning');
		}, 200);
	}
	
	
	
});