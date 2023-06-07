


$('.overlay-menu ul li a').click(function() {
    $('.button_container:visible').click();
});



$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


$('.toggle').click(function() {
    if ($('#overlay.open')) {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    }
});




