PopUp={config:{delay:500},configure:function(o){PopUp.config.pops=o,PopUp.init(PopUp.config)},init:function(o){var o=o||PopUp.config;PopUp.setButtons(o)},setButtons:function(o){for(var p=0;p<o.pops.length;p++)Shared.__set_button(o.pops[p].open,function(o){var p=o.data.index;PopUp.open(PopUp.config.pops[p].id,PopUp.config.pops[p].close)},{index:p}),Shared.__set_button(o.pops[p].close,function(o){var p=o.data.index;PopUp.close(PopUp.config.pops[p].id,PopUp.config.pops[p].close)},{index:p})},open:function(o,p){Shared.Debug.log("Popup Opened"),$("#"+o).fadeIn(),$("main").hide(),PopUp.top(),$(document).keyup(function(p){27==p.keyCode&&PopUp.close(o)}),setTimeout(function(){$("#"+p).fadeIn()},PopUp.config.delay)},close:function(o,p){Shared.Debug.log("Popup Closed"),$("#"+o).fadeOut(),$("main").show(),PopUp.top(),setTimeout(function(){$("#"+p).fadeOut()},PopUp.config.delay)},top:function(){PageScroll.scroll()}};