UrlChange = {
	change: function(page){
		Shared.Debug.log("URL Changed");
		window.history.pushState(null, null, page);
	}
}