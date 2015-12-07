<<<<<<< HEAD
Menu = {
    init: function(){
    	Menu.setButtons();
        Menu.setActions();
    },
    setActions: function(){
         $(".menu-item a").on('click', function(event){
            event.preventDefault();
            var el = $(this);
            PageScroll.scroll(el.attr('href'), 80);
            if(el.parent().hasClass('close-after-click'))
                Menu.closeMenu(event);
        });
    },
    setButtons: function(){
        Shared.__set_button("open-menu", function(event){Menu.openMenu(event)});
        Shared.__set_button("close-menu", function(event){Menu.closeMenu(event)});
    },
    openMenu: function(event){
        event.preventDefault();
        $(".menu-open").slideToggle("slow");
        $(".icon-opened").hide();
        $(".icon-closed").show();
    },
    closeMenu: function(event){
        event.preventDefault();
        $(".menu-open").slideToggle("slow");
        $(".icon-closed").hide();
        $(".icon-opened").show();
    }
}

$(document).ready(function() {
    Menu.init();
=======
Menu = {
    init: function(){
    	Menu.setButtons();
    },
    setButtons: function(){
        Shared.__set_button("open-menu",  function(event){Menu.openMenu(event)});
        Shared.__set_button("close-menu", function(event){Menu.closeMenu(event)});
    },
    openMenu: function(event){
        event.preventDefault();
        $(".menu-open").slideToggle("slow");
        $(".icon-opened").hide();
        $(".icon-closed").show();
    },
    closeMenu: function(event){
        event.preventDefault();
        $(".menu-open").slideToggle("slow");
        $(".icon-closed").hide();
        $(".icon-opened").show();
    }
}

$(document).ready(function() {
    Menu.init();
>>>>>>> origin/master
});