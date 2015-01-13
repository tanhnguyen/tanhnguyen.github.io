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
	///////////////////////////////////////////////////////////////////////
	//tooltip Story
	//////////////////////////////////////////////////////////////////////
	if (testMobile == null)	{
		$myTooltip = $('.tooltipStory');
		$myTooltip.tooltipster({
			position: 'right',
			offsetX: 7,
			interactive: true,
			content: $('<div class="tooltipInfo"><a href="#" class="tooltipInfoTitle">Bá Tước Monte Cristo</a><div class="tooltipInfoChapter"><p class="chapterTxt">Chương 990/1230</p><p class="chapterChart"><span class="chapterColorChart" style="width:70%;"></span></p></div><p class="tooltipInfo1Desc">Cuộc sống này, những bài học từ những điều giản dị luôn là điều khiến ta phải trăn trở tưởng như không tồn tại nhưng lại luôn khiến ta day dứt không yên. Lần đầu tiên người đàn uôn khiến ta day dứt không tồn tại nhưng lại luôn khiến ta day dứt khôn yên quán Hoa Diên Vỹ Cuộc sống này, những bài học từ những điều giản dị luôn là điều khiến ta phải trăn trở tưởng như khôn quán Hoa Diên Vỹ....</p><div class="wBtnRead"><a class="btn btnPrimary detailPrimary" href="#"><i class="fa fa-eye"></i>Đọc truyện</a><div class="readCount"><span>20,456</span></div></div></div>')
		});
	}
	
	///////////////////////////////////////////////////////////////////////
	//Close support
	///////////////////////////////////////////////////////////////////////
	$('.btnClose').click(function(){
		$('.support').fadeOut();
	});
	
	///////////////////////////////////////////////////////////////////////
	//Slide Story
	///////////////////////////////////////////////////////////////////////
	storySlider = $('#itemsHot');
	storySlider.on('initialized.owl.carousel', function(event) {
		var items = event.item.count;
		var currentItem = event.item.index;
		if (items <= 5) {
			storySlider.find('.owl-nav').addClass('disabled').attr('disabled','disabled');
		}
		if(currentItem == 0) {
			storySlider.find('.owl-prev').addClass('disabled').attr('disabled','disabled');;
		}	
	})
	storySlider.on('translated.owl.carousel', function(event) {
		var items = event.item.count;
		var currentItem = event.item.index;
		var maximumItem =  items - event.page.size;
		if(currentItem == maximumItem){
		 $(this).find('.owl-next').addClass('disabled').attr('disabled','disabled');;
		}
		
		if(currentItem < maximumItem){
		 $(this).find('.owl-next').removeClass('disabled').removeAttr('disabled');
		 
		}
		if(currentItem == 0){
		  $(this).find('.owl-prev').addClass('disabled').attr('disabled','disabled');
		}
		if(currentItem > 0){
		  $(this).find('.owl-prev').removeClass('disabled').removeAttr('disabled');
		}
	})
	storySlider.owlCarousel({
		items:6,
		margin:20,
		nav:true,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive:{0:{items:5,slideBy:4},1280:{items:6,slideBy:5}}
	})
	
	storySlider.on('resized.owl.carousel', function(event) {
		var items = event.item.count;
		var currentItem = event.item.index;
		var maximumItem =  items - event.page.size;
		//console.log(event.item);
		//console.log(event.page);
		if(currentItem == maximumItem){
		 $(this).find('.owl-next').addClass('disabled').attr('disabled','disabled');
		}
		if(currentItem < maximumItem){
		 $(this).find('.owl-next').removeClass('disabled').removeAttr('disabled');
		 
		}
		if(currentItem == 0){
		  $(this).find('.owl-prev').addClass('disabled').attr('disabled','disabled');
		}
		if(currentItem > 0){
		  $(this).find('.owl-prev').removeClass('disabled').removeAttr('disabled');
		}
	})
	
	
	
	
});