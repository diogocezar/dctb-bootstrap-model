SizeControl = {
	pageHeight : null,
	pageWidth  : null,
	configure: function(fn){
		SizeControl.init(fn);
	},
	init: function(fn){
		SizeControl.start(fn);
		SizeControl.onResize();
	},
	start: function(fn){
		SizeControl.updateSizes();
		SizeControl.doThis(fn);
	},
	doThis: function(fn){
		fn();
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