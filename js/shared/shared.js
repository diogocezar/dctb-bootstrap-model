Shared = {
	Debug: {
		debugMode : true,
		log: function(msg){
			if(Shared.Debug.debugMode)
				console.log(msg);
		},
		error: function(msg){
			if(Shared.Debug.debugMode)
				console.error(msg);
		},
		info: function(msg){
			if(Shared.Debug.debugMode)
				console.info(msg);
		}
	},
	__is_empty: function(val){
		return (val == "" || val == null || val == undefined);
	},
	__set_button: function(objId, callBack){
		if(Shared.__is_empty(objId))
			return;
		var objId = "#" + objId;
		if(!$(objId).length){
			var objId = objId.replace("#", ".");
		}
        if($(objId).length){
            $(objId).on('click', function(){
                callBack();
            });
        }
	},
	__ajax: function(obj, config, callBack){
		if(Shared.__is_empty(config.action))
			return;
		var action     = config.action;
		var data       = config.data || null;
		$.ajax({
		    type  : "POST",
		    url   : action,
		    data  : data,
		    success: function (result) {
		    	if(!Shared.__is_empty(callBack)){
		    		callBack(result);
		    	}
		    },
		});
	}
}