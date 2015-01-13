$(document).ready(function() {	
	//remove fixed header
	$('#header').css('position','absolute');
	
	///////////////////////////////////////////////////////////////////////
	//fixed actionRead
	///////////////////////////////////////////////////////////////////////
	var actionRead = $('.actionRead');
	var top = actionRead.offset().top;
	$(window).scroll(function (event) {
	  var y = $(this).scrollTop();
	  if (y >= top)
		actionRead.addClass('fixed');
	  else
		actionRead.removeClass('fixed');
		
	    actionRead.width(actionRead.parent().width() - 100);
	});
	$( window ).resize(function() {
	  actionRead.width(actionRead.parent().width() - 100);
	});
	
	///////////////////////////////////////////////////////////////////////
	//list Chapter
	///////////////////////////////////////////////////////////////////////
	
	$('.btnChapter').click(function(e){
		e.preventDefault();
		var X=$(this).attr('id');
		if(X==1) {
			$(this).parent().find('.wlistChapter').stop().fadeOut();	
			$('.bgOverlayRead').stop().fadeOut();
			$(this).css('color','#979797');
			$(this).removeClass('aniBtnChapter');
			$(this).attr('id', '0');
		}
		else {
			$(this).parent().find('.wlistChapter').stop().fadeIn();	
			$('.bgOverlayRead').stop().fadeIn();
			$(this).css('color','#f15e30');
			$(this).addClass('aniBtnChapter');
			$(this).attr('id', '1');
		}
		return false
	});
	$('.bgOverlayRead').click(function(){
		$(this).fadeOut();
		$('.wlistChapter').fadeOut();	
		$('.btnChapter').removeClass('aniBtnChapter');
		$('.btnChapter').css('color','#979797');
		$('.btnChapter').attr('id', '0');
		return false
	});
	
	///////////////////////////////////////////////////////////////////////
	//Change fotn size
	///////////////////////////////////////////////////////////////////////
	
	var contentRead = $('.contentReadStory');
	function change_fs(element,size) {
		contentRead.css('line-height','normal');	
		var currentFS = parseInt(element.css('font-size'));
		
		if (size == 'smaller') {
			var newSize = currentFS - 2;
			console.log('down:' + newSize);
		}else if (size == 'bigger') {
			var newSize = currentFS + 2;
			console.log('up:' + newSize);
		}
		element.css('font-size', newSize + 'px');
	}
	$('.btnDownText').click(function(){
		change_fs(contentRead,'smaller');
		return false	
	});
	$('.btnUpText').click(function(){
		change_fs(contentRead,'bigger');
		return false
	});
	$('.btnNormalText').click(function(){
		contentRead.css({
			'font-size': '18px;',
			'line-height':'165%'	
		});	
		return false
	});
	
	
	
});	