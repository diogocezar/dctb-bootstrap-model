<<<<<<< HEAD
Index = {
    init: function(){
    	Index.setButtons();
        Index.assignMaps();
        Index.assignMobile();
        Index.assignPops();
        Index.assignPageScroll();
    },
    assignMaps: function(){
        var maps = [
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
        ];
        Maps.configure(maps);
    },
    assignMobile: function(){
        Mobile.configure();
    },
    assignPops: function(){
        var pops = [
            {
                id    : 'id-popup-1',
                open  : 'btn-open-popup-1',
                close : 'btn-close-popup-1'
            },
            {
                id    : 'id-popup-2',
                open  : 'btn-open-popup-2',
                close : 'btn-close-popup-2'
            }
        ];
        PopUp.configure(pops);
    },
    assignPageScroll: function(){
        SizeControl.configure(function(){
            Shared.Debug.log('Implements Resize Here');
        });
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
=======
Index = {
    init: function(){
    	Index.setButtons();
        Index.assignMaps();
        Index.assignMobile();
        Index.assignPops();
        Index.assignPageScroll();
    },
    assignMaps: function(){
        var maps = [
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
        ];
        Maps.configure(maps);
    },
    assignMobile: function(){
        Mobile.configure();
    },
    assignPops: function(){
        var pops = [
            {
                id    : 'id-popup-1',
                open  : 'btn-open-popup-1',
                close : 'btn-close-popup-1'
            },
            {
                id    : 'id-popup-2',
                open  : 'btn-open-popup-2',
                close : 'btn-close-popup-2'
            }
        ];
        PopUp.configure(pops);
    },
    assignPageScroll: function(){
        SizeControl.configure(function(){
            Shared.Debug.log('Implements Resize Here');
        });
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
>>>>>>> origin/master
});