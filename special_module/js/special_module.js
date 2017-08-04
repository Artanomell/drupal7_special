(function ($) {

$(function(){
	
  $("#special-block").click(function () {
		$.cookie('special', 'on', {expires: 30, path: '/'});
    location.reload();
  });
	
	$("#special-normal-block").click(function () {
    $.cookie('special', null);
    location.reload();
  });
	
});

})(jQuery);