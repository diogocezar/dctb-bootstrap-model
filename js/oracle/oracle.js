Oracle = {
	NiceScroll: {
		config : {
			cursorwidth        : "8px",
			zindex             : 99999999,
			scrollspeed        : 90,
			mousescrollstep    : 60,
			cursoropacitymax   : 0.8,
			cursorcolor        : "#e43c25",
			horizrailenabled   : false,
			cursorborder       : "none",
			cursorborderradius : "0px"
		},
		init: function(){
			$("html").niceScroll(Oracle.NiceScroll.config);
		}
	},
	Preloader: {
		loaded : false,
		config : {
			delay    : 500,
			velocity : "slow"
		},
		init: function(){
			if(Oracle.Preloader.loaded){
				Oracle.Preloader.pageLoaded();
			}
			else{
				setTimeout(function(){
					Shared.Debug.log('Still Loading');
					Oracle.Preloader.init();
				}, 200);
			}
		},
		pageLoaded: function(){
			Oracle.Preloader.hide();
		},
		show: function(){
			$("#status").fadeIn();
			$("#preloader").delay(Oracle.Preloader.delay).fadeIn(Oracle.Preloader.velocity);
		},
		hide: function(){
			$("#status").fadeOut();
			$("#preloader").delay(Oracle.Preloader.delay).fadeOut(Oracle.Preloader.velocity);
		}
	},
	ScrollReveal: {
		config : {
			after          : "0s",
			enter          : "top",
			move           : "15px",
			over           : "0.5s",
			easing         : "hustle",
			viewportFactor : 0,
			reset          : true,
			init           : true
		},
		init: function(){
			window.sr = new scrollReveal(Oracle.ScrollReveal.config);
		}
	},
	Modernizr: {
		init: function(){
			if (!Modernizr.svg) {
				$('img[src*="svg"]').attr('src', function() {
					return $(this).attr('src').replace('.svg', '.png');
				});
			}
		}
	},
	OwlCarousel:{
		config : {
			navigation  : false,
			pagination  : false,
			autoPlay    : true,
			slideSpeed  : 300,
			singleItem  : true,
		},
		carousels : {
			ids : [
				$("#carousel")
			],
			assigned : []
		},
		init:function(){
			for(var i=0; i<Oracle.OwlCarousel.carousels.ids.length; i++){
				var item = Oracle.OwlCarousel.carousels.ids[i];
				if(item.length){
					Oracle.OwlCarousel.carousels.assigned[i] = item.owlCarousel();
				}
				setTimeout(function(){
					$(".owl-carousel").each(function(){
						item.data('owlCarousel').updateVars();
					});
				}, 500);
			}
		}
	},
	Howler : {
		config: {
			urls     : ['./assets/sounds/sound.ogg'],
			autoplay : false,
			loop     : true,
			volume   : 0.5
		},
		sound : [],
		init: function(){
			Oracle.Howler.sound[0] = new Howl(Oracle.Howler.config);
		}
	},
	init: function () {
		var exec = [
			Oracle.ScrollReveal,
			Oracle.NiceScroll,
			Oracle.OwlCarousel,
			Oracle.Modernizr,
			Oracle.Howler,
			Oracle.Preloader
		];
		for(var i=0; i<exec.length; i++){
			exec[i].init();
		}
	}
}

$(document).ready(function() {
	Oracle.init();
});

$(window).load(function(){
	Oracle.Preloader.loaded = true;
})