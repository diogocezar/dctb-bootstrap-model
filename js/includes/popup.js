<<<<<<< HEAD
PopUp = {
	config: {
		delay : 500
	},
	configure: function(pops){
		PopUp.config.pops = pops;
		PopUp.init(PopUp.config);
	},
	init: function(config){
		var config = config || PopUp.config;
		PopUp.setButtons(config);
	},
	setButtons: function(config){
		for(var i=0; i<config.pops.length; i++){
			Shared.__set_button(config.pops[i].open, function(params){
				var i = params.data.index;
                PopUp.open(PopUp.config.pops[i].id, PopUp.config.pops[i].close);
			}, {index: i});
			Shared.__set_button(config.pops[i].close, function(params){
				var i = params.data.index;
                PopUp.close(PopUp.config.pops[i].id, PopUp.config.pops[i].close);
			}, {index: i});
		}
	},
	open: function(id, close){
		Shared.Debug.log("Popup Opened");
		$('#' + id).fadeIn(function(){
			$('#' + id).height(SizeControl.docHeight);
		});
		$(document).keyup(function(e) {
		    if (e.keyCode == 27) {
		    	PopUp.close(id);
		    }
		});
		setTimeout(function(){
			$("#" + close).fadeIn();
		}, PopUp.config.delay);
		PopUp.top();
	},
	close: function(id, close){
		Shared.Debug.log("Popup Closed");
		$('#' + id).fadeOut();
		setTimeout(function(){$("#" + close).fadeOut()}, PopUp.config.delay);
	},
	top: function(){
		PageScroll.scroll();
	}
=======
PopUp = {
	config: {
		delay : 500
	},
	configure: function(pops){
		PopUp.config.pops = pops;
		PopUp.init(PopUp.config);
	},
	init: function(config){
		var config = config || PopUp.config;
		PopUp.setButtons(config);
	},
	setButtons: function(config){
		for(var i=0; i<config.pops.length; i++){
			Shared.__set_button(config.pops[i].open, function(params){
				var i = params.data.index;
                PopUp.open(PopUp.config.pops[i].id, PopUp.config.pops[i].close);
			}, {index: i});
			Shared.__set_button(config.pops[i].close, function(params){
				var i = params.data.index;
                PopUp.close(PopUp.config.pops[i].id, PopUp.config.pops[i].close);
			}, {index: i});
		}
	},
	open: function(id, close){
		Shared.Debug.log("Popup Opened");
		$('#' + id).fadeIn();
		$(document).keyup(function(e) {
		    if (e.keyCode == 27) {
		    	PopUp.close(id);
		    }
		});
		setTimeout(function(){$("#" + close).fadeIn()}, PopUp.config.delay);
		PopUp.top();
		$('#' + id).height(SizeControl.pageHeight);
	},
	close: function(id, close){
		Shared.Debug.log("Popup Closed");
		$('#' + id).fadeOut();
		setTimeout(function(){$("#" + close).fadeOut()}, PopUp.config.delay);
	},
	top: function(){
		PageScroll.scroll();
	}
>>>>>>> origin/master
}