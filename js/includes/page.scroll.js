PageScroll = {
	config: {
		easing   : "easeOutQuart",
		duration : 1500
	},
	scroll: function(id, margin, config){
		Shared.Debug.log("Page Scrolled");
		var m      = margin || 0;
		var config = config || PageScroll.config;
		if(Shared.__is_empty(id))
			$('html, body').stop().animate({scrollTop: 0}, config.duration, config.easing);
		else
			$('html, body').stop().animate({scrollTop: $(id).offset().top - m}, config.duration, config.easing);
	}
}