(function($) {
    $('.btn').on('click', function() {
        $('#lists-display').slideToggle(750);
        $('#player-display').slideToggle(750);
        $('#happy-lemon').fadeToggle(1000);
    });

    $("#lemon-selection").change(function() {
        $('#lists-display').slideToggle(750);
        $('#player-display').slideToggle(750);
        $('#happy-lemon').fadeToggle(1000);

    });
})(jQuery);