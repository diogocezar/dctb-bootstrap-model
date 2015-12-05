UrlChange = {
	change: function(page){
		window.history.pushState(null, null, page);
	}
}