Paralax = {
    init: function(){
        $('.paralax').each(function(){
            var obj     = $(this);
            var start   = obj.data('start');
            var end     = obj.data('end');
            var speed   = obj.data('speed');
            $(window).scroll(function() {
                var height = $(window).height();
                var width  = $(window).width();
                var adjust = obj.data('adjustment');
                var yPos   = -(((($(window).scrollTop() - obj.offset().top) / obj.data('speed')) + adjust));
                var coords = '50% '+ yPos + 'px';
                if(width>500 && Paralax.isScrolledIntoView(start, end))
                    obj.css({ backgroundPosition: coords });
            });
        });
    },
    isScrolledIntoView: function(start, end){
        var $window = $(window);
        var docViewTop = $window.scrollTop();
        return (docViewTop > start && docViewTop < end);
    }
}

$(document).ready(function() {
    if(!Mobile.isMobile){
        Paralax.init();
    }
});