Maps = {
	config: {
		options : {
			zoom              : 15,
			mapTypeId         : google.maps.MapTypeId.ROADMAP,
			scrollwheel       : false,
			navigationControl : false,
			mapTypeControl    : false,
			scaleControl      : false,
			draggable         : false,
		}
	},
	configure: function(maps){
		Maps.config.maps = maps;
		google.maps.event.addDomListener(window, 'load', Maps.init(Maps.config));
	},
	init: function(config){
		var config    = config || Maps.config;
		var latlngs   = [];
		var mapCanvas = [];
		var options   = [];
		var maps      = [];
		var markers   = [];
		for(var i=0; i<config.maps.length; i++){
			latlngs[i]        = {lat : config.maps[i].lat, lng: config.maps[i].lng};
			mapCanvas[i]      = document.getElementById(config.maps[i].id);
			options[i]        = config.options;
			options[i].center = latlngs[i];
			maps[i]           = new google.maps.Map(mapCanvas[i], options[i]);
			markers[i]        = new google.maps.Marker({
				position: latlngs[i],
    			map: maps[i],
    			title: config.maps[i].title
  			});
  			Shared.Debug.log("Map Setted");
		}
	}
}