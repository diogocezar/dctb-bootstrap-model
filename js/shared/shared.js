Shared = {
	Debug: {
		debugMode : true,
		constant  : '[DCFRONT] ',
		log: function(msg){
			if(Shared.Debug.debugMode)
				console.log(Shared.Debug.constant + msg);
		},
		error: function(msg){
			if(Shared.Debug.debugMode)
				console.error(Shared.Debug.constant + msg);
		},
		info: function(msg){
			if(Shared.Debug.debugMode)
				console.info(Shared.Debug.constant + msg);
		}
	},
	__is_empty: function(val){
		return (val == "" || val == null || val == undefined);
	},
	__set_button: function(objId, callBack, params){
		if(Shared.__is_empty(objId))
			return;
		var objId = "#" + objId;
		if(!$(objId).length){
			var objId = objId.replace("#", ".");
		}
        if($(objId).length){
        	if(!Shared.__is_empty(params)){
	            $(objId).on('click', params, function(params){
	                callBack(params);
	            });
        	}
        	else{
	            $(objId).on('click', function(event){
	                callBack(event);
	            });
        	}
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