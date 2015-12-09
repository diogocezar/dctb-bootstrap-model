Translate = {
	currentLang : null,
	config : {
		selector  : 'translate',
		cookieVar : 'DCFrontModelLang'
	},
    init: function(config){
    	var config      = config || Translate.config;
        $('.' + config.selector).on('click', function(){
            var obj = $(this);
            if(!Shared.__is_empty(obj.data('lang'))){
            	Translate.go(obj.data('lang'));
            	Translate.setLanguage(obj.data('lang'), config);
        	}
        });
        Translate.start();
    },
    go: function(lang){
        $('*').each(function(){
            var obj  = $(this);
            var text = obj.data(lang);
            if(obj.is('input') || obj.is('textarea')){
                if(!Shared.__is_empty(text)){
                    obj.attr("placeholder", text);
                }
            }
            else if(obj.is('img')){
                if(!Shared.__is_empty(text)){
                    obj.attr("src", "./images/" + text);
                }
            }
            else{
                if(!Shared.__is_empty(text)){
                    obj.empty().html(text);
                }
            }
        });
        Shared.Debug.log("Translate Called");
    },
    setLanguage: function(lang, config){
    	var config = config || Translate.config;
    	Translate.currentLang = lang;
    	Cookie.set(config.cookieVar, lang);
    },
    getLanguage: function(config){
    	var config = config || Translate.config;
    	return Cookie.get(config.cookieVar);
    },
    start: function(){
    	var lang = Translate.getLanguage();
    	if(!Shared.__is_empty(lang)){
    		Translate.currentLang = lang;
            Translate.go(lang);
    	}
    }
}

$(document).ready(function () {
    Translate.init();
});