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

 $("#regiones").change(function(){
    console.log("value", $(this).val());
    $("#comunas").html("<option value='null'>Cargando...</option>");
    loadComuna($(this).val());
});

 $("#comunas").change(function(){
    console.log("value", $(this).val());

    $(".placeholder").hide();
    $("#sucursalesList").show();

    loadSucursales("Antofagasta");

});

 function loadRegiones() {
    $("#regiones").html("");
    var options = "";
    $.ajax({
        // url: "http://localhost:3000/ciudades",
        url: "http://localhost:8080/sucursalBL/regiones",
        // type: 'GET',
        contentType: "application/json; charset=utf-8",
        dataType   : "json",
        type: 'POST',
        data: JSON.stringify({
            "pais":"CL",
            "comuna":"Antofagasta"
        }),
    }).then(function (data) {
        // console.log('DATA 1', data);
        var regiones = data;
        $.each(regiones, function(key, value) {
            console.log("value", value.codigoRegion);
            options = options + "<option value='" + value.codigoRegion + "'>" + value.nombreRegion + "</option>";
        });
        console.log('dom', options);
        $("#regiones").append(options);
    });
}

function loadComuna(region) {
    $("#comunas").html("");
    var options = "";
    _region = region ? region : "Antofagasta";
    $.ajax({
        // url: "http://localhost:3000/ciudades",
        url: "http://localhost:8080/sucursalBL/comunas",
        // type: 'GET',
        contentType: "application/json; charset=utf-8",
        dataType   : "json",
        type: 'POST',
        data: JSON.stringify({
            "pais":"CL",
            "comuna": _region
        }),
    }).then(function (data) {
        // console.log('DATA 2', data);
        var comunas = data;
        $.each(comunas, function(key, value) {
            console.log("value", value.codigoRegion);
            options = options + "<option value='" + value.codigoRegion + "'>" + value.nombreComuna + "</option>";
        });
        console.log('dom', options);
        $("#comunas").append(options);
    });
}

function loadSucursales(comuna) {
    var options = "";
    $.ajax({
        // url: "http://localhost:3000/ciudades",
        url: "http://localhost:8080/sucursalBL/sucursal",
        // type: 'GET',
        contentType: "application/json; charset=utf-8",
        dataType   : "json",
        type: 'POST',
        data: JSON.stringify({
            "pais":"CL",
            "comuna":comuna
        }),
    }).then(function (data) {
        console.log('AGENCIES', data.agencies.length);
        var agencias = data.agencies;
        $.each(agencias, function(key, sucursal) {
            console.log("value", sucursal);
            options = options + '<tr><td>'
            + sucursal.location.state_name
            + '</td><td>'
            + sucursal.agency_name
            + '</td><td>'
            + sucursal.location.street_name + ' ' + sucursal.location.street_number
            + '</td><td>'
            + '+56 8383 475 374</td><td>'
            + '<i class="fas fa-map-marker maploader" onclick="loadMap()"></i></td></tr>';
        });

        // console.log('dom', options);

        $("#sucursalesData tbody").append(options);
    });
}


function loadMap() {
    $('#sucursalesModal').modal('show');
    launchMap();

      $('#sucursalesModal').on('shown.bs.modal', function (event) {
                var datos = "<p>"
              + "<strong>Direccion:</strong> <span>{{sucursal?.location.street_name}}</span> <span>{{sucursal?.location.street_number}}</span>"
            + "</p>"
            + "<p>"
              + "<strong>Telefonos:</strong> <a href=''>+56 7346 3736</a>, <a href=''>+56 7346 3736</a>"
            + "</p>"
            + "<p>"
              + "<strong>Horarios de atencion:</strong>"
            + "</p>"
            + "<ul class=sucursales>"
              + "<li>"
                + "Lunes"
                + "<span>De {{sucursal?.open_hours.monday[0].from}} a {{sucursal?.open_hours.monday[0].to}}</span>,"
              + "</li>"
              + "<li>"
                + "Martes"
                + "<span>De {{sucursal?.open_hours.monday[0].from}} a {{sucursal?.open_hours.monday[0].to}}</span>,"
              + "</li>"
              + "<li>"
                + "Miercoles"
                + "<span>De {{sucursal?.open_hours.monday[0].from}} a {{sucursal?.open_hours.monday[0].to}}</span>,"
              + "</li>"
              + "<li>"
                + "Jueves"
                + "<span>De {{sucursal?.open_hours.monday[0].from}} a {{sucursal?.open_hours.monday[0].to}}</span>,"
              + "</li>"
              + "<li>"
                + "Viernes"
                + "<span>De {{sucursal?.open_hours.monday[0].from}} a {{sucursal?.open_hours.monday[0].to}}</span>,"
              + "</li>"
            + "</ul>";
            $(".datos").html(datos);
    launchMap();
  })

}