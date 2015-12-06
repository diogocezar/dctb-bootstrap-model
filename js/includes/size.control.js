<<<<<<< HEAD
SizeControl = {
	pageHeight : 0,
	pageWidth  : 0,
	docHeight  : 0,
	docWidth   : 0,
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
		SizeControl.pageHeight = $(window).height();
		SizeControl.pageWidth  = $(window).width();
		SizeControl.docHeight  = $(document).height();
		SizeControl.docWidth   = $(document).width();
	},
	onResize: function(){
		$(window).on('resize', function(){
			SizeControl.start();
		});
	}
=======
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
>>>>>>> origin/master
}