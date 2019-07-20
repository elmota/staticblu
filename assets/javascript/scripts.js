$('.nav-link').click(function () {

    var sec = $(this).attr('data-section');

    $('html, body').animate({
        scrollTop: ($(sec).offset().top)
    }, 500);

    console.log('scroll to ', sec);

    return false;
})

$('#form-nav a').click(function () {
    var form = 'contacto/' + $(this).attr('data-form') + '.html';

    console.log(form);

    $('#forms').load(form);

    return false;
});

$('.eje').click(function () {
    console.log('D;');

    return false;
});