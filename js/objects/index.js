Index = {
    init: function(){
    	Index.setButtons();
    },
    setButtons: function(){
    	Shared.__set_button("btn-send", function(){
    		Validation.check(function(){
    			Shared.Debug.log('Form Submitted Successfully');
    		});
    	});
    	Shared.__set_button("btn-change", function(){UrlChange.change('teste')});
    }
}

$(document).ready(function() {
    Index.init();
});