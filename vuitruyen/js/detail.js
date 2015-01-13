$(document).ready(function() {	
	//readmore desc Story detail
	var w = $('#outer');
	var getCurrentHeight = $('#inner').outerHeight();
	//console.log('as' + getCurrentHeight);
	if (getCurrentHeight <= 90) {
		$('.descLess').hide();
		$('.descMore').hide();
	}
	$('.descMore').on('click',function(e){
		e.preventDefault();
		w.css({
			'max-height': getCurrentHeight + 'px',
		});
		$('.descLess').show();
		$('.descMore').hide();
	});
	$('.descLess').on('click',function(e){
		e.preventDefault();
		w.css({
			'max-height': 90 + 'px',
		});
		$('.descLess').hide();
		$('.descMore').show();
	});
	
	///////////////////////////////////////////////////////////////////////
	//tooltip Story
	//////////////////////////////////////////////////////////////////////
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
	if (testMobile == null)	{
		$myTooltip = $('.tooltipStory');
		$myTooltip.tooltipster({
			position: 'right',
			offsetX: 7,
			interactive: true,
			content: $('<div class="tooltipInfo"><a href="#" class="tooltipInfoTitle">Bá Tước Monte Cristo</a><div class="tooltipInfoChapter"><p class="chapterTxt">Chương 990/1230</p><p class="chapterChart"><span class="chapterColorChart" style="width:70%;"></span></p></div><p class="tooltipInfo1Desc">Cuộc sống này, những bài học từ những điều giản dị luôn là điều khiến ta phải trăn trở tưởng như không tồn tại nhưng lại luôn khiến ta day dứt không yên. Lần đầu tiên người đàn uôn khiến ta day dứt không tồn tại nhưng lại luôn khiến ta day dứt khôn yên quán Hoa Diên Vỹ Cuộc sống này, những bài học từ những điều giản dị luôn là điều khiến ta phải trăn trở tưởng như khôn quán Hoa Diên Vỹ....</p><div class="wBtnRead"><a class="btn btnPrimary detailPrimary" href="#"><i class="fa fa-eye"></i>Đọc truyện</a><div class="readCount"><span>20,456</span></div></div></div>')
		});
	}
});	