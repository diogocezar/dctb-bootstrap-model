Analytics = {
	page         : null,
	sendedScroll : null,
	init: function(){
		Analytics.sentScroll = [];
		Analytics.page       = Analytics.getPage();
		Analytics.assignOnScroll();
		Analytics.assignPageView();
		Analytics.assignClicks();
		Analytics.assignMouseHover();
	},
	assignClicks: function(){
		$('.analytics-click').on('click', function(){
			var that     = $(this);
			var category = that.data('analytic-category');
			var action   = that.data('analytic-action');
			var external = that.data('link-external');
			if(Shared.__is_empty(external)){
				Analytics.sendGa('send', 'event', category, action, 'clique', function(){
					window.location = that.attr("href");
				});
			}
			else{
				Analytics.sendGa('send', 'event', category, action, 'clique');
			}
		});
	},
	assignMouseHover: function(){
		$('.analytics-hover').on('mouseover', function(){
			var that     = $(this);
			var category = that.data('analytic-category');
			var action   = that.data('analytic-action');
			Analytics.sendGa('send', 'event', category, action, 'mouseover');
		});
	},
	assignPageView: function(){
		Analytics.sendGa('send','pageview', Analytics.page);
	},
	assignLoad: function(){
		Analytics.sendGa('send','event', Analytics.page, 'loading', 'view');
	},
	getPage: function(){
		var pageName = $("#page-title").data('page');
		return "/" + pageName;
	},
	sendGa: function(type, event, category, action, label, callBack){
		var gaType     = type  || 'send';
		var gaEvent    = event || 'event';
		var gaCategory = category;
		var gaAction   = action;
		var gaLabel    = label;
		if(Shared.__is_empty(gaAction) && Shared.__is_empty(label)){
			ga(gaType, gaEvent, gaCategory,
			{
		    	hitCallback: function(){
		    		Shared.Debug.info('ga("' + gaType + '", "' + gaEvent + '", "' + gaCategory + '");');
		    		if(!Shared.__is_empty(callBack))
		    			callBack();
				}
			});

		}
		else{
			ga(gaType, gaEvent, gaCategory, gaAction, gaLabel,
			{
		    	hitCallback: function(){
		    		Shared.Debug.info('ga("' + gaType + '", "' + gaEvent + '", "' + gaCategory + '", "' + gaAction + '", "' + gaLabel + '");');
		    		if(!Shared.__is_empty(callBack))
		    			callBack();
				}
			});
		}
	},
	assignOnScroll: function(){
		$(window).scroll(function(e){
			var scrollTop = $(window).scrollTop();
			var docHeight = $(document).height();
			var winHeight = $(window).height();
			var scrollPercent = (scrollTop) / (docHeight - winHeight);
			var scrollPercentage = Math.round(scrollPercent*100);
			var pageNameWithoutSlash = Analytics.page.replace("/","");
			pageNameWithoutSlash = pageNameWithoutSlash.replace("_","-");
			if(scrollPercentage >= 25 && $.inArray("25", Analytics.sentScroll) == -1){
				Analytics.sendGa('send', 'event', pageNameWithoutSlash, 'scroll-25', 'scroll');
				Analytics.sentScroll.push("25");
			}
			if(scrollPercentage >= 50 && $.inArray("50", Analytics.sentScroll) == -1){
				Analytics.sendGa('send', 'event', pageNameWithoutSlash, 'scroll-50', 'scroll');
				Analytics.sentScroll.push("50");
			}
			if(scrollPercentage >= 75 && $.inArray("75", Analytics.sentScroll) == -1){
				Analytics.sendGa('send', 'event', pageNameWithoutSlash, 'scroll-75', 'scroll');
				Analytics.sentScroll.push("75");
			}
			if(scrollPercentage == 100 && $.inArray("100", Analytics.sentScroll) == -1){
				Analytics.sendGa('send', 'event', pageNameWithoutSlash, 'scroll-100', 'scroll');
				Analytics.sentScroll.push("100");
			}
		});
	}
};