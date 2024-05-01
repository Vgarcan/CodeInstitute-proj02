(function($) {
    $("#player, #banner").fadeIn(1000);
    $("#player, #banner").fadeIn(1000);
    setTimeout(function() {
        $('#player-display').slideToggle(750);
    }, 2000);

    $('.btn').on('click', function() {
        $('#lists-display').slideToggle(750);
        $('#player-display').slideToggle(750);
        $('#happy-lemon').fadeToggle(1000);
        $('#arrow-lists').fadeToggle(1000);
    });

})(jQuery);