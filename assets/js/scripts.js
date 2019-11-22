$(function() {
    
    var handle_menu = function(){

        var button = $('#menu-toggler'),
            items = $('#site-nav__items');

        button.on('click', function(){
            items.toggleClass('collapsed');
        });

    };

    handle_menu();

});
