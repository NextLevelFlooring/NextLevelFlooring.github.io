$( document ).ready(function() {
    $('.gallery .container .row .col-sm a').click(function() {
        var itemID = $(this).attr('href');
        $('.gallery ul').addClass('item_open');
        $(itemID).addClass('item_open');
        return false;
    });
    $('.close').click(function() {
        $('.port, .gallery ul').removeClass('item_open');
        return false;
    });

    $(".gallery .container .row .col-sm a").click(function() {
        $('html, body').animate({
            scrollTop: parseInt($("#top").offset().top) - $(".navbar").outerHeight()
        }, 400);
    });

    $('.slideshow').each(function(index) {
        $( this ).square1({
            theme: 'light',
            animation: 'slide',
            height: '400px',
            dots_nav: 'inside',
        });
    });

    $("#container1").twentytwenty(
        {
            default_offset_pct: 0.5
        }
    );
});