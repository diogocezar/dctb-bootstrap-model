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
		},
		maps : [
			{
				id    : 'map_1',
				lat   : -23.5422911,
				lng   : -46.6426224,
				title : 'Título 1'
			},
			{
				id    : 'map_2',
				lat   : -23.528396,
				lng   : -46.6722072,
				title : 'Título 2'
			},
		]
	},
	init: function(config){
		var config    = config || Maps.config;
		var latlngs   = [];
		var mapCanvas = [];
		var options   = [];
		var maps      = []
		var markers   = []
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
		}
	}
}

$(document).ready(function() {
	google.maps.event.addDomListener(window, 'load', Maps.init());
});