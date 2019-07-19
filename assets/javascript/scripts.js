$('.nav-link').click(function () {

    var sec = $(this).attr('data-section');

    $('html, body').animate({
        scrollTop: ($(sec).offset().top)
    }, 500);

    console.log('scroll to ', sec);

    return false;
})

