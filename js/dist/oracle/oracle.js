Oracle={BackgroundVideo:{init:function(){Mobile.isMobile||$(".player").mb_YTPlayer(),$(".player").on("YTPStart",function(e){Shared.Debug.log("Vídeo BG Started")})}},NiceScroll:{config:{cursorwidth:"8px",zindex:99999999,scrollspeed:90,mousescrollstep:60,cursoropacitymax:.8,cursorcolor:"#aaa",horizrailenabled:!1,cursorborder:"none",cursorborderradius:"0px"},init:function(){$("html").niceScroll(Oracle.NiceScroll.config)}},Preloader:{loaded:!1,config:{delay:500,recheck:200,velocity:"slow"},init:function(){Oracle.Preloader.loaded?Oracle.Preloader.pageLoaded():setTimeout(function(){Shared.Debug.log("Still Loading"),Oracle.Preloader.init()},Oracle.Preloader.recheck)},pageLoaded:function(){Oracle.Preloader.hide()},show:function(){$("#status").fadeIn(),$("#preloader").delay(Oracle.Preloader.delay).fadeIn(Oracle.Preloader.velocity)},hide:function(){$("#status").fadeOut(),$("#preloader").delay(Oracle.Preloader.delay).fadeOut(Oracle.Preloader.velocity)}},ScrollReveal:{config:{after:"0s",enter:"top",move:"15px",over:"0.5s",easing:"ease-in-out",viewportFactor:0,reset:!0,init:!0},init:function(){window.sr=new scrollReveal(Oracle.ScrollReveal.config)}},Modernizr:{init:function(){Modernizr.svg||$('img[src*="svg"]').attr("src",function(){return $(this).attr("src").replace(".svg",".png")})}},OwlCarousel:{config:{navigation:!1,pagination:!1,autoPlay:!0,slideSpeed:300,singleItem:!0},carousels:{ids:[$("#carousel")],assigned:[]},init:function(){for(var e=0;e<Oracle.OwlCarousel.carousels.ids.length;e++){var r=Oracle.OwlCarousel.carousels.ids[e];r.length&&(Oracle.OwlCarousel.carousels.assigned[e]=r.owlCarousel()),setTimeout(function(){$(".owl-carousel").each(function(){r.data("owlCarousel").updateVars()})},500)}}},Howler:{config:{urls:["./assets/sounds/sound.ogg"],autoplay:!1,loop:!0,volume:.5},sound:[],init:function(){Oracle.Howler.sound[0]=new Howl(Oracle.Howler.config)}},init:function(){for(var e=[Oracle.ScrollReveal,Oracle.NiceScroll,Oracle.OwlCarousel,Oracle.Modernizr,Oracle.Howler,Oracle.BackgroundVideo,Oracle.Preloader],r=0;r<e.length;r++)e[r].init()}},$(document).ready(function(){Oracle.init()}),$(window).load(function(){Oracle.Preloader.loaded=!0});