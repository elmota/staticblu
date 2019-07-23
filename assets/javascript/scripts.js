$('.nav-link').click(function () {

    var sec = $(this).attr('data-section');

    $('html, body').animate({
        scrollTop: ($(sec).offset().top)
    }, 500);

    // console.log('scroll to ', sec);

    return false;
})

$('#form-nav a').click(function () {
    var form = 'contacto/' + $(this).attr('data-form') + '.html';

    // console.log(form);

    $('#forms').load(form);

    return false;
});

$('#ejecutivoForm button[type=submit]').click(function () {
    // return false;
});

/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ES (Spanish; Español)
 */
$.extend($.validator.messages, {
    required: "Este campo es obligatorio.",
    remote: "Por favor, rellena este campo.",
    email: "Por favor, escribe una dirección de correo válida.",
    url: "Por favor, escribe una URL válida.",
    date: "Por favor, escribe una fecha válida.",
    dateISO: "Por favor, escribe una fecha (ISO) válida.",
    number: "Por favor, escribe un número válido.",
    digits: "Por favor, escribe sólo dígitos.",
    creditcard: "Por favor, escribe un número de tarjeta válido.",
    equalTo: "Por favor, escribe el mismo valor de nuevo.",
    extension: "Por favor, escribe un valor con una extensión aceptada.",
    maxlength: $.validator.format("Por favor, no escribas más de {0} caracteres."),
    minlength: $.validator.format("Por favor, no escribas menos de {0} caracteres."),
    rangelength: $.validator.format("Por favor, escribe un valor entre {0} y {1} caracteres."),
    range: $.validator.format("Por favor, escribe un valor entre {0} y {1}."),
    max: $.validator.format("Por favor, escribe un valor menor o igual a {0}."),
    min: $.validator.format("Por favor, escribe un valor mayor o igual a {0}."),
    nifES: "Por favor, escribe un NIF válido.",
    nieES: "Por favor, escribe un NIE válido.",
    cifES: "Por favor, escribe un CIF válido."
});

$("#ejecutivoForm").validate();
$("#coberturaForm").validate();
$("#materialesForm").validate();

$('.navigate').click(function () {
    var page = 'servicios/' + $(this).attr('data-loc') + '.html';

    window.location = page;
});


function loadSucursales() {
    $.ajax({
        url: "http://localhost:3000/ciudades",
        // url: "http://192.168.101.10:8080/sucursales",
        type: 'GET',
        // type: 'POST',
        // data: $.param({
        //     "pais":"CL",
        //     "comuna":"Antofagasta"
        //   }),
    }).then(function (data) {
        console.log('DATA', data);
    });
}