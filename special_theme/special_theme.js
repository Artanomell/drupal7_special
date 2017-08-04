(function ($) {

$.fn.fontsizeSmallClick = function() {
  $('body').css('fontSize', '100%');
	$('body').addClass('fontsize-small');
	$('body').removeClass('fontsize-normal');
	$('body').removeClass('fontsize-big');
	$.cookie('special-fontsize','fontsize-small', {expires: 30, path: '/'});
	return this;
}; 

$(function(){
  $('.a-fontsize-small').click( function () {
	$('.a-fontsize-small').fontsizeSmallClick();
  });
});

$.fn.fontsizeNormalClick = function() {
  $('body').css('fontSize', '120%');
	$('body').removeClass('fontsize-small');
	$('body').addClass('fontsize-normal');
	$('body').removeClass('fontsize-big');
	$.cookie('special-fontsize','fontsize-normal', {expires: 30, path: '/'});
	return this;
}; 

$(function(){
  $('.a-fontsize-normal').click(function () {
	$('.a-fontsize-normal').fontsizeNormalClick();
  });
});

$.fn.fontsizeBigClick = function() {
  $('body').css('fontSize', '150%');
	$('body').removeClass('fontsize-small');
	$('body').removeClass('fontsize-normal');
	$('body').addClass('fontsize-big');
	$.cookie('special-fontsize','fontsize-big', {expires: 30, path: '/'});
	return this;
}; 

$(function(){
  $('.a-fontsize-big').click(function () {
	$('.a-fontsize-big').fontsizeBigClick();
  });
});

/***********************************************************************/

$.fn.color1Click = function() {
  $('body').css('backgroundColor', '#fff');
	$('body').css('color', '#000');
	$('a').each(function() {
		$( this ).css('color','#309');
	});
	$('body').addClass('color1');
	$('body').removeClass('color2');
	$('body').removeClass('color3');
	$.cookie('special-color','color1', {expires: 30, path: '/'});	
	return this;
}; 

$(function(){
  $('.a-color1').click(function () {
	$('.a-color1').color1Click();
  });
});

$.fn.color2Click = function() {
  $('body').css('backgroundColor', '#000');
	$('body').css('color', '#fff');  
	$('a').each(function() {
		$( this ).css('color','#fff');
	});
	$('body').removeClass('color1');
	$('body').addClass('color2');
	$('body').removeClass('color3');
	$.cookie('special-color','color2', {expires: 30, path: '/'});	
	return this;
}; 

$(function(){
  $('.a-color2').click(function () {
	$('.a-color2').color2Click();
  });
});

$.fn.color3Click = function() {
  $('body').css('backgroundColor', '#9dd1ff');
	$('body').css('color', '#063462');  
	$('a').each(function() {
		$( this ).css('color','#309');
	});	
	$('body').removeClass('color1');
	$('body').removeClass('color2');
	$('body').addClass('color3');
	$.cookie('special-color','color3', {expires: 30, path: '/'});	
	return this;
}; 

$(function(){
  $('.a-color3').click(function () {
	$('.a-color3').color3Click();
  });
});

/***********************************************************************/

$.fn.imagesColorClick = function() {
	$('img').each(function() {
		$( this ).removeClass('img-grayscale');
		$( this ).removeAttr('style');
	});	
	$('body').addClass('imgcolor');
	$('body').removeClass('imggray');
	$('body').removeClass('imgnone');
	$.cookie('special-images','imgcolor', {expires: 30, path: '/'});	
	return this;
}; 

$(function(){
  $('.a-imgcolor').click(function () {
	$('.a-imgcolor').imagesColorClick();
  });
});

$.fn.imagesGrayscaleClick = function() {
	$('img').each(function() {
		$( this ).addClass('img-grayscale');
		$( this ).removeAttr('style');
	});		
	$('body').removeClass('imgcolor');
	$('body').addClass('imggray');
	$('body').removeClass('imgnone');
	$.cookie('special-images','imggray', {expires: 30, path: '/'});	
	return this;
}; 

$(function(){
  $('.a-imggray').click(function () {
	$('.a-imggray').imagesGrayscaleClick();
  });
});

$.fn.imagesNoneClick = function() {
	$('img').each(function() {
		$( this ).css('display', 'none');
	});	
	$('body').removeClass('imgcolor');
	$('body').removeClass('imggray');
	$('body').addClass('imgnone');	
	$.cookie('special-images','imgnone', {expires: 30, path: '/'});	
	return this;
}; 

$(function(){
  $('.a-imgnone').click(function () {
	$('.a-imgnone').imagesNoneClick();
  });
});

/***********************************************************************/

$.fn.spaceSmallClick = function() {
  $('body').css('letterSpacing', 'normal');
	$('.access').css('letterSpacing', 'normal');
	$('body').addClass('kernstd');
	$('body').removeClass('kernmid');
	$('body').removeClass('kernbig');
	$.cookie('special-kerning','kernstd', {expires: 30, path: '/'});	
	return this;
}; 

$(function(){
  $('.a-kernstd').click(function () {
	$('.a-kernstd').spaceSmallClick();
  });
});

$.fn.spaceStdClick = function() {
  $('body').css('letterSpacing', '2px');
	$('.access').css('letterSpacing', 'normal');
	$('body').removeClass('kernstd');
	$('body').addClass('kernmid');
	$('body').removeClass('kernbig');
	$.cookie('special-kerning','kernmid', {expires: 30, path: '/'});	
	return this;
}; 

$(function(){
  $('.a-kernmid').click(function () {
	$('.a-kernmid').spaceStdClick();
  });
});

$.fn.spaceBigClick = function() {
  $('body').css('letterSpacing', '4px');
	$('.access').css('letterSpacing', 'normal');
	$('body').removeClass('kernstd');
	$('body').removeClass('kernmid');
	$('body').addClass('kernbig');
	$.cookie('special-kerning','kernbig', {expires: 30, path: '/'});	
	return this;
};

$(function(){
  $('.a-kernbig').click(function () {
	$('.a-kernbig').spaceBigClick();
  });
});

/***********************************************************************/

$( document ).ready(function() {
	if ( $.cookie('special') == 'on' )
	{
		if ($('body').hasClass('toolbar'))
			$('.access').css('top', '65px');
		
	  switch ( $.cookie('special-fontsize')) {
		  case 'fontsize-small': $('.a-fontsize-small').fontsizeSmallClick(); break;
		  case 'fontsize-normal': $('.a-fontsize-normal').fontsizeNormalClick(); break;
		  case 'fontsize-big': 	$('.a-fontsize-big').fontsizeBigClick(); break;
		}
		
		switch ( $.cookie('special-color')) {
		  case 'color1': $('.a-color1').color1Click(); break;
		  case 'color2': $('.a-color2').color2Click(); break;
		  case 'color3': $('.a-color3').color3Click(); break;
		}
				
		switch ( $.cookie('special-images')) {
		  case 'imgcolor': $('.a-imgcolor').imagesColorClick(); break;
		  case 'imggray': $('.a-imggray').imagesGrayscaleClick(); break;
		  case 'imgnone': $('.a-imgnone').imagesNoneClick(); break;
		}
		
		switch ( $.cookie('special-kerning')) {
		  case 'kernstd': $('.a-kernstd').spaceSmallClick(); break;
		  case 'kernmid': $('.a-kernmid').spaceStdClick(); break;
		  case 'kernbig': $('.a-kernbig').spaceBigClick(); break;
		}
	}
});

})(jQuery);