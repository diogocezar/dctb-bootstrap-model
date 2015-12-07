<<<<<<< HEAD
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
			//styles            : [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
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
			if(!Shared.__is_empty(config.maps[i].styles))
				options[i].styles = config.maps[i].styles;
			maps[i]           = new google.maps.Map(mapCanvas[i], options[i]);
			markers[i]        = new google.maps.Marker({
				position: latlngs[i],
    			map: maps[i],
    			title: config.maps[i].title
  			});
  			Shared.Debug.log("Map Setted");
		}
	}
=======
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
>>>>>>> origin/master
}