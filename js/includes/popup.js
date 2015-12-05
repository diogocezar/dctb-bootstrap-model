PopUp = {
	config: {
		delay : 500,
		pops  : [
			{
				id    : 'id-popup',
				open  : 'btn-open-popup',
				close : 'btn-close-popup'
			},
		]
	},
	init: function(config){
		var config = config || PopUp.config;
		PopUp.setButtons(config);
	},
	setButtons: function(config){
		for(var i=0; i<config.pops.length; i++){
			Shared.__set_button(config.pops[i].open, function(){
				PopUp.open(config.pops[i].id, config.pops[i].close);
			});
		}
	},
	open: function(id, close){
		$('#' + id).fadeIn();
		$(document).keyup(function(e) {
		    if (e.keyCode == 27) {
		    	PopUp.close(id);
		    }
		});
		setTimeout(function(){$(close).fadeIn()}, PopUp.config.delay);
		PopUp.top();
		$('#' + id).height(SizeControl.pageHeight);
	},
	close: function(id, close){
		$('#' + id).fadeOut();
		setTimeout(function(){$(close).fadeOut()}, PopUp.config.delay);
	},
	top: function(){
		PageScroll.scroll();
	}
}