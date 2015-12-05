SizeControl = {
	pageHeight : null,
	pageWidth  : null,
	init: function(){
		SizeControl.start();
		SizeControl.onResize();
	},
	start: function(){
		SizeControl.updateSizes();
		SizeControl.doThis();
	},
	doThis: function(){
		Shared.Debug.log('Implements Resize Here');
	},
	updateSizes: function(){
		SizeControl.pageHeight = $(window).height;
		SizeControl.pageWidth  = $(window).width;
	},
	onResize: function(){
		$(window).on('resize', function(){
			SizeControl.start();
		});
	}
}

$(document).ready(function() {
    SizeControl.init();
});