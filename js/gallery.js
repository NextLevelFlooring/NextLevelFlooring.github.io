$( document ).ready(function() {
    $('.gallery ul li a').click(function() {
        var itemID = $(this).attr('href');
        $('.gallery ul').addClass('item_open');
        $(itemID).addClass('item_open');
        return false;
    });
    $('.close').click(function() {
        $('.port, .gallery ul').removeClass('item_open');
        return false;
    });

    $(".gallery ul li a").click(function() {
        $('html, body').animate({
            scrollTop: parseInt($("#top").offset().top) - $(".navbar").outerHeight()
        }, 400);
    });

    $('.slideshow').square1({
        theme: 'light',
        animation: 'slide',
        height: '400px',
        dots_nav: 'inside',
    });
});