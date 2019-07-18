(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n  <a class=\"navbar-brand\">\n    <img src=\"./../assets/img/logo_blue.png\" alt=\"Bluexpress\" class=\"logo\">\n  </a>\n  <button class=\"navbar-toggler\" data-target=\"#my-nav\" data-toggle=\"collapse\" aria-controls=\"my-nav\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div id=\"my-nav\" class=\"collapse navbar-collapse justify-content-between\">\n    <ul class=\"navbar-nav justify-content-end nav\">\n      <li></li>\n    </ul>\n    <ul class=\"navbar-nav justify-content-end nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"scrollToTop('#seguimiento')\">Seguimiento</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"scrollToTop('#sucursales')\">Sucursales <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"scrollToTop('#servicios')\">Servicios</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"scrollToTop('#info')\">Informacion Cliente</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"scrollToTop('#nosotros')\">Nosotros</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"scrollToTop('#contacto')\">Contactenos</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/_contacto/cobertura/cobertura.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/_contacto/cobertura/cobertura.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"container\" id=\"info\">\n        <div class=\"well conta clearfix\">\n            <h3>Consulta de Cobertura</h3>\n            <span class=\"txtCamposObligatorios\">(*) Campos Obligatorios</span>\n            <hr>\n            <div class=\"col-md-10\">\n                <div class=\"form\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label for=\"\">Nombre (*)</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Ingrese su Nombre\"\n                                    name=\"nombreCliente\" id=\"nombreCliente\">\n                                <span id=\"msgNombre\" class=\"msgValidacion\"> </span>\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label for=\"\">Apellido (*)</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Ingrese su Apellido\"\n                                    name=\"apellidoCliente\" id=\"apellidoCliente\">\n                                <span id=\"msgApellido\" class=\"msgValidacion\"> </span>\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label for=\"\">Teléfono (*)</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Ingrese su Teléfono\"\n                                    name=\"telefonoCliente\" id=\"telefonoCliente\">\n                                <span id=\"msgFono\" class=\"msgValidacion\"> </span>\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label for=\"\">Correo Electrónico (*)</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Ingrese su Correo Electrónico\"\n                                    name=\"emailCliente\" id=\"emailCliente\">\n                                <span id=\"msgEmail\" class=\"msgValidacion\"> </span>\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                    </div><!-- /.row -->\n                    <div class=\"form-group\">\n                        <label for=\"\">Consultas (*)</label>\n                        <textarea name=\"detalle\" id=\"detalle\" cols=\"30\" rows=\"4\" class=\"form-control\"\n                            placeholder=\"Escriba su consulta\"></textarea>\n                        <span id=\"msgDetalle\" class=\"msgValidacion\"> </span>\n                    </div><!-- /.form-group -->\n                    <div class=\"form-group\">\n                        <a class=\"btn btn-block btn-primary btn-lg\" onclick=\"enviarForm()\">Enviar Consulta</a>\n                    </div><!-- /.form-group -->\n                </div><!-- /.form -->\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/_contacto/ejecutivos/ejecutivos.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/_contacto/ejecutivos/ejecutivos.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"container\" id=\"info\">\n\n        <div class=\"well conta clearfix\">\n            <div class=\"col-md-10\">\n\n                <h3>Solicitud de Ejecutivo</h3>\n                <span class=\"txtCamposObligatorios\">(*) Campos Obligatorios</span>\n\n\n                <hr>\n                <div class=\"form\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <legend>Datos del Solicitante</legend>\n                        </div><!-- /.col-md-12 -->\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label for=\"\">Rut Empresa</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Ingrese Rut de la empresa\"\n                                    name=\"rutEmpresa\" id=\"rutEmpresa\">\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label for=\"\">Razón Social</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Ingrese Razón Social\"\n                                    name=\"razonSocial\" id=\"razonSocial\">\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n\n                        <div class=\"col-md-12\">\n                            <legend>Datos del Contacto</legend>\n                        </div><!-- /.col-md-12 -->\n\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label for=\"\">Nombre (*)</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Nombre\" name=\"nombreCliente\"\n                                    id=\"nombreCliente\">\n                                <span id=\"msgNombre\" class=\"msgValidacion\"> </span>\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-12 -->\n\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label for=\"\">Apellido (*)</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Apellido\" name=\"apellidoCliente\"\n                                    id=\"apellidoCliente\">\n                                <span id=\"msgApellido\" class=\"msgValidacion\"> </span>\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-12 -->\n\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label for=\"\">Teléfono (*)</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Teléfono\" name=\"telefonoCliente\"\n                                    id=\"telefonoCliente\">\n                                <span id=\"msgFono\" class=\"msgValidacion\"> </span>\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-12 -->\n\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label for=\"\">Email (*)</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Email\" name=\"emailCliente\"\n                                    id=\"emailCliente\">\n                                <span id=\"msgEmail\" class=\"msgValidacion\"> </span>\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-12 -->\n\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group\">\n                                <label for=\"\">Tipo de Requerimiento</label>\n                                <select class=\"form-control\" name=\"tipoReq\" id=\"tipoReq\">\n                                    <option value=\"\">Distribución Nacional</option>\n                                    <option value=\"\">Distribución Interacional</option>\n                                    <option value=\"\">Almacenaje</option>\n                                    <option value=\"\">Otros</option>\n                                </select>\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-12 -->\n\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group\">\n                                <label for=\"observaciones\">Observaciones (*)</label>\n                                <textarea name=\"observaciones\" id=\"observaciones\" cols=\"30\" rows=\"4\"\n                                    class=\"form-control\"></textarea>\n                                <span id=\"msgObservaciones\" class=\"msgValidacion\"> </span>\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-12 -->\n\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group\">\n                                <a class=\"btn btn-block btn-primary btn-lg\" onclick=\"enviarForm()\">Enviar Solicitud</a>\n\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-12 -->\n\n                    </div><!-- /.row -->\n                </div>\n\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/_contacto/materiales/materiales.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/_contacto/materiales/materiales.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"container\" id=\"info\">\n\n        <div class=\"well conta clearfix\">\n            <h3>Solicitud de Materiales</h3>\n            <span class=\"txtCamposObligatorios\">(*) Campos Obligatorios</span>\n            <hr>\n            <div class=\"col-md-9 col-md-offset-1\">\n                <div class=\"form\">\n\n                    <div class=\"row\">\n\n                        <div class=\"col-md-12\">\n                            <legend>Datos del Cliente</legend>\n                        </div><!-- /.col-md-12 -->\n\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label for=\"\">Rut Cliente</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Rut Cliente\" id=\"rutCliente\"\n                                    name=\"rutCliente\">\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label for=\"\">Cuenta Corriente (*)</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Cuenta Corriente\" id=\"ctaCliente\"\n                                    name=\"ctaCliente\">\n                                <span id=\"msgCtaCliente\" class=\"msgValidacion\"> </span>\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group\">\n                                <label for=\"\">Razón Social</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Razón Social\" id=\"razonSocial\"\n                                    name=\"razonSocial\">\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n\n                        <div class=\"col-md-12\">\n                            <legend>Datos del Contacto</legend>\n                        </div><!-- /.col-md-12 -->\n\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label for=\"\">Nombre (*)</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Nombre\" id=\"nombreCliente\"\n                                    name=\"nombreCliente\">\n                                <span id=\"msgNombre\" class=\"msgValidacion\"> </span>\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-12 -->\n\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label for=\"\">Apellido (*)</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Apellido\" id=\"apellidoCliente\"\n                                    name=\"apellidoCliente\">\n                                <span id=\"msgApellido\" class=\"msgValidacion\"> </span>\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-12 -->\n\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label for=\"\">Teléfono (*)</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Teléfono\" id=\"telefonoCliente\"\n                                    name=\"telefonoCliente\">\n                                <span id=\"msgFono\" class=\"msgValidacion\"> </span>\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-12 -->\n\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label for=\"\">Email (*)</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Email\" id=\"emailCliente\"\n                                    name=\"emailCliente\">\n                                <span id=\"msgEmail\" class=\"msgValidacion\"> </span>\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-12 -->\n\n                        <div class=\"col-md-12\">\n                            <legend>Dirección</legend>\n                        </div><!-- /.col-md-12 -->\n\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group\">\n                                <label for=\"\">Dirección del Envío</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Dirección del Envío\"\n                                    id=\"direccionEnvio\" name=\"direccionEnvio\">\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-12 -->\n\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group\">\n                                <label for=\"\">Dirección de Impresión</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Dirección de Impresión\"\n                                    id=\"direccionImpresion\" name=\"direccionImpresion\">\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-12 -->\n\n                        <div class=\"col-md-9\">\n                            <div class=\"form-group\">\n                                <div class=\"checkbox\"><label for=\"input_01\"><input type=\"checkbox\"\n                                            name=\"chkOrdenServicio\" id=\"chkOrdenServicio\">Orden de Servicio</label>\n                                </div><!-- /.checkbox -->\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-3\">\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Cantidad\" id=\"cantOrdenServicio\"\n                                    name=\"cantOrdenServicio\">\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-9\">\n                            <div class=\"form-group\">\n                                <div class=\"checkbox\"><label for=\"input_02\"><input type=\"checkbox\" name=\"chkVentanas\"\n                                            id=\"chkVentanas\">Ventanas</label></div><!-- /.checkbox -->\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-3\">\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Cantidad\" id=\"cantVentanas\"\n                                    name=\"cantVentanas\">\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-9\">\n                            <div class=\"form-group\">\n                                <div class=\"checkbox\"><label for=\"input_03\"><input type=\"checkbox\" name=\"chkEtiquetas24\"\n                                            id=\"chkEtiquetas24\">Etiquetas 24 Horas</label></div><!-- /.checkbox -->\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-3\">\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Cantidad\" id=\"cantEtiquetas24\"\n                                    name=\"cantEtiquetas24\">\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-9\">\n                            <div class=\"form-group\">\n                                <div class=\"checkbox\"><label for=\"input_04\"><input type=\"checkbox\"\n                                            name=\"chkEtiquetasFragil\" id=\"chkEtiquetasFragil\">Etiquetas Frágil</label>\n                                </div><!-- /.checkbox -->\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-3\">\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Cantidad\" id=\"cantEtiquetasFragil\"\n                                    name=\"cantEtiquetasFragil\">\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-9\">\n                            <div class=\"form-group\">\n                                <div class=\"checkbox\"><label for=\"input_05\"><input type=\"checkbox\"\n                                            name=\"chkEtiquetasPos\" id=\"chkEtiquetasPos\">Etiquetas de Posición</label>\n                                </div><!-- /.checkbox -->\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-3\">\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Cantidad\" id=\"cantEtiquetasPos\"\n                                    name=\"cantEtiquetasPos\">\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-9\">\n                            <div class=\"form-group\">\n                                <div class=\"checkbox\"><label for=\"input_06\"><input type=\"checkbox\" name=\"chkEtiquetasSG\"\n                                            id=\"chkEtiquetasSG\">Etiquetas S&amp;G</label></div><!-- /.checkbox -->\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-3\">\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Cantidad\" id=\"cantEtiquetasSG\"\n                                    name=\"cantEtiquetasSG\">\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-9\">\n                            <div class=\"form-group\">\n                                <div class=\"checkbox\"><label for=\"input_07\"><input type=\"checkbox\"\n                                            name=\"chkEtiquetasMercanciasPel\" id=\"chkEtiquetasMercanciasPel\">Etiquetas\n                                        Mercancia Peligrosa</label></div><!-- /.checkbox -->\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-3\">\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Cantidad\"\n                                    id=\"cantEtiquetasMercanciasPel\" name=\"cantEtiquetasMercanciasPel\">\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-9\">\n                            <div class=\"form-group\">\n                                <div class=\"checkbox\"><label for=\"input_08\"><input type=\"checkbox\"\n                                            name=\"chkEtiquetasOver\" id=\"chkEtiquetasOver\">Etiquetas Overnight</label>\n                                </div><!-- /.checkbox -->\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-3\">\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Cantidad\" id=\"cantEtiquetasOver\"\n                                    name=\"cantEtiquetasOver\">\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-9\">\n                            <div class=\"form-group\">\n                                <div class=\"checkbox\"><label for=\"input_09\"><input type=\"checkbox\"\n                                            name=\"chkEtiquetasRefr\" id=\"chkEtiquetasRefr\">Etiquetas Refrigerados</label>\n                                </div><!-- /.checkbox -->\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-3\">\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Cantidad\" id=\"cantEtiquetasRefr\"\n                                    name=\"cantEtiquetasRefr\">\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-9\">\n                            <div class=\"form-group\">\n                                <div class=\"checkbox\"><label for=\"input_10\"><input type=\"checkbox\"\n                                            name=\"chkEtiquetaTerrestre\" id=\"chkEtiquetaTerrestre\">Etiqueta\n                                        Terrestre</label></div><!-- /.checkbox -->\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-3\">\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Cantidad\"\n                                    id=\"cantEtiquetaTerrestre\" name=\"cantEtiquetaTerrestre\">\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-9\">\n                            <div class=\"form-group\">\n                                <div class=\"checkbox\"><label for=\"input_11\"><input type=\"checkbox\"\n                                            name=\"chkEtiquetaAereo\" id=\"chkEtiquetaAereo\">Etiqueta Áereo</label></div>\n                                <!-- /.checkbox -->\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-3\">\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Cantidad\" id=\"cantEtiquetaAereo\"\n                                    name=\"cantEtiquetaAereo\">\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-9\">\n                            <div class=\"form-group\">\n                                <div class=\"checkbox\"><label for=\"input_12\"><input type=\"checkbox\"\n                                            name=\"chkCertificadoMercanciasPel\"\n                                            id=\"chkCertificadoMercanciasPel\">Certificado de Mercancia Peligrosa</label>\n                                </div><!-- /.checkbox -->\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-3\">\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Cantidad\"\n                                    id=\"cantCertificadoMercanciasPel\" name=\"cantCertificadoMercanciasPel\">\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-9\">\n                            <div class=\"form-group\">\n                                <div class=\"checkbox\"><label for=\"input_13\"><input type=\"checkbox\"\n                                            name=\"chkBolsasFlyers\" id=\"chkBolsasFlyers\">Bolsas o Flyers</label></div>\n                                <!-- /.checkbox -->\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-3\">\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Cantidad\" id=\"cantBolsasFlyers\"\n                                    name=\"cantBolsasFlyers\">\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-9\">\n                            <div class=\"form-group\">\n                                <div class=\"checkbox\"><label for=\"input_14\"><input type=\"checkbox\" name=\"chkCajasJumbo\"\n                                            id=\"chkCajasJumbo\">Caja de Carton Jumbo</label></div><!-- /.checkbox -->\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-3\">\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Cantidad\" id=\"cantCajasJumbo\"\n                                    name=\"cantCajasJumbo\">\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-9\">\n                            <div class=\"form-group\">\n                                <div class=\"checkbox\"><label for=\"input_15\"><input type=\"checkbox\"\n                                            name=\"chkSobresCarton\" id=\"chkSobresCarton\">Sobres de Cartón</label></div>\n                                <!-- /.checkbox -->\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-3\">\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Cantidad\" id=\"cantSobresCarton\"\n                                    name=\"cantSobresCarton\">\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-9\">\n                            <div class=\"form-group\">\n                                <div class=\"checkbox\"><label for=\"input_16\"><input type=\"checkbox\"\n                                            name=\"chkEtiquetasSega\" id=\"chkEtiquetasSega\">Etiquetas Sega</label></div>\n                                <!-- /.checkbox -->\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-3\">\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Cantidad\" id=\"cantEtiquetasSega\"\n                                    name=\"cantEtiquetasSega\">\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-6 -->\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group\">\n                                <label for=\"observaciones\">Observaciones (*)</label>\n                                <textarea name=\"observaciones\" id=\"observaciones\" cols=\"30\" rows=\"4\"\n                                    class=\"form-control\"></textarea>\n                                <span id=\"msgObservaciones\" class=\"msgValidacion\"> </span>\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-12 -->\n\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group\">\n                                <a class=\"btn btn-block btn-primary btn-lg\" onclick=\"enviarForm()\">Enviar Solicitud</a>\n                            </div><!-- /.form-group -->\n                        </div><!-- /.col-md-12 -->\n\n                    </div><!-- /.row -->\n\n                </div>\n            </div>\n        </div>\n\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/_contacto/menu/menu.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/_contacto/menu/menu.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row menu\">\n    <div class=\"col-md-12\">\n        <ul class=\"list-group\">\n                <a class=\"list-group-item list-group-item-action\" (click)=\"contactTo('ejecutivos')\">Solicitud de Ejecutivo</a>\n                <a class=\"list-group-item list-group-item-action\" (click)=\"contactTo('servicio')\">Inquietudes por Servicio</a>\n                <a class=\"list-group-item list-group-item-action\" (click)=\"contactTo('cobertura')\">Consulta de Cobertura</a>\n                <a class=\"list-group-item list-group-item-action\" (click)=\"contactTo('materiales')\">Solicitud de Materiales</a>\n                <a class=\"list-group-item list-group-item-action\" (click)=\"contactTo('trabaje')\">Trabaje en Blu Express</a>\n        </ul>\n        <!-- <ul>\n            <li>\n                <a (click)=\"contactTo('ejecutivos')\">Solicitud de Ejecutivo</a>\n            </li>\n            <li>\n                <a (click)=\"contactTo('servicio')\">servicio</a>\n            </li>\n            <li>\n                <a (click)=\"contactTo('cobertura')\">Consulta de Cobertura</a>\n            </li>\n            <li>\n                <a (click)=\"contactTo('materiales')\">Solicitud de Materiales</a>\n            </li>\n            <li>\n                <a (click)=\"contactTo('trabaje')\">trabaje</a>\n            </li>\n        </ul> -->\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/_contacto/servicio/servicio.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/_contacto/servicio/servicio.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"container\" id=\"info\">\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/_contacto/trabaje/trabaje.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/_contacto/trabaje/trabaje.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"container\" id=\"info\">\n\n        <div class=\"journal-content-article\" id=\"article_10154_160123_161004_2.0\">\n            <h2>\n                <strong>Trabaja en Blue Express</strong></h2>\n            <p>\n                &nbsp;</p>\n            <p style=\"text-align: justify;\">\n                En Blue Express, la red de distribución de carga más amplia del país, contamos con equipos altamente\n                calificados y comprometidos con la eficiencia y los servicios que buscan nuestros clientes.</p>\n            <p style=\"text-align: justify;\">\n                Para mantener esta posición de liderazgo en el mercado nacional, permanentemente estamos buscando que\n                las mejores personas sean parte de nuestro equipo, pues son el elemento esencial que requiere la mejor\n                red de servicios de outsourcing en logística y distribución del país.</p>\n            <p style=\"text-align: justify;\">\n                Te invitamos a formar parte de nuestra compañía, enviando tu currículum al e-mail: <a\n                    href=\"mailto:reclutamiento@bluex.cl\">reclutamiento@bluex.cl</a>.</p>\n            <p style=\"text-align: justify;\">\n                &nbsp;</p>\n            <p style=\"text-align: justify;\">\n                <strong><span style=\"font-size:14px;\">¿Deseas ser agente de&nbsp;Blue Express?</span></strong></p>\n            <p style=\"text-align: justify;\">\n                Sólo debe llamar a los teléfonos:&nbsp;+5626990238&nbsp;+5622904000&nbsp;o envía un mail a&nbsp;<a\n                    href=\"mailto:jibanez@bx.cl\">jibanez@bx.cl</a></p>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/_nosotros/historia/historia.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/_nosotros/historia/historia.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>historia works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/_nosotros/integracion/integracion.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/_nosotros/integracion/integracion.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"container main\" id=\"valores\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"center gap fade-down section-heading no-display animated fadeInDown appear\">\n                    <h2 class=\"main-title\">Integración Web Services</h2>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"sectionContent\">\n            <div class=\"journal-content-article\" id=\"article_10154_160123_161103_1.0\">\n                <h2 style=\"text-align: justify;\">\n                    Servicios de Integración Blue Express</h2>\n                <p style=\"text-align: justify;\">\n                    Blue Express tiene disponible para sus clientes servicios de integración mediante tecnología SOA\n                    (Arquitectura Orientada a Servicios).</p>\n                <h3 style=\"text-align: justify;\">\n                    ¿Qué es un Web Services?</h3>\n                <div>\n                    <p style=\"text-align: justify;\">\n                        Es una tecnología estandarizada que nos permite intercambiar datos entre distintas aplicaciones\n                        que pueden estar desarrolladas en lenguajes de programación diferentes.</p>\n                    <h3 style=\"text-align: justify;\">\n                        Ventajas de un Web Services</h3>\n                    <p style=\"text-align: justify;\">\n                        Principalmente nos aporta interoperabilidad entre aplicaciones&nbsp; independiente de la\n                        plataforma sobre las que se instalen.</p>\n                    <h3 style=\"text-align: justify;\">\n                        Disponibilidad</h3>\n                    <p style=\"text-align: justify;\">\n                        Los servicios se encuentran disponible 7x24&nbsp; siendo monitoreados por el área de IT de Blue\n                        Express.</p>\n                    <h3 style=\"text-align: justify;\">\n                        Requisitos Cliente</h3>\n                    <ol>\n                        <li style=\"text-align: justify;\">\n                            <span style=\"line-height: 1.4;\">Entregar IP / HOST desde donde se realizaran las\n                                integraciones para agregar estos datos a la lista blanca de accesos al Web\n                                Services.</span></li>\n                        <li style=\"text-align: justify;\">\n                            Poseer una cuenta corriente vigente con Blue Express.</li>\n                        <li style=\"text-align: justify;\">\n                            Poseer un sistema que permita realizar integraciones con tecnología SOA (Arquitectura\n                            Orientada a Servicios) o desarrollos internos realizados en Java, Visual Estudio, PHP,\n                            Phyton o cualquier otro lenguaje que permita programación orientada a objetos/aspectos.</li>\n                    </ol>\n                    <h3 style=\"text-align: justify;\">\n                        Soluciones Disponibles de Integración</h3>\n                    <div style=\"text-align: justify;\">\n                        &nbsp;</div>\n                    <div style=\"text-align: justify;\">\n                        <img alt=\"\"\n                            src=\"/documents/160123/160261/integracion.jpg/d9951318-62f2-4145-ae84-d3309d359e9e?t=1468266164233?t=1468262564233\"\n                            style=\"width: 100%; height: 100%;\"></div>\n                    <div style=\"text-align: justify;\">\n                        &nbsp;</div>\n                    <div style=\"text-align: justify;\">\n                        Para más información, favor contacte a su ejecutivo(a) comercial.</div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/_nosotros/mision/mision.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/_nosotros/mision/mision.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>mision works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/_nosotros/politica/politica.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/_nosotros/politica/politica.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"container main\" id=\"valores\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"center gap fade-down section-heading no-display animated fadeInDown appear\">\n                    <h2 class=\"main-title\">Política Integrada</h2>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"sectionContent\">\n            <div>\n                <div>\n                    <strong>\"Empresa Blue Express, es una empresa dedicada a dar soluciones de distribución física, que\n                        tiene como principal propósito ofrecer un servicio de calidad, atendiendo de manera eficiente,\n                        tecnológica y oportuna los requerimientos del cliente, cuidando el medioambiente, la seguridad y\n                        salud del personal, haciendo de esto una ventaja competitiva y diferenciadora\".</strong></div>\n                <div>\n                    &nbsp;</div>\n                <div>\n                    Convencidos que trabajando en conjunto para mejorar continuamente nuestros servicios, dé como\n                    resultado obtener una posición de liderazgo en el mercado, Blue Express, se compromete a:</div>\n                <div>\n                    &nbsp;</div>\n                <div>\n                    1. Satisfacer las necesidades de nuestros clientes mediante el cumplimiento de sus requerimientos y\n                    expectativas, mejorando continuamente la prestación del servicio, buscando con esto fidelizar y ser\n                    aliado estratégico para su negocio.</div>\n                <div>\n                    &nbsp;</div>\n                <div>\n                    2. Ejecutar las actividades asociadas a la prestación del servicio, identificando y controlando los\n                    aspectos ambientales, tomando las medidas necesarias para eliminar y/o minimizar el potencial\n                    impacto ambiental.</div>\n                <div>\n                    &nbsp;</div>\n                <div>\n                    3. Cumplir con la normativa legal y otros compromisos voluntariamente adquiridos, aplicables a la\n                    calidad del servicio, el medio ambiente, la seguridad y salud ocupacional del personal.</div>\n                <div>\n                    &nbsp;</div>\n                <div>\n                    4. Proteger los bienes e instalaciones de nuestros clientes durante toda la prestación del servicio,\n                    utilizando un modelo de operación logística integral, logrando tiempo, inversión y confianza,\n                    manteniendo y protegiendo sus condiciones de distribución, mientras permanezcan bajo el control y\n                    responsabilidad de Blue Express.</div>\n                <div>\n                    &nbsp;</div>\n                <div>\n                    5. Promover y mantener el compromiso, la participación y el desarrollo de todos los trabajadores, en\n                    un ambiente constructivo y de transparencia basadas en la ética, integridad y honestidad, trabajando\n                    con dedicación, rectitud, probidad, siendo consecuentes con los valores éticos de Blue Express.\n                </div>\n                <div>\n                    &nbsp;</div>\n                <div>\n                    6. Velar por la seguridad y salud ocupacional del personal, proporcionando un ambiente seguro y\n                    saludable que permita desarrollar las operaciones y funciones en igualdad de trato.</div>\n                <div>\n                    &nbsp;</div>\n                <div>\n                    7. Incrementar nuestro liderazgo en el rubro con un constante aumento de la cuota de mercado\n                    nacional, mejorando las relaciones comerciales con nuestros clientes así como en todos nuestros\n                    procesos operacionales de distribución.</div>\n                <div>\n                    &nbsp;</div>\n                <div>\n                    Para cumplir con este propósito, nos comprometemos a que esta Política sea conocida, difundida,\n                    implementada y gestionada en el tiempo.</div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/_nosotros/tecnologia/tecnologia.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/_nosotros/tecnologia/tecnologia.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"container main\" id=\"valores\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"center gap fade-down section-heading no-display animated fadeInDown appear\">\n                    <h2 class=\"main-title\">Nuestra Tecnología</h2>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"sectionContent\">\n            <div class=\"journal-content-article\" id=\"article_10154_160123_160950_1.4\">\n                <h2>\n                    <strong>Nuestra Tecnología</strong></h2>\n                <div>\n                    <p>\n                        <em>Nuestra tecnología está en constante evolución, responde a las necesidades de servicio,\n                            oportunidad y confiabilidad que queremos entregarles a nuestros clientes.</em><br>\n                        <br>\n                        Algunas de las herramientas tecnologicas con las que contamos:</p>\n                    <h3>\n                        Portal de Clientes</h3>\n                    <p style=\"text-align: justify;\">\n                        Es nuestro sistema de gestión para todos nuestros clientes, el cual esta enfocado en la\n                        impresión de Ordenes de Servicio y entregar autonomia al menejo de la información .</p>\n                    <p style=\"text-align: justify;\">\n                        Cuenta con las siguientes opciones:</p>\n                    <ul>\n                        <li style=\"text-align: justify;\">\n                            Impresión de Ordenes de Servicio (Unitaria y Masiva).</li>\n                        <li style=\"text-align: justify;\">\n                            Configuración de contactos (Libreta de direcciones).</li>\n                        <li style=\"text-align: justify;\">\n                            Configuración de envíos frecuentes.</li>\n                        <li style=\"text-align: justify;\">\n                            Seguimiento de Ordenes de Servicio.</li>\n                        <li style=\"text-align: justify;\">\n                            Seguimiento de Reservas.</li>\n                        <li style=\"text-align: justify;\">\n                            Reportes Operacionales y Comerciales.</li>\n                        <li style=\"text-align: justify;\">\n                            Administración de Reservas.</li>\n                        <li style=\"text-align: justify;\">\n                            Registro y Resolución de Problemas</li>\n                        <li style=\"text-align: justify;\">\n                            Creación de notificaciones vía correo electrónico.</li>\n                    </ul>\n                    <h3 style=\"text-align: justify;\">\n                        Sorter -&nbsp;<span style=\"line-height: 15.4px;\">Clasificación de mercadería</span></h3>\n                    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width: 100%\">\n                        <tbody>\n                            <tr>\n                                <td style=\"text-align: justify;\">\n                                    Contamos con un nuevo equipo automático de clasificación de mercadería, más conocido\n                                    como \"Sorter\", que está a la vanguardia mundial. Esta máquina es capaz de clasificar\n                                    más de 8.000 paquetes por hora. Además permite una optimización de los recursos\n                                    tanto nuestros como de nuestros clientes, disminuyendo los riesgos de manipulación.\n                                    Además del Sorter contamos con un sistema automatizado de carga irregular llamado\n                                    Towline lo que hace que esta carga se mueva por carriles automáticos a las zonas\n                                    indicadas mejorando la eficiencia en el movimiento de la carga de nuestros clientes.\n                                </td>\n                                <td style=\"width: 15px\">\n                                    &nbsp;</td>\n                                <td style=\"width: 40%; text-align: center;\">\n                                    <img alt=\"\"\n                                        src=\"/documents/160123/160279/img-sorter2.png/5220d793-d2ab-40ff-b5ae-38d38d5017ad?t=1468623814648?t=1468620214648\"\n                                        style=\"width: 85%; height: 85%;\"></td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <p style=\"text-align: justify;\">\n                        &nbsp;</p>\n                    <h3>\n                        Integración de Servicios vía Web Services</h3>\n                    <p>\n                        Tenemos disponible para nuestros clientes las siguientes opciones para realizar integración de\n                        servicio vía Web Services (WSDL).</p>\n                    <ul>\n                        <li>\n                            Creación de Ordenes de Servicio.</li>\n                        <li>\n                            Seguimiento / Tracking de Ordenes de Servicios y Reservas.</li>\n                        <li>\n                            Creación de Reservas / Solicitudes de Retiro.</li>\n                        <li>\n                            Solución de problemas.</li>\n                    </ul>\n                    <p>\n                        <em>(*) Para más información contacte a su ejecutivo(a) comercial.</em></p>\n                </div>\n                <h3>\n                    SEGA</h3>\n                <div>\n                    <p>\n                        <img height=\"1\"\n                            src=\"file:///C:/Users/ANGELL~1.COR/AppData/Local/Temp/msohtmlclip1/01/clip_image002.jpg\"\n                            width=\"1\">Sigla de Sistema de Emisión de Guías Automática, para la emisión del cliente desde\n                        sus propias oficinas, permite imprimir Órdenes de Servicio en formato de etiqueta y papel\n                        foliado.</p>\n                </div>\n                <h3>\n                    Cargonet</h3>\n                <div>\n                    <p>\n                        Sistema que soporta la operación de Distribución Nacional, apoyado por un módulo de Trazabilidad\n                        en Tiempo Real (TTR) bajo tecnología móvil.</p>\n                </div>\n                <h3>\n                    Customer Relationship Managment (CRM)</h3>\n                <div>\n                    <p>\n                        Sistema que permite proactivamente atender las incidencias de la operación de distribución,\n                        registrándolas y controlando que se resuelvan bajo SLA's definidos.</p>\n                </div>\n                <h3>\n                    Warehouse Management System (WMS)</h3>\n                <div>\n                    <p>\n                        Sistema de control de inventario y almacenaje.</p>\n                </div>\n                <h3>\n                    Trazabilidad en Tiempo Real (TTR)</h3>\n                <div>\n                    <p>\n                        Nuestra tecnología de trazabilidad de los envíos se encuentra on-line en todo Chile.\n                        Permitiéndole saber en todo momento donde se encuentran sus envíos.</p>\n                    <p>\n                        ¿Cuáles son los principales beneficios?</p>\n                    <ul style=\"line-height: 15.4px;\">\n                        <li>\n                            Permite al cliente realizar un seguimiento efectivo de la carga.</li>\n                        <li>\n                            Da mayor capacidad de reacción al cliente frente a imprevistos.</li>\n                        <li>\n                            Facilita un mayor control operacional, lo que incide en un mejor servicio final al cliente.\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/_nosotros/valores/valores.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/_nosotros/valores/valores.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"container main\" id=\"valores\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"center gap fade-down section-heading no-display animated fadeInDown appear\">\n                    <h2 class=\"main-title\">Valores</h2>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"sectionContent\">\n         <div>\n            <h2>\n                <strong>Nuestros Valores</strong></h2>\n        </div>\n        <p>\n            <strong>Calidad<br>\n            </strong>Preocupación permanente por nuestros estándares internos.</p>\n        <p>\n            <strong>Confiabilidad</strong><br>\n            Nos preocupamos por cumplir los plazos comprometidos en sus envíos.</p>\n        <p>\n            <strong>Integridad<br>\n            </strong>Contamos con profesionales responsables, comprometidos y honestos en los trabajos que\n            emprendemos.</p>\n        <p>\n            <strong>Compromiso<br>\n            </strong>Orientados a ser la mejor empresa de distribución de todo el territorio nacional.</p>\n        <p>\n            <strong>Excelencia<br>\n            </strong>En servicio, en calidad, en respeto por el medio ambiente, con nuestros clientes internos y\n            externos.</p>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/_servicios/almacenaje/almacenaje.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/_servicios/almacenaje/almacenaje.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"container\" id=\"servicios\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"center gap fade-down section-heading no-display animated fadeInDown appear\">\n                    <h2 class=\"main-title\">Almacenaje</h2>\n                    <hr>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/_servicios/courier/courier.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/_servicios/courier/courier.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"container\" id=\"servicios\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"center gap fade-down section-heading no-display animated fadeInDown appear\">\n                    <h2 class=\"main-title\">Courier</h2>\n                    <hr>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/_servicios/envios/envios.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/_servicios/envios/envios.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"container\" id=\"servicios\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"center gap fade-down section-heading no-display animated fadeInDown appear\">\n                    <h2 class=\"main-title\">Servicios</h2>\n                    <hr>\n                </div>\n\n                <div>\n                    <p>\n                        <strong><span style=\"line-height: 1.4;\">Blue Express tiene la más&nbsp;amplia red de\n                                envíos&nbsp;a\n                                nivel nacional</span></strong></p>\n                    <p>\n                        Otorgamos un servicio puerta a puerta para distribuir tus productos, ya sean valijas, sobres o\n                        encomiendas&nbsp;a más de 300 ciudades&nbsp;a lo largo de Chile de forma ágil y segura.</p>\n                    <p>\n                        <strong><span style=\"font-size:14px;\">Nuestros Servicios</span></strong></p>\n                    <p>\n                        <strong>PREMIUM</strong></p>\n                    <p>\n                        <span style=\"line-height: 1.4;\">Entrega al día siguiente a todo Chile, con primera prioridad de\n                            horario de entrega durante el día en las principales ciudades del país.</span></p>\n                    <p>\n                        <strong>PRIORITY</strong></p>\n                    <p>\n                        <span style=\"line-height: 1.4;\">Entrega en 24 horas en ciudades bases del país.</span></p>\n                    <p>\n                        <strong>EXPRESS</strong></p>\n                    <p>\n                        <span style=\"line-height: 1.4;\">Entrega en 48 horas desde Copiapó a Puerto\n                            Montt&nbsp;</span><span style=\"line-height: 15.4px;\">en ciudades bases del país. Para\n                            extremo norte y sur consultar a\n                            nuestro call center.</span></p>\n                    <p>\n                        <strong style=\"line-height: 1.4;\">Contamos con servicios adicionales como:</strong></p>\n                    <p>\n                        <strong>1)&nbsp;&nbsp;&nbsp; </strong><strong>Cobro contra entrega (COD)</strong></p>\n                    <p>\n                        Consiste en cobrar el monto indicado por el cliente en la orden de servicio al momento de\n                        realizar\n                        la entrega al destinatario. Posteriormente dicho cobro es rendido al cliente. Este servicio es\n                        comúnmente utilizado en canales de venta directa. Existe la factibilidad de cobrar en efectivo\n                        con\n                        un límite de $150.000 o en cheque. El cliente es quien define, a priori, la modalidad de cobro.\n                    </p>\n                    <p>\n                        <strong>2)&nbsp;&nbsp;&nbsp; </strong><strong>Devolución de documentos (DD)</strong></p>\n                    <p>\n                        Servicio complementario de devolución de documentos al remitente (facturas firmadas por el\n                        receptor\n                        u otros documentos). Para obtener este servicio se debe marcar la orden de servicio en el\n                        casillero\n                        correspondiente y referenciar los documentos que deben ser devueltos.</p>\n                    <p>\n                        <strong>DAMOS VALOR AGREGADO A NUESTRO SERVICIO PARA MEJORAR TU NEGOCIO</strong></p>\n                    <ul>\n                        <li>\n                            <strong>Servicio Personalizado al Cliente</strong></li>\n                    </ul>\n                    <p>\n                        Contamos con un equipo de primera línea para atender y satisfacer las necesidades diarias de tu\n                        negocio.&nbsp;</p>\n                    <ul>\n                        <li>\n                            <strong style=\"line-height: 1.4;\">Tracking en línea</strong></li>\n                    </ul>\n                    <p>\n                        Seguimiento a tu carga en tiempo real, así conocerás el estado de tus envíos en toda la cadena\n                        de\n                        distribución.</p>\n                    <ul>\n                        <li>\n                            <strong style=\"line-height: 1.4;\">Distribución en supermercados y grandes tiendas</strong>\n                        </li>\n                    </ul>\n                    <p>\n                        Este servicio considera entregar tus productos en las distintas cadenas de retail en&nbsp;días y\n                        horarios específicos&nbsp;y con un tratamiento especial para cada entrega.</p>\n                    <ul>\n                        <li>\n                            <strong style=\"line-height: 1.4;\">Transporte de Mercancías Peligrosas</strong></li>\n                    </ul>\n                    <p>\n                        Ver las restricciones de transporte en <a href=\"mercanciaspeligrosas\">Mercancías Peligrosas</a>.\n                    </p>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/_servicios/oficinas/oficinas.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/_servicios/oficinas/oficinas.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n        <div class=\"container\" id=\"servicios\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"center gap fade-down section-heading no-display animated fadeInDown appear\">\n                        <h2 class=\"main-title\">Oficinas</h2>\n                        <hr>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/contacto/contacto.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/contacto/contacto.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid main\" id=\"contacto\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"center gap fade-down section-heading no-display animated fadeInDown appear\">\n        <h2 class=\"main-title\">Contactenos</h2>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <app-menu></app-menu>\n    </div>\n    <div class=\"col-md-8\">\n\n      <app-ejecutivos *ngIf=\"contacto == 'ejecutivos'\"></app-ejecutivos>\n      <app-materiales *ngIf=\"contacto == 'materiales'\"></app-materiales>\n      <app-cobertura *ngIf=\"contacto == 'cobertura'\"></app-cobertura>\n      <app-servicio *ngIf=\"contacto == 'servicio'\"></app-servicio>\n      <app-trabaje *ngIf=\"contacto == 'trabaje'\"></app-trabaje>\n\n      <!-- <form>\n        <div class=\"row\">\n          <div class=\"col-md\">\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">Email</label>\n              <input type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"correo@dominio.cl\">\n              <small id=\"emailHelp\" class=\"form-text text-muted\">Ingrese su correo electrónico</small>\n            </div>\n          </div>\n          <div class=\"col-md\">\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Asunto</label>\n              <select class=\"form-control\" id=\"inputAsunto\" placeholder=\"Mensaje\"></select>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md\">\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Mensaje</label>\n              <textarea class=\"form-control mensaje\" id=\"inputMensaje\" placeholder=\"Mensaje\" rows=\"6\"></textarea>\n              <small id=\"emailHelp\" class=\"form-text text-muted\">Ingrese su consulta</small>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md text-right\">\n            <button type=\"submit\" class=\"btn btn-primary\">Enviar</button>\n          </div>\n        </div>\n\n\n      </form> -->\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-seguimiento></app-seguimiento>\n<div class=\"wrapper\">\n  <app-sucursales></app-sucursales>\n  <app-servicios></app-servicios>\n  <app-info></app-info>\n  <app-nosotros></app-nosotros>\n  <app-contacto></app-contacto>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/info/info.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/info/info.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container main\" id=\"info\">\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"center gap fade-down section-heading no-display animated fadeInDown appear\">\n        <h2 class=\"main-title\">Información Cliente</h2>\n      </div>\n    </div>\n  </div>\n  <div class=\"opciones row\">\n    <div class=\"col-md text-center\"><a (click)=\"changeTab(1)\" [ngClass]=\"{'active': section == 1}\">Cobertura de Riesgos</a></div>\n    <div class=\"col-md text-center\"><a (click)=\"changeTab(2)\" [ngClass]=\"{'active': section == 2}\">Preguntas Frecuentes</a></div>\n    <div class=\"col-md text-center\"><a (click)=\"changeTab(3)\" [ngClass]=\"{'active': section == 3}\">Glosario de Términos</a></div>\n    <div class=\"col-md text-center\"><a (click)=\"changeTab(4)\" [ngClass]=\"{'active': section == 4}\">Mercancías Peligrosas</a></div>\n    <div class=\"col-md text-center\"><a (click)=\"changeTab(5)\" [ngClass]=\"{'active': section == 5}\">Consulte su Boleta</a></div>\n  </div>\n\n\n  <div class=\"tabContent\" id=\"section1\" *ngIf=\"section == 1\">\n    <p>\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, labore?\n    </p>\n\n  </div>\n  <div class=\"tabContent\" id=\"section2\" *ngIf=\"section == 2\">\n    <p>\n      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, minima!\n    </p>\n\n  </div>\n  <div class=\"tabContent\" id=\"section3\" *ngIf=\"section == 3\">\n    <p>\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, a?\n    </p>\n\n  </div>\n  <div class=\"tabContent\" id=\"section4\" *ngIf=\"section == 4\">\n    <p>\n      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, sed?\n    </p>\n\n  </div>\n  <div class=\"tabContent\" id=\"section5\" *ngIf=\"section == 5\">\n    <p>\n      lorem10\n    </p>\n\n  </div>\n\n  <div class=\"row\"></div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/maps/maps.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/maps/maps.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  maps works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/nosotros/nosotros.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/nosotros/nosotros.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container main\" id=\"nosotros\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"center gap fade-down section-heading no-display animated fadeInDown appear\">\n        <h2 class=\"main-title\">Acerca de Nosotros</h2>\n        <p style=\"color: #409ad5;\">Reseña Historica</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-10 col-md-offset-1 fade-up no-display animated fadeInUp appear\">\n      <p>Lan Airlines creó en 1996 su filial Lan Courier, empresa que se inició como courier a nivel local y que ya en\n        el segundo trimestre de 1998 extendió sus servicios a los de operación logística especializándose en\n        distribución, con una red de oficinas, bodegas, camiones y camionetas a lo largo de todo Chile.\n        En el año 2001, Lan Courier inicia operaciones de almacenaje y administración de inventarios inaugurando un\n        Centro de Distribución de 5.500 m2 de superficie, con los más altos estándares de seguridad y tecnología.</p>\n      <hr>\n      <h4 style=\"color: #409ad5;\">Misión y Visión</h4>\n      <p>Nuestra Misión es proveer soluciones innovadoras, que aporten competitividad al negocio de nuestros clientes,\n        sustentados en procesos flexibles y eficientes, tecnología de información oportuna y un equipo humano altamente\n        preparado.\n        Nuestra Visión, queremos ser la mejor empresa de soluciones de distribución logística en Chile, en venta,\n        cobertura, volumen, en calidad de servicio y eficiencia. Para seguir creciendo, queremos desarrollar nuestra\n        propia identidad, que refleje nuestro espíritu, nuestros valores y nuestro desafío..</p>\n    </div>\n\n  </div>\n\n  <div class=\"row fade-up no-display animated fadeInUp appear\">\n      <div class=\"col-md-6\">\n        <div class=\"tile-progress tile-red bounce-in no-display animated bounceIn appear\" style=\"height: 160px!important;\">\n          <div class=\"tile-header\" style=\"display: block; min-height: 194px;\">\n            <h4 style=\"color: #409ad5;\"><a href=\"\" [routerLink]=\"[ '/nosotros/valores' ]\">Valores</a></h4>\n            <img src=\"http://www.bluex.cl/image/journal/article?img_id=249368&amp;t=1535462346544\" height=\"100px;\">\n            <span style=\"text-align: justify;\">Calidad, Confiabilidad, Integridad...</span>\n          </div>\n        </div>\n      \n        <div class=\"tile-progress tile-red bounce-in no-display animated bounceIn appear\" style=\"height: 160px!important;\">\n          <div class=\"tile-header\" style=\"display: block; height: 220px;\">\n            <h4 style=\"color: #409ad5;\"><a href=\"\" [routerLink]=\"[ '/nosotros/tecnologia' ]\">Nuestra Tecnología</a></h4>\n            <img src=\"http://www.bluex.cl/image/journal/article?img_id=249368&amp;t=1535462346544\" height=\"100px;\">\n            <span style=\"text-align: justify;\">Nuestra tecnología está en constante...</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"tile-progress tile-red bounce-in no-display animated bounceIn appear\" style=\"height: 160px!important;\">\n          <div class=\"tile-header\" style=\"display: block; min-height: 194px;\">\n            <h4 style=\"color: #409ad5;\"><a href=\"\" [routerLink]=\"[ '/nosotros/integracion' ]\">Integración Web Services</a></h4>\n            <img src=\"http://www.bluex.cl/image/journal/article?img_id=249368&amp;t=1535462346544\" height=\"100px;\">\n            <span style=\"text-align: justify;\">Blue Express tiene disponible para...</span>\n          </div>\t\t\t\t\t\t\n        </div>\n        <div class=\"tile-progress tile-red bounce-in no-display animated bounceIn appear\" style=\"height: 160px!important;\">\n          <div class=\"tile-header\" style=\"display: block; height: 220px;\">\n            <h4 style=\"color: #409ad5;\"><a href=\"\" [routerLink]=\"[ '/nosotros/politica' ]\">Política Integrada</a></h4>\n            <img src=\"http://www.bluex.cl/image/journal/article?img_id=249368&amp;t=1535462346544\" height=\"100px;\">\n            <span style=\"text-align: justify;\">Empresa Blue Express, es una empres...</span>\n          </div>\t\t\t\t\t\t\n        </div>\n      </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/seguimiento/seguimiento.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/seguimiento/seguimiento.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid main\" id=\"seguimiento\">\n\n<div class=\"slides\">\n  <div class=\"slide\">\n  </div>\n</div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/servicios/servicios.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/servicios/servicios.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container main\" id=\"servicios\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"center gap fade-down section-heading no-display animated fadeInDown appear\">\n              <h2 class=\"main-title\">Servicios</h2>\n              <hr>\n              <p>Otorgamos un servicio puerta a puerta para distribuir tus productos, ya sean valijas, sobres o encomiendas a más de 300 ciudades a lo largo de Chile de forma ágil y segura.</p>\n            </div>\n          </div>\n        </div>\n      <div class=\"row\">\n          <div class=\"col-md-3\">\n            <div (click)=\"navigateTo('/servicios/envios');\" class=\"tile-progress tile-red bounce-in no-display animated bounceIn appear\">\n              <div class=\"tile-header\" style=\"display: block; height: 417px;\">\n                <h4><a>Envíos Nacionales</a></h4>\n                <img src=\"http://www.bluex.cl/image/journal/article?img_id=249368&amp;t=1535462346544\">\n                <span style=\"text-align: justify;\">Transporte y envíos de sobres, valijas y encomiendas a más de 300 ciudades en Chile, con Seguimiento en Línea.</span>\n              </div>\n              <div class=\"tile-progressbar\">\n                <span data-fill=\"300\" style=\"width: 65.5%;\"></span>\n              </div>\n              <div class=\"tile-footer\">\n                <h4>\n                  <span class=\"pct-counter counter\">300</span>\n                </h4>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div (click)=\"navigateTo('/servicios/oficinas');\" class=\"tile-progress tile-cyan bounce-in no-display animated bounceIn appear\">\n              <div class=\"tile-header\" style=\"display: block; height: 417px;\">\n                <h4><a>Oficinas Comerciales</a></h4>\n                <img src=\"http://www.bluex.cl/image/journal/article?img_id=162487&amp;t=1468878539541\">\n                <span>Transporte de envíos a través de nuestras sucursales en todo Chile.</span>\n              </div>\n              <div class=\"tile-progressbar\">\n                <span data-fill=\"24\" style=\"width: 98.5%;\"></span>\n              </div>\n              <div class=\"tile-footer\">\n                <h4>\n                  <span class=\"pct-counter counter\">24</span>\n                </h4>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\" id=\"courier\">\n            <div (click)=\"navigateTo('/servicios/courier');\" class=\"tile-progress tile-primary bounce-in no-display animated bounceIn appear\">\n              <div class=\"tile-header\" style=\"display: block; height: 417px;\">\n                <h4><a>Courier Internacional</a></h4>\n                <img src=\"http://www.bluex.cl/image/journal/article?img_id=162490&amp;t=1468878559290\">\n                <span>Nuestra red de distribución internacional contempla el transporte de sobres y paquetes con cobertura a 220 países.</span>\n              </div>\n              <div class=\"tile-progressbar\">\n                <span data-fill=\"220\" style=\"width: 10%;\"></span>\n              </div>\n              <div class=\"tile-footer\">\n                <h4>\n                  <span class=\"pct-counter counter\">220</span>\n                </h4>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div (click)=\"navigateTo('/servicios/almacenaje');\" class=\"tile-progress tile-pink bounce-in no-display animated bounceIn appear\">\n              <div class=\"tile-header\" style=\"display: block; height: 417px;\">\n                <h4><a>Almacenaje y Lógistica</a></h4>\n                <img src=\"http://www.bluex.cl/image/journal/article?img_id=162493&amp;t=1468878579153\">\n                <span>Servicio de administración de inventario, mecanizado y distribución.</span>\n              </div>\n              <div class=\"tile-progressbar\">\n                <span data-fill=\"10%\" style=\"width: 10%;\"></span>\n              </div>\n              <div class=\"tile-footer\">\n                <h4>\n                  <span class=\"pct-counter counter\">10</span>\n                </h4>\n              </div>\n            </div>\n          </div>\n        </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sucursales/sucursales.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sucursales/sucursales.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container main\" id=\"sucursales\">\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"center gap fade-down section-heading no-display animated fadeInDown appear\">\n        <h2 class=\"main-title\">Sucursales</h2>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <p-autoComplete [(ngModel)]=\"brand\" [suggestions]=\"filteredCountries\" (completeMethod)=\"filterBrands($event)\"\n          [minLength]=\"1\" placeholder=\"Ciudad\" [dropdown]=\"true\" (onSelect)=\"refreshComunas($event)\">\n          <ng-template let-brand pTemplate=\"item\">\n            <div class=\"ui-helper-clearfix\" style=\"border-bottom:1px solid #D5D5D5\">\n              <div style=\"font-size:14px;margin:10px 10px 0 0\">{{brand}}</div>\n            </div>\n          </ng-template>\n        </p-autoComplete>\n        <!-- <select id=\"my-select\" class=\"form-control\" name=\"\">\n\n              <option *ngFor=\"let region of regiones\">{{region?.nombre}}</option>\n\n            </select> -->\n      </div>\n      <div class=\"form-group\">\n        <p-autoComplete [(ngModel)]=\"comuna\" [suggestions]=\"filteredComunas\" (completeMethod)=\"filterComunas($event)\"\n          [minLength]=\"1\" placeholder=\"Comuna\" [dropdown]=\"true\" (onSelect)=\"loadSucursales($event)\">\n          <ng-template let-comuna pTemplate=\"item\">\n            <div class=\"ui-helper-clearfix\" style=\"border-bottom:1px solid #D5D5D5\">\n              <div style=\"font-size:14px;margin:10px 10px 0 0\">{{comuna}}</div>\n            </div>\n          </ng-template>\n        </p-autoComplete>\n        <!-- <label for=\"my-select\">Comuna</label> -->\n        <!-- <select id=\"my-select\" class=\"form-control\" name=\"\" (change)=\"loadSucursales()\">\n\n              <option *ngFor=\"let comuna of comunas\">{{comuna?.nombre}}</option>\n\n            </select> -->\n      </div>\n    </div>\n    <div class=\"col-md-9\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <h1 class=\"placeholder\" *ngIf=\"placeholder\">\n            <em>\n              Seleccione una susucral...\n            </em>\n          </h1>\n\n          <div class=\"results\" *ngIf=\"!placeholder\">\n\n            <p-table [value]=\"sucursales\" sortField=\"brand\" sortMode=\"single\">\n              <ng-template pTemplate=\"header\">\n                <tr>\n                  <th>Ciudad</th>\n                  <th>Sucursal</th>\n                  <th>Direccion</th>\n                  <th>Telefono</th>\n                  <th></th>\n                </tr>\n              </ng-template>\n              <ng-template pTemplate=\"body\" let-sucursal let-rowIndex=\"rowIndex\">\n                <tr>\n                  <td *ngIf=\"0 == rowIndex\" [attr.rowspan]=\"scuursalesSize\">\n                    {{sucursal?.location.state_name}}</td>\n                  <td>{{sucursal?.agency_name}}</td>\n                  <td>{{sucursal?.location.street_name}} {{sucursal?.location.street_number}}</td>\n                  <td>+56 9832 2343</td>\n                  <td class=\"text-center\"><i (click)=\"loadMap(rowIndex)\" class=\"pi pi-map-marker button\"></i></td>\n                </tr>\n              </ng-template>\n            </p-table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<p-dialog header=\"{{sucursal?.agency_name}}\" [(visible)]=\"display\" [modal]=\"true\" [responsive]=\"true\"\n  [style]=\"{width: '800px', height: '500px'}\">\n  <div class=\"maps\">\n    <app-maps [latitude]=\"sucursal?.location.geolocation.latitude\"\n      [longitude]=\"sucursal?.location.geolocation.longitude\"></app-maps>\n  </div>\n\n  <div class=\"datos\">\n    <p>\n      <strong>Direccion:</strong> {{sucursal?.location.street_name}} {{sucursal?.location.street_number}}\n    </p>\n    <p>\n      <strong>Telefonos:</strong> <a href=\"\">+56 7346 3736</a>, <a href=\"\">+56 7346 3736</a>\n    </p>\n    <p>\n      <strong>Horarios de atencion:</strong>\n    </p>\n    <ul class=\"sucursales\">\n      <li>\n        Lunes\n        <span>De {{sucursal?.open_hours.monday[0].from}} a {{sucursal?.open_hours.monday[0].to}}</span>,\n      </li>\n      <li>\n        Martes\n        <span>De {{sucursal?.open_hours.monday[0].from}} a {{sucursal?.open_hours.monday[0].to}}</span>,\n      </li>\n      <li>\n        Miercoles\n        <span>De {{sucursal?.open_hours.monday[0].from}} a {{sucursal?.open_hours.monday[0].to}}</span>,\n      </li>\n      <li>\n        Jueves\n        <span>De {{sucursal?.open_hours.monday[0].from}} a {{sucursal?.open_hours.monday[0].to}}</span>,\n      </li>\n      <li>\n        Viernes\n        <span>De {{sucursal?.open_hours.monday[0].from}} a {{sucursal?.open_hours.monday[0].to}}</span>,\n      </li>\n    </ul>\n  </div>\n\n</p-dialog>"

/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_sucursales_sucursales_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sucursales/sucursales.component */ "./src/app/components/sucursales/sucursales.component.ts");
/* harmony import */ var _components_servicios_envios_envios_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/_servicios/envios/envios.component */ "./src/app/components/_servicios/envios/envios.component.ts");
/* harmony import */ var _components_servicios_oficinas_oficinas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/_servicios/oficinas/oficinas.component */ "./src/app/components/_servicios/oficinas/oficinas.component.ts");
/* harmony import */ var _components_servicios_courier_courier_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/_servicios/courier/courier.component */ "./src/app/components/_servicios/courier/courier.component.ts");
/* harmony import */ var _components_servicios_almacenaje_almacenaje_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/_servicios/almacenaje/almacenaje.component */ "./src/app/components/_servicios/almacenaje/almacenaje.component.ts");
/* harmony import */ var _components_nosotros_politica_politica_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/_nosotros/politica/politica.component */ "./src/app/components/_nosotros/politica/politica.component.ts");
/* harmony import */ var _components_nosotros_integracion_integracion_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/_nosotros/integracion/integracion.component */ "./src/app/components/_nosotros/integracion/integracion.component.ts");
/* harmony import */ var _components_nosotros_valores_valores_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/_nosotros/valores/valores.component */ "./src/app/components/_nosotros/valores/valores.component.ts");
/* harmony import */ var _components_nosotros_tecnologia_tecnologia_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/_nosotros/tecnologia/tecnologia.component */ "./src/app/components/_nosotros/tecnologia/tecnologia.component.ts");
/* harmony import */ var _components_contacto_ejecutivos_ejecutivos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/_contacto/ejecutivos/ejecutivos.component */ "./src/app/components/_contacto/ejecutivos/ejecutivos.component.ts");
/* harmony import */ var _components_contacto_materiales_materiales_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/_contacto/materiales/materiales.component */ "./src/app/components/_contacto/materiales/materiales.component.ts");
/* harmony import */ var _components_contacto_cobertura_cobertura_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/_contacto/cobertura/cobertura.component */ "./src/app/components/_contacto/cobertura/cobertura.component.ts");
/* harmony import */ var _components_contacto_servicio_servicio_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/_contacto/servicio/servicio.component */ "./src/app/components/_contacto/servicio/servicio.component.ts");
/* harmony import */ var _components_contacto_trabaje_trabaje_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/_contacto/trabaje/trabaje.component */ "./src/app/components/_contacto/trabaje/trabaje.component.ts");


















const routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'sucursales',
        component: _components_sucursales_sucursales_component__WEBPACK_IMPORTED_MODULE_4__["SucursalesComponent"]
    },
    {
        path: 'servicios/envios',
        component: _components_servicios_envios_envios_component__WEBPACK_IMPORTED_MODULE_5__["EnviosComponent"]
    },
    {
        path: 'servicios/oficinas',
        component: _components_servicios_oficinas_oficinas_component__WEBPACK_IMPORTED_MODULE_6__["OficinasComponent"]
    },
    {
        path: 'servicios/courier',
        component: _components_servicios_courier_courier_component__WEBPACK_IMPORTED_MODULE_7__["CourierComponent"]
    },
    {
        path: 'servicios/almacenaje',
        component: _components_servicios_almacenaje_almacenaje_component__WEBPACK_IMPORTED_MODULE_8__["AlmacenajeComponent"]
    },
    {
        path: 'nosotros/politica',
        component: _components_nosotros_politica_politica_component__WEBPACK_IMPORTED_MODULE_9__["PoliticaComponent"]
    },
    {
        path: 'nosotros/integracion',
        component: _components_nosotros_integracion_integracion_component__WEBPACK_IMPORTED_MODULE_10__["IntegracionComponent"]
    },
    {
        path: 'nosotros/valores',
        component: _components_nosotros_valores_valores_component__WEBPACK_IMPORTED_MODULE_11__["ValoresComponent"]
    },
    {
        path: 'nosotros/tecnologia',
        component: _components_nosotros_tecnologia_tecnologia_component__WEBPACK_IMPORTED_MODULE_12__["TecnologiaComponent"]
    },
    {
        path: 'contacto/ejecutivos',
        component: _components_contacto_ejecutivos_ejecutivos_component__WEBPACK_IMPORTED_MODULE_13__["EjecutivosComponent"]
    }, {
        path: 'contacto/servicio',
        component: _components_contacto_servicio_servicio_component__WEBPACK_IMPORTED_MODULE_16__["ServicioComponent"]
    },
    {
        path: 'contacto/cobertura',
        component: _components_contacto_cobertura_cobertura_component__WEBPACK_IMPORTED_MODULE_15__["CoberturaComponent"]
    },
    {
        path: 'contacto/materiales',
        component: _components_contacto_materiales_materiales_component__WEBPACK_IMPORTED_MODULE_14__["MaterialesComponent"]
    },
    {
        path: 'contacto/trabaje',
        component: _components_contacto_trabaje_trabaje_component__WEBPACK_IMPORTED_MODULE_17__["TrabajeComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\nbody {\n  background: #f8f8f8;\n}\nbody {\n  color: #222;\n  background: #f5f5f5;\n  font-family: Lato, sans-serif !important;\n  font-weight: 300;\n  line-height: 1.6;\n  font-size: 16px;\n}\n:host ::ng-deep {\n  @import url(\"http://fonts.googleapis.com/css?family=Lato:400, 700, 300\");\n  /*-----------------------------------------------------------------------------------*/\n  /*  Slider\n  /*-----------------------------------------------------------------------------------*/\n  /*-----------------------------------------------------------------------------------*/\n  /*  Slider\n  /*-----------------------------------------------------------------------------------*/\n  /* Start: Recommended Isotope styles */\n  /**** Isotope Filtering ****/\n  /**** Isotope CSS3 transitions ****/\n  /**** disabling Isotope CSS3 transitions ****/\n  /*-----------------------------------------------------------------------------------*/\n  /*  PRICING\n  /*-----------------------------------------------------------------------------------*/\n  /*-----------------------------------------------------------------------------------*/\n  /*  Navigation\n  /*-----------------------------------------------------------------------------------*/\n  /*-----------------------------------------------------------------------------------*/\n  /*  TEAM\n  /*-----------------------------------------------------------------------------------*/\n  /*-----------------------------------------------------------------------------------*/\n  /*  Social\n  /*-----------------------------------------------------------------------------------*/\n  /*Unordered Lists*/\n  /*-----------------------------------------------------------------------------------*/\n  /*  Conmments\n  /*-----------------------------------------------------------------------------------*/\n  /*-----------------------------------------------------------------------------------*/\n  /*  Content\n  /*-----------------------------------------------------------------------------------*/\n  /*-----------------------------------------------------------------------------------*/\n  /*  Footer\n  /*-----------------------------------------------------------------------------------*/\n  /*-----------------------------------------------------------------------------------*/\n  /*  Search\n  /*-----------------------------------------------------------------------------------*/\n  /*-----------------------------------------------------------------------------------*/\n  /*  PARALLAX\n  /*-----------------------------------------------------------------------------------*/\n  /*-----------------------------------------------------------------------------------*/\n  /*  BUTTONS\n  /*-----------------------------------------------------------------------------------*/\n  /*-----------------------------------------------------------------------------------*/\n  /*  ANIMATE\n  /*-----------------------------------------------------------------------------------*/\n  /*-----------------------------------------------------------------------------------*/\n  /*  Posts\n  /*-----------------------------------------------------------------------------------*/\n  /*-----------------------------------------------------------------------------------*/\n  /*  STATS\n  /*-----------------------------------------------------------------------------------*/\n  /*-----------------------------------------------------------------------------------*/\n  /*  SKILLS\n  /*-----------------------------------------------------------------------------------*/\n  /*-----------------------------------------------------------------------------------*/\n  /*  BACKGROUNDS\n  /*-----------------------------------------------------------------------------------*/\n  /*-----------------------------------------------------------------------------------*/\n  /*  TESTIMONIALS\n  /*-----------------------------------------------------------------------------------*/\n  /* ==========================================================================\n   CONTACT\n   ========================================================================== */\n  /* PRELOADER */\n}\n:host ::ng-deep.btn-primary {\n  background: black;\n  color: white !important;\n  border: none;\n}\n:host ::ng-deep.btn-primary:active {\n  background: #333 !important;\n  color: white !important;\n  border: none !important;\n}\n:host ::ng-deep h1 {\n  text-align: center;\n}\n:host ::ng-deep .container {\n  position: relative;\n  z-index: 9;\n  background: #f8f8f8;\n}\n:host ::ng-deep .wrapper {\n  background: #f8f8f8;\n  position: relative;\n}\n:host ::ng-deep .clearfix {\n  zoom: 1;\n}\n:host ::ng-deep .clearfix:before,\n:host ::ng-deep .clearfix:after {\n  display: table;\n  content: \"\";\n  line-height: 0;\n}\n:host ::ng-deep .clearfix:after {\n  clear: both;\n}\n:host ::ng-deep .hide-text {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n:host ::ng-deep .input-block-level {\n  display: block;\n  width: 100%;\n  min-height: 30px;\n  box-sizing: border-box;\n}\n:host ::ng-deep body {\n  color: #222;\n  background: #f5f5f5;\n  font-family: Lato, sans-serif !important;\n  font-weight: 300;\n  line-height: 1.6;\n  font-size: 16px;\n}\n:host ::ng-deep h1,\n:host ::ng-deep h2,\n:host ::ng-deep h3,\n:host ::ng-deep h4,\n:host ::ng-deep h5,\n:host ::ng-deep h6 {\n  font-family: Lato, sans-serif;\n  font-weight: 700;\n}\n:host ::ng-deep a {\n  color: #222;\n  transition: 300ms;\n}\n:host ::ng-deep hr {\n  border-top: 1px solid #e5e5e5;\n  border-bottom: 1px solid #fff;\n}\n:host ::ng-deep .btn {\n  font-weight: 400;\n}\n:host ::ng-deep .btn-transparent {\n  border: 3px solid #fff;\n  background: transparent;\n  color: #fff;\n}\n:host ::ng-deep .btn-transparent:hover {\n  border-color: rgba(255, 255, 255, 0.5);\n}\n:host ::ng-deep a:hover,\n:host ::ng-deep a:focus {\n  color: #d9534f;\n  text-decoration: none;\n  outline: none;\n}\n:host ::ng-deep .dropdown-menu {\n  margin-top: -1px;\n  min-width: 180px;\n}\n:host ::ng-deep body > section {\n  padding: 50px 0;\n}\n:host ::ng-deep .embed-container {\n  position: relative;\n  padding-bottom: 56.25%;\n  /* 16/9 ratio */\n  padding-top: 30px;\n  /* IE6 workaround*/\n  height: 0;\n  overflow: hidden;\n}\n:host ::ng-deep .embed-container iframe,\n:host ::ng-deep .embed-container object,\n:host ::ng-deep .embed-container embed {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n:host ::ng-deep blockquote {\n  background-color: #fff;\n}\n:host ::ng-deep .main-title {\n  text-transform: uppercase;\n}\n:host ::ng-deep #main-slider {\n  position: relative;\n  z-index: 5;\n  color: #fff;\n}\n:host ::ng-deep #main-slider .carousel-inner {\n  overflow: visible;\n}\n:host ::ng-deep .backstretch:before {\n  content: \"\";\n  min-width: 100%;\n  height: 100%;\n  position: absolute;\n  display: block;\n  z-index: -1;\n}\n:host ::ng-deep #main-slider .carousel h2 {\n  font-size: 44px;\n  color: #fff;\n  text-shadow: rgba(0, 0, 0, 0.4) 0 1px 1px;\n  text-transform: uppercase;\n  letter-spacing: -1px;\n  margin-top: 30px;\n}\n:host ::ng-deep #main-slider .carousel .btn {\n  border: 5px solid rgba(255, 255, 255, 0.9);\n  color: #fff;\n  border-radius: 0;\n  margin-top: 35px;\n  font-size: 26px;\n  font-weight: 700;\n  text-transform: uppercase;\n  padding: 10px 15px;\n  text-shadow: rgba(0, 0, 0, 0.4) 0 1px 1px;\n  z-index: 10px;\n}\n:host ::ng-deep #main-slider .carousel .btn:hover {\n  background-color: rgba(255, 255, 255, 0.9);\n  color: #202020;\n}\n:host ::ng-deep #main-slider .carousel .boxed {\n  padding: 10px 15px;\n  background-color: rgba(0, 0, 0, 0.2);\n  display: inline-block;\n  text-transform: uppercase;\n}\n:host ::ng-deep #main-slider .carousel .item {\n  background-position: 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  left: 0 !important;\n  opacity: 0;\n  top: 0;\n  position: absolute;\n  width: 100%;\n  display: block !important;\n  height: 600px;\n  transition: opacity ease-in-out 500ms;\n}\n:host ::ng-deep #main-slider .carousel .item:first-child {\n  top: auto;\n  position: relative;\n}\n:host ::ng-deep #main-slider .carousel .item.active {\n  opacity: 1;\n  transition: opacity ease-in-out 500ms;\n  z-index: 1;\n}\n:host ::ng-deep .home-icon {\n  padding: 10px 15px;\n  background-color: rgba(0, 0, 0, 0.2);\n  clear: both;\n  display: block;\n  font-size: 78px;\n  margin: 100px auto 0;\n  position: relative;\n  width: 80px;\n  -webkit-transform: rotate(15deg);\n  -moz-transform: rotate(15deg);\n  -o-transform: rotate(15deg);\n  -ms-transform: rotate(15deg);\n}\n:host ::ng-deep #single-page-slider {\n  padding-top: 150px;\n}\n:host ::ng-deep #single-page-slider .carousel {\n  z-index: 5 !important;\n  color: #fff;\n  text-shadow: rgba(0, 0, 0, 0.4) 0 1px 1px;\n}\n:host ::ng-deep #main-slider-page {\n  min-height: 350px;\n  z-index: 2 !important;\n}\n:host ::ng-deep #recent-works {\n  padding: 90px 0;\n}\n:host ::ng-deep #recent-works .item-inner {\n  position: relative;\n  margin: 0;\n}\n:host ::ng-deep .portfolio-items,\n:host ::ng-deep .portfolio-filter {\n  list-style: none;\n  padding: 0;\n  margin: 0 -20px 20px 0;\n}\n:host ::ng-deep .portfolio-filter > li {\n  display: inline-block;\n}\n:host ::ng-deep .portfolio-filter > li a.active {\n  color: #fff;\n  background: #00b29e;\n  border: 2px solid #00b29e;\n}\n:host ::ng-deep .portfolio-items > li {\n  float: left;\n  padding: 0;\n  box-sizing: border-box;\n}\n:host ::ng-deep .portfolio-items.col-2 > li {\n  width: 50%;\n}\n:host ::ng-deep .portfolio-items.col-3 > li {\n  width: 33%;\n}\n:host ::ng-deep .portfolio-items.col-4 > li {\n  width: 25%;\n}\n:host ::ng-deep .portfolio-items.col-5 > li {\n  width: 20%;\n}\n:host ::ng-deep .portfolio-items.col-6 > li {\n  width: 16%;\n}\n:host ::ng-deep .portfolio-item {\n  padding: 0;\n  margin: 0;\n}\n:host ::ng-deep .portfolio-item .item-inner {\n  background: #fff;\n  padding: 0;\n  margin: 0 20px 20px 0;\n  position: relative;\n}\n:host ::ng-deep .portfolio-item img {\n  width: 100%;\n}\n:host ::ng-deep .portfolio-item h5 {\n  background: #fff;\n  margin: 0;\n  padding: 15px;\n  font-weight: 700;\n  font-size: 16px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  position: relative;\n  border-bottom: 4px solid #f0f0f0;\n  text-transform: uppercase;\n  transition: all 0.5s ease-in-out;\n}\n:host ::ng-deep .portfolio-item:hover h5,\n:host ::ng-deep .team-member:hover .team-content,\n:host ::ng-deep .post:hover .content {\n  transition: all 0.5s ease-in-out;\n  border-bottom: 4px solid #00b29e;\n}\n:host ::ng-deep .portfolio-item h5:after {\n  bottom: 100%;\n  left: 50%;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n  border-color: rgba(255, 255, 255, 0);\n  border-bottom-color: #fff;\n  border-width: 15px;\n  margin-left: -15px;\n}\n:host ::ng-deep .portfolio-item .overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  background: rgba(255, 255, 255, 0.9);\n  text-align: center;\n  vertical-align: middle;\n  transition: opacity 300ms;\n}\n:host ::ng-deep .portfolio-item .overlay .preview {\n  position: relative;\n  top: 50%;\n  display: inline-block;\n  margin-top: -20px;\n}\n:host ::ng-deep .portfolio-item:hover .overlay {\n  opacity: 1;\n}\n:host ::ng-deep .isotope-item {\n  z-index: 2;\n}\n:host ::ng-deep .isotope-hidden.isotope-item {\n  pointer-events: none;\n  z-index: 1;\n}\n:host ::ng-deep .isotope,\n:host ::ng-deep .isotope .isotope-item {\n  transition-duration: 0.8s;\n}\n:host ::ng-deep .isotope {\n  transition-property: height, width;\n}\n:host ::ng-deep .isotope .isotope-item {\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform;\n}\n:host ::ng-deep .isotope.no-transition,\n:host ::ng-deep .isotope.no-transition .isotope-item,\n:host ::ng-deep .isotope .isotope-item.no-transition {\n  transition-duration: 0;\n}\n:host ::ng-deep .isotope.infinite-scrolling {\n  transition: none;\n}\n:host ::ng-deep .project-controls {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n:host ::ng-deep .project-controls span {\n  position: relative;\n  bottom: 70px;\n  font-size: 60px;\n  display: block;\n}\n:host ::ng-deep .project-controls span:hover {\n  cursor: pointer;\n}\n:host ::ng-deep div.pp_overlay {\n  z-index: 9999 !important;\n}\n:host ::ng-deep #pricing-table .plan {\n  border-radius: 0;\n  list-style: none;\n  margin: 0 0 20px;\n  background: #00b29e;\n  text-align: center;\n  padding: 30px 0;\n}\n:host ::ng-deep #pricing-table .plan li {\n  padding: 5px 0;\n  color: #fff;\n  transition: 300ms;\n}\n:host ::ng-deep #pricing-table .plan li.plan-name {\n  font-size: 24px;\n  line-height: 24px;\n  color: #fff;\n  padding-bottom: 35px;\n}\n:host ::ng-deep #pricing-table .plan li.plan-name h3 {\n  margin: 0;\n}\n:host ::ng-deep #pricing-table .plan li.plan-price {\n  margin-bottom: 20px;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n:host ::ng-deep #pricing-table .plan li.plan-price > div {\n  display: inline-block;\n  padding: 10px;\n  font-size: 24px;\n  width: 70px;\n  height: 70px;\n}\n:host ::ng-deep #pricing-table .plan li.plan-price > div sup {\n  font-size: 10px;\n  line-height: 10px;\n}\n:host ::ng-deep #pricing-table .plan li.plan-price > div > small {\n  display: block;\n  font-size: 11px;\n}\n:host ::ng-deep #pricing-table .plan li.plan-action {\n  margin-top: 25px;\n  border-top: 0;\n}\n:host ::ng-deep #pricing-table .plan.featured {\n  background-color: #202020;\n}\n:host ::ng-deep #title h1 {\n  margin: 0;\n  font-size: 36px;\n  font-weight: 300;\n}\n:host ::ng-deep .center {\n  text-align: center;\n}\n:host ::ng-deep #meet-the-team .role {\n  margin-top: 10px;\n  display: block;\n  font-size: 14px;\n}\n:host ::ng-deep .img-thumbnail {\n  border: 0;\n}\n:host ::ng-deep .progress,\n:host ::ng-deep .progress .bar {\n  background: #fff;\n  box-shadow: none;\n  height: 30px;\n  line-height: 30px;\n}\n:host ::ng-deep .well {\n  box-shadow: none;\n  border: 0;\n}\n:host ::ng-deep ul.breadcrumb {\n  margin: 20px 0 0;\n  background: transparent;\n}\n:host ::ng-deep ul.breadcrumb > li {\n  text-shadow: none;\n}\n:host ::ng-deep ul.breadcrumb > li > a,\n:host ::ng-deep ul.breadcrumb > li .divider {\n  color: #fff;\n}\n:host ::ng-deep ul.breadcrumb > li.active {\n  color: rgba(255, 255, 255, 0.7);\n}\n:host ::ng-deep ul.tag-cloud {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n:host ::ng-deep ul.tag-cloud li {\n  display: inline-block;\n  margin: 0 0 2px;\n}\n:host ::ng-deep .btn-social {\n  border: 0;\n  color: #fff;\n  border-radius: 0;\n  display: inline-block;\n  width: 30px;\n  height: 33px;\n  line-height: 30px;\n  text-align: center;\n  padding: 0;\n}\n:host ::ng-deep .btn-social.btn-facebook {\n  border: 2px solid #4f7dd4;\n  color: #4f7dd4;\n}\n:host ::ng-deep .btn-social.btn-facebook:hover {\n  background: #4f7dd4;\n}\n:host ::ng-deep .btn-social.btn-twitter {\n  border: 2px solid #5bceff;\n  color: #5bceff;\n}\n:host ::ng-deep .btn-social.btn-twitter:hover {\n  background: #8eddff;\n}\n:host ::ng-deep .btn-social.btn-linkedin {\n  border: 2px solid #21a6d8;\n  color: #21a6d8;\n}\n:host ::ng-deep .btn-social.btn-linkedin:hover {\n  background: #21a6d8;\n}\n:host ::ng-deep .btn-social.btn-google-plus {\n  border: 2px solid #dc422b;\n  color: #dc422b;\n}\n:host ::ng-deep .btn-social.btn-google-plus:hover {\n  background: #dc422b;\n}\n:host ::ng-deep .btn-social:hover {\n  color: #fff;\n}\n:host ::ng-deep .navbar-inverse {\n  background-color: #202020;\n  border: none;\n  transition: all 0.5s ease-in-out;\n}\n:host ::ng-deep .navbar-inverse .navbar-toggle {\n  background-color: transparent;\n  color: #fff;\n}\n:host ::ng-deep .navbar-fixed-top {\n  transition: all 0.5s ease-in-out;\n}\n:host ::ng-deep .navbar-inverse .navbar-brand {\n  font-family: Lato, sans-serif;\n  font-size: 36px;\n  line-height: 50px;\n  color: #fff;\n}\n:host ::ng-deep .navbar-inverse .navbar-nav {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n:host ::ng-deep .navbar-inverse .navbar-nav > li > a {\n  position: relative;\n  display: inline-block;\n  outline: none;\n  text-decoration: none;\n  text-transform: uppercase;\n  letter-spacing: 0;\n  font-size: 15px;\n  padding: 10px;\n  color: #f5f5f5;\n  font-weight: 700;\n  text-shadow: none;\n  transition: color 0.3s;\n}\n:host ::ng-deep .navbar-inverse .navbar-nav > li > a::before,\n:host ::ng-deep .navbar-inverse .navbar-nav > li > a::after {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: #fff;\n  content: \"\";\n  opacity: 0;\n  transition: opacity 0.3s transform 0.3s;\n  -webkit-transform: translateY(-10px);\n  transform: translateY(-10px);\n  transition: all 0.5s ease-in-out;\n}\n:host ::ng-deep .navbar-inverse .navbar-nav > li > a:hover::before,\n:host ::ng-deep .navbar-inverse .navbar-nav > li > a:focus::before,\n:host ::ng-deep .navbar-inverse .navbar-nav > li > a:hover::after,\n:host ::ng-deep .navbar-inverse .navbar-nav > li > a:focus::after {\n  opacity: 1;\n  -webkit-transform: translateY(0px);\n  transform: translateY(0px);\n  transition: all 0.5s ease-in-out;\n}\n:host ::ng-deep .navbar-inverse .navbar-nav > li > a::before {\n  top: 0;\n  -webkit-transform: translateY(-10px);\n  transform: translateY(-10px);\n  display: none;\n  transition: all 0.5s ease-in-out;\n}\n:host ::ng-deep .navbar-inverse .navbar-nav > li > a::after {\n  bottom: 0;\n  -webkit-transform: translateY(10px);\n  transform: translateY(10px);\n  transition: all 0.5s ease-in-out;\n}\n:host ::ng-deep .navbar-inverse .navbar-nav > li > a::before,\n:host ::ng-deep .navbar-inverse .navbar-nav > li > a::after {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: #fff;\n  content: \"\";\n  opacity: 0;\n  transition: all 0.5s ease-in-out;\n  transition: opacity 0.3s transform 0.3s;\n  -webkit-transform: translateY(-10px);\n  transform: translateY(-10px);\n}\n:host ::ng-deep .navbar-inverse .navbar-nav > .active > a,\n:host ::ng-deep .navbar-inverse .navbar-nav > .active > a:hover,\n:host ::ng-deep .navbar-inverse .navbar-nav > .active > a:focus,\n:host ::ng-deep .navbar-inverse .navbar-nav > .open > a,\n:host ::ng-deep .navbar-inverse .navbar-nav > .open > a:hover,\n:host ::ng-deep .navbar-inverse .navbar-nav > .open > a:focus {\n  background-color: transparent;\n}\n:host ::ng-deep .navbar-inverse .navbar-nav .dropdown-menu {\n  background-color: #202020;\n  box-shadow: none;\n  border: 0;\n  padding: 0;\n  margin-top: 15px;\n}\n:host ::ng-deep .navbar-right .dropdown-menu {\n  right: auto;\n  left: 0;\n}\n:host ::ng-deep .navbar-inverse .navbar-nav .dropdown-menu > li > a {\n  padding: 8px 15px;\n  color: #efefef;\n}\n:host ::ng-deep .navbar-inverse .navbar-nav .dropdown-menu > li:hover > a,\n:host ::ng-deep .navbar-inverse .navbar-nav .dropdown-menu > li:focus > a,\n:host ::ng-deep .navbar-inverse .navbar-nav .dropdown-menu > li.active > a {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n:host ::ng-deep .navbar-inverse .navbar-nav .dropdown-menu > li:last-child > a {\n  border-radius: 0 0 3px 3px;\n}\n:host ::ng-deep .navbar-inverse .navbar-nav .dropdown-menu > li.divider {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n:host ::ng-deep .navbar-inverse .navbar-collapse,\n:host ::ng-deep .navbar-inverse .navbar-form {\n  border-top: 0;\n}\n:host ::ng-deep .opaqued {\n  padding: 10px 0;\n  background-color: rgba(0, 0, 0, 0.6);\n  transition: all 0.5s ease-in-out;\n  text-shadow: rgba(0, 0, 0, 0.4) 0 1px 1px;\n}\n:host ::ng-deep .navbar-inverse.opaqued .navbar-nav .dropdown-menu {\n  background-color: rgba(0, 0, 0, 0.6);\n  transition: all 0.5s ease-in-out;\n}\n:host ::ng-deep .navbar-brand h1 {\n  margin: 0;\n  font-weight: 700;\n  font-size: 30px;\n  margin-top: 4px;\n}\n:host ::ng-deep .team-member:hover .img-thumbnail {\n  background: transparent;\n  background-color: #00b29e;\n}\n:host ::ng-deep .team-member .img-thumbnail {\n  padding: 0;\n  border-radius: 0;\n  margin-bottom: 0;\n  overflow: hidden;\n  transition: background 0.3s color 0.3s box-shadow 0.3s;\n}\n:host ::ng-deep .team-content {\n  background: #fff;\n  padding: 15px;\n  border-bottom: 4px solid #f0f0f0;\n}\n:host ::ng-deep .team-content h5 {\n  font-size: 16px;\n}\n:host ::ng-deep .team-content:after {\n  bottom: 100%;\n  left: 50%;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n  border-color: rgba(255, 255, 255, 0);\n  border-bottom-color: #fff;\n  border-width: 15px;\n  margin-left: -15px;\n}\n:host ::ng-deep .team-member .btn {\n  margin-top: 10px;\n  margin-bottom: 5px;\n}\n:host ::ng-deep .team-image {\n  position: relative;\n  padding: 0;\n}\n:host ::ng-deep .team-image .overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  background: rgba(255, 255, 255, 0.9);\n  text-align: center;\n  vertical-align: middle;\n  transition: opacity 300ms;\n}\n:host ::ng-deep .team-image .overlay .preview {\n  position: relative;\n  top: 50%;\n  display: inline-block;\n  margin-top: -20px;\n}\n:host ::ng-deep .team-image:hover .overlay {\n  opacity: 1;\n}\n:host ::ng-deep #social-media .fa-facebook {\n  background-color: #3c5899;\n}\n:host ::ng-deep #social-media .fa-facebook:hover {\n  background-color: #4e6fba;\n}\n:host ::ng-deep #social-media .fa-twitter {\n  background-color: #29c5f6;\n}\n:host ::ng-deep #social-media .fa-twitter:hover {\n  background-color: #5ad2f8;\n}\n:host ::ng-deep #social-media .fa-google-plus {\n  background-color: #d13d2f;\n}\n:host ::ng-deep #social-media .fa-google-plus:hover {\n  background-color: #da6459;\n}\n:host ::ng-deep #social-media .fa-pinterest {\n  background-color: #c61118;\n}\n:host ::ng-deep #social-media .fa-pinterest:hover {\n  background-color: #ec1e26;\n}\n:host ::ng-deep .fa-lg {\n  font-size: 48px;\n  height: 108px;\n  width: 108px;\n  line-height: 108px;\n  color: #fff;\n  margin: 10px;\n  background-color: rgba(0, 0, 0, 0.4);\n  text-align: center;\n  display: inline-block !important;\n  border-radius: 100%;\n}\n:host ::ng-deep .fa-md {\n  font-size: 36px;\n  height: 68px;\n  width: 68px;\n  line-height: 68px;\n  color: #fff;\n  margin-right: 15px;\n  background-color: #00b29e;\n  text-align: center;\n  display: block;\n  box-shadow: 0 0 0 4px white;\n  overflow: hidden;\n  transition: background 0.3s color 0.3s box-shadow 0.3s;\n}\n:host ::ng-deep .service-block:hover .fa-md {\n  background: transparent;\n  color: #00b29e;\n  box-shadow: 0 0 0 4px #00b29e;\n}\n:host ::ng-deep .service-block .media-heading {\n  margin-bottom: 10px;\n  font-size: 16px;\n}\n:host ::ng-deep .section-heading hr {\n  margin: 5px auto;\n  max-width: 600px;\n}\n:host ::ng-deep .modal {\n  border: 0;\n}\n:host ::ng-deep .modal#loginForm {\n  width: 600px;\n  margin-left: -300px;\n}\n:host ::ng-deep .modal .modal-header {\n  border: 0;\n  padding: 20px 20px 0;\n}\n:host ::ng-deep .modal .modal-header > h4 {\n  font-weight: 300;\n  font-size: 14px;\n  color: #848484;\n  text-transform: uppercase;\n  margin: 0;\n}\n:host ::ng-deep .modal .modal-body {\n  padding: 20px;\n}\n:host ::ng-deep .modal input[type=text],\n:host ::ng-deep .modal input[type=password] {\n  padding: 5px 10px;\n  min-height: 30px;\n  width: 130px;\n  margin-right: 10px;\n}\n:host ::ng-deep .modal .fa-remove {\n  color: #848484;\n  position: absolute;\n  right: -5px;\n  top: -5px;\n  width: 16px;\n  height: 16px;\n  line-height: 16px;\n  text-align: center;\n  display: block;\n  background: #ebebeb;\n  border-radius: 100%;\n  cursor: pointer;\n}\n:host ::ng-deep .modal button {\n  margin-left: 10px;\n  border: 0;\n}\n:host ::ng-deep .gap {\n  margin-bottom: 50px;\n}\n:host ::ng-deep .big-gap {\n  margin-bottom: 100px;\n}\n:host ::ng-deep .no-margin {\n  margin: 0;\n  padding: 0;\n}\n:host ::ng-deep .registration-form {\n  border: 0;\n  background-color: #fff;\n  padding: 20px;\n  display: inline-block;\n}\n:host ::ng-deep #bottom {\n  color: #bdc3c7;\n}\n:host ::ng-deep #bottom h4 {\n  margin-top: 0;\n  margin-bottom: 15px;\n}\n:host ::ng-deep #bottom .media-heading {\n  display: block;\n  font-weight: 400;\n}\n:host ::ng-deep .row > div {\n  margin-bottom: 10px;\n}\n:host ::ng-deep ul.unstyled {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n:host ::ng-deep ul.arrow,\n:host ::ng-deep ul.arrow-double,\n:host ::ng-deep ul.tick,\n:host ::ng-deep ul.cross,\n:host ::ng-deep ul.star,\n:host ::ng-deep ul.rss {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n:host ::ng-deep ul.arrow li::before,\n:host ::ng-deep ul.arrow-double li::before,\n:host ::ng-deep ul.tick li::before,\n:host ::ng-deep ul.cross li::before,\n:host ::ng-deep ul.star li::before,\n:host ::ng-deep ul.rss li::before,\n:host ::ng-deep ul.arrow li::after,\n:host ::ng-deep ul.arrow-double li::after,\n:host ::ng-deep ul.tick li::after,\n:host ::ng-deep ul.cross li::after,\n:host ::ng-deep ul.star li::after,\n:host ::ng-deep ul.rss li::after {\n  font-family: FontAwesome;\n  font-size: 10px;\n}\n:host ::ng-deep ul.arrow li::before,\n:host ::ng-deep ul.arrow-double li::before,\n:host ::ng-deep ul.tick li::before,\n:host ::ng-deep ul.cross li::before,\n:host ::ng-deep ul.star li::before,\n:host ::ng-deep ul.rss li::before {\n  margin-right: 6px;\n}\n:host ::ng-deep ul.arrow li::before {\n  content: \"\";\n}\n:host ::ng-deep ul.arrow-double li::before {\n  content: \"\";\n}\n:host ::ng-deep ul.tick li::before {\n  content: \"\";\n}\n:host ::ng-deep ul.cross li::before {\n  content: \"\";\n}\n:host ::ng-deep ul.star li::before {\n  content: \"\";\n}\n:host ::ng-deep ul.rss li::before {\n  content: \"\";\n}\n:host ::ng-deep #footer {\n  margin-top: 40px;\n  background-color: #101010;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  color: #eee;\n  border-top: 1px solid #333;\n}\n:host ::ng-deep #footer a,\n:host ::ng-deep #footer-wrapper a {\n  color: #bdc3c7;\n}\n:host ::ng-deep #footer a:hover,\n:host ::ng-deep #footer-wrapper a:hover {\n  color: #00b29e;\n}\n:host ::ng-deep #footer ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n:host ::ng-deep #footer ul > li {\n  display: inline-block;\n  margin-left: 15px;\n}\n:host ::ng-deep ul.social {\n  list-style: none;\n  margin: 10px 0 0;\n  padding: 0;\n  display: inline-block;\n}\n:host ::ng-deep ul.social > li {\n  display: inline-block;\n  margin: 0 5px;\n}\n:host ::ng-deep ul.social > li > a {\n  font-size: 24px;\n  color: #666;\n}\n:host ::ng-deep ul.social > li > a:hover {\n  color: #999;\n}\n:host ::ng-deep .box-border {\n  padding: 15px;\n}\n:host ::ng-deep .accordion-group {\n  background-color: #fff;\n  border-top: 1px solid #f0f0f0;\n}\n:host ::ng-deep .accordion-heading .accordion-toggle {\n  color: #666;\n  font-weight: 700;\n}\n:host ::ng-deep .accordion-inner {\n  border-top: 0;\n}\n:host ::ng-deep .blog .blog-item {\n  background-color: #fff;\n  margin-bottom: 40px;\n}\n:host ::ng-deep .blog .blog-item .img-blog {\n  width: 100%;\n  border-radius: 0;\n  height: auto;\n}\n:host ::ng-deep .blog .blog-item .blog-content {\n  padding: 20px;\n  position: relative;\n  border-bottom: 4px solid #f0f0f0;\n}\n:host ::ng-deep .blog .blog-item .blog-content:after {\n  bottom: 100%;\n  left: 50%;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n  border-color: rgba(255, 255, 255, 0);\n  border-bottom-color: #fff;\n  border-width: 15px;\n  margin-left: -15px;\n}\n:host ::ng-deep .blog .blog-item h3 {\n  margin-top: 0;\n}\n:host ::ng-deep .blog .blog-item .entry-meta {\n  text-transform: uppercase;\n  font-size: 12px;\n  color: #737373;\n  margin-bottom: 11px;\n}\n:host ::ng-deep .blog .blog-item .entry-meta > span {\n  display: inline-block;\n  color: #999;\n  margin-right: 10px;\n  font-size: 12px;\n}\n:host ::ng-deep .blog .blog-item .entry-meta > span a {\n  color: #999;\n}\n:host ::ng-deep .blog-featured-image {\n  position: relative;\n  padding: 0;\n}\n:host ::ng-deep .blog-featured-image .overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  background: rgba(255, 255, 255, 0.9);\n  text-align: center;\n  vertical-align: middle;\n  transition: opacity 300ms;\n}\n:host ::ng-deep .blog-featured-image .overlay .preview {\n  position: relative;\n  top: 50%;\n  display: inline-block;\n  margin-top: -20px;\n}\n:host ::ng-deep .blog-featured-image:hover .overlay {\n  opacity: 1;\n}\n:host ::ng-deep ul.pagination > li > a {\n  border: 0;\n}\n:host ::ng-deep ul.pagination > li.active > a,\n:host ::ng-deep ul.pagination > li:hover > a {\n  background-color: #222;\n  color: #fff;\n}\n:host ::ng-deep textarea#message {\n  padding: 10px 15px;\n  height: 219px;\n}\n:host ::ng-deep .widget {\n  margin-bottom: 30px;\n}\n:host ::ng-deep ul.gallery {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n:host ::ng-deep ul.gallery li {\n  display: block;\n  width: 60px;\n  padding: 0;\n  margin: 0 4px 4px 0;\n  float: left;\n}\n:host ::ng-deep ul.faq {\n  list-style: none;\n  margin: 0;\n}\n:host ::ng-deep ul.faq li {\n  margin-top: 30px;\n}\n:host ::ng-deep ul.faq li:first-child {\n  margin-top: 0;\n}\n:host ::ng-deep ul.faq li span.number {\n  display: block;\n  float: left;\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  background: #222;\n  color: #fff;\n  font-size: 24px;\n}\n:host ::ng-deep ul.faq li > div {\n  margin-left: 70px;\n}\n:host ::ng-deep ul.faq li > div h3 {\n  margin-top: 0;\n}\n:host ::ng-deep #error {\n  text-align: center;\n  margin-top: 150px;\n  margin-bottom: 150px;\n}\n:host ::ng-deep img.comment-avatar {\n  max-width: 80px;\n  height: auto;\n}\n:host ::ng-deep img.author-box-image {\n  max-width: 110px;\n  height: auto;\n}\n:host ::ng-deep #comments-list .well {\n  position: relative;\n  overflow: hidden;\n}\n:host ::ng-deep #comments-list .well:after {\n  right: 100%;\n  top: 50%;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n  border-color: rgba(245, 245, 245, 0);\n  border-right-color: #f5f5f5;\n  border-width: 10px;\n  margin-top: -10px;\n}\n:host ::ng-deep #content-wrapper {\n  padding: 0;\n  z-index: 5;\n  position: relative;\n  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.4);\n}\n:host ::ng-deep .white {\n  background: #f8f8f8;\n  padding: 20px 0;\n}\n:host ::ng-deep #content-wrapper section {\n  padding-top: 60px;\n  padding-bottom: 60px;\n}\n:host ::ng-deep #footer-wrapper {\n  z-index: 1;\n  padding-top: 60px;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  background-color: #202020;\n}\n:host ::ng-deep .widget-img {\n  max-width: 80px;\n  height: auto;\n}\n:host ::ng-deep .about-us-widget {\n  background-size: contain;\n}\n:host ::ng-deep .widget-title {\n  font-size: 18px;\n  text-transform: uppercase;\n}\n:host ::ng-deep #search-wrapper input#search-box {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  width: 100%;\n  background-color: #555;\n  border-bottom: 2px solid #555;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  color: #eee;\n  font-size: 14px;\n  padding: 8px 5px;\n}\n:host ::ng-deep .opaqued #search-wrapper input#search-box {\n  background-color: rgba(0, 0, 0, 0.4);\n  border-bottom: 2px solid transparent;\n}\n:host ::ng-deep .search-trigger {\n  color: #fff;\n  padding: 10px;\n  display: block;\n}\n:host ::ng-deep .search-trigger:hover {\n  cursor: pointer;\n}\n:host ::ng-deep .divider-section {\n  background-color: rgba(0, 0, 0, 0.8);\n  position: relative;\n  overflow: hidden;\n  display: block;\n  color: #f5f5f5;\n}\n:host ::ng-deep .divider-section a {\n  color: #f5f5f5;\n}\n:host ::ng-deep .btn-outlined {\n  border-radius: 0;\n  transition: all 0.3s;\n  font-weight: 700;\n  text-transform: uppercase;\n  box-shadow: none !important;\n}\n:host ::ng-deep .btn-outlined.btn-primary {\n  background: none;\n  border: 2px solid #00b29e;\n  color: #00b29e;\n}\n:host ::ng-deep .btn-outlined.btn-primary:hover,\n:host ::ng-deep .btn-outlined.btn-primary:active {\n  color: #fff;\n  background: #00b29e;\n  border-color: #00b29e;\n}\n:host ::ng-deep .btn-outlined.btn-success {\n  background: none;\n  border: 2px solid #5cb85c;\n  color: #5cb85c;\n}\n:host ::ng-deep .btn-outlined.btn-success:hover,\n:host ::ng-deep .btn-outlined.btn-success:active {\n  color: #fff;\n  background: #47a447;\n}\n:host ::ng-deep .btn-outlined.btn-info {\n  background: none;\n  border: 2px solid #5bc0de;\n  color: #5bc0de;\n}\n:host ::ng-deep .btn-outlined.btn-info:hover,\n:host ::ng-deep .btn-outlined.btn-info:active {\n  color: #fff;\n  background: #39b3d7;\n}\n:host ::ng-deep .btn-outlined.btn-warning {\n  background: none;\n  border: 2px solid #f0ad4e;\n  color: #f0ad4e;\n}\n:host ::ng-deep .btn-outlined.btn-warning:hover,\n:host ::ng-deep .btn-outlined.btn-warning:active {\n  color: #fff;\n  background: #ed9c28;\n}\n:host ::ng-deep .btn-outlined.btn-danger {\n  background: none;\n  border: 2px solid #d9534f;\n  color: #d9534f;\n}\n:host ::ng-deep .btn-outlined.btn-danger:hover,\n:host ::ng-deep .btn-outlined.btn-danger:active {\n  color: #fff;\n  background: #d2322d;\n}\n:host ::ng-deep .btn-outlined.btn-white {\n  background: none;\n  border: 2px solid #fff;\n  color: #fff;\n}\n:host ::ng-deep .btn-outlined.btn-white:hover,\n:host ::ng-deep .btn-outlined.btn-white:active {\n  color: #00b29e;\n  background: #fff;\n}\n:host ::ng-deep .no-display {\n  opacity: 0;\n}\n:host ::ng-deep .appear {\n  opacity: 1;\n  transition: all 0.4s ease-in-out;\n}\n:host ::ng-deep .post {\n  background-color: #fff;\n  overflow: hidden;\n}\n:host ::ng-deep .post .content {\n  padding: 15px;\n  position: relative;\n  border-bottom: 4px solid #f0f0f0;\n}\n:host ::ng-deep .post .content:after {\n  bottom: 100%;\n  left: 50%;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n  border-color: rgba(255, 255, 255, 0);\n  border-bottom-color: #fff;\n  border-width: 15px;\n  margin-left: -15px;\n}\n:host ::ng-deep .post .author {\n  text-transform: uppercase;\n  font-size: 12px;\n  color: #737373;\n  padding: 10px 0 8px;\n}\n:host ::ng-deep .post .post-img-content {\n  position: relative;\n  padding: 0;\n}\n:host ::ng-deep .post .post-img-content .overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  background: rgba(255, 255, 255, 0.9);\n  text-align: center;\n  vertical-align: middle;\n  transition: opacity 300ms;\n}\n:host ::ng-deep .post .post-img-content .overlay .preview {\n  position: relative;\n  top: 50%;\n  display: inline-block;\n  margin-top: -20px;\n}\n:host ::ng-deep .post .post-img-content:hover .overlay {\n  opacity: 1;\n}\n:host ::ng-deep .post .post-title {\n  font-size: 18px;\n  margin: 0 0 10px;\n  display: table-cell;\n  vertical-align: bottom;\n  z-index: 2;\n  position: relative;\n}\n:host ::ng-deep .post .post-title b {\n  background-color: rgba(51, 51, 51, 0.58);\n  display: inline-block;\n  margin-bottom: 5px;\n  color: #fff;\n  padding: 10px 15px;\n  margin-top: 5px;\n}\n:host ::ng-deep .read-more-wrapper {\n  margin: 25px 0 5px;\n  text-align: right;\n}\n:host ::ng-deep .stat-icon {\n  font-size: 44px;\n}\n:host ::ng-deep #stats h1 {\n  margin: 10px 0;\n  font-size: 32px;\n}\n:host ::ng-deep #stats h3 {\n  margin: 0;\n  font-size: 16px;\n  text-transform: uppercase;\n}\n:host ::ng-deep .tile-progress {\n  background-color: #303641;\n  color: #fff;\n}\n:host ::ng-deep .tile-progress {\n  background: #00a65b;\n  color: #fff;\n  margin-bottom: 20px;\n  border-radius: 5px;\n  -webkit-background-clip: padding-box;\n  -moz-background-clip: padding;\n  background-clip: padding-box;\n  border-radius: 0;\n}\n:host ::ng-deep .tile-progress .tile-header {\n  padding: 15px 20px;\n  padding-bottom: 40px;\n}\n:host ::ng-deep .tile-progress .tile-progressbar {\n  height: 4px;\n  background: rgba(0, 0, 0, 0.18);\n  margin: 0;\n}\n:host ::ng-deep .tile-progress .tile-progressbar span {\n  background: #fff;\n}\n:host ::ng-deep .tile-progress .tile-progressbar span {\n  display: block;\n  background: #fff;\n  width: 0;\n  height: 100%;\n  transition: all 1.5s cubic-bezier(0.23, 1, 0.32, 1);\n}\n:host ::ng-deep .tile-progress .tile-footer {\n  padding: 10px 20px;\n  text-align: left;\n  -moz-background-clip: padding;\n  border-radius: 0 0 3px 3px;\n  background-clip: padding-box;\n  border-radius: 0 0 3px 3px;\n  float: left;\n  position: relative;\n  margin-top: -30px;\n}\n:host ::ng-deep .tile-progress.tile-red {\n  background-color: #fff;\n  color: #202020;\n}\n:host ::ng-deep .tile-progress .tile-progressbar span {\n  background: #202020;\n}\n:host ::ng-deep .tile-progress.tile-red .tile-footer {\n  background: #f56954;\n  color: #fff;\n}\n:host ::ng-deep .tile-progress.tile-cyan {\n  background-color: #fff;\n  color: #202020;\n}\n:host ::ng-deep .tile-progress.tile-cyan .tile-progressbar span {\n  background: #202020;\n}\n:host ::ng-deep .tile-progress.tile-cyan .tile-footer {\n  background: #00b29e;\n  color: #fff;\n}\n:host ::ng-deep .tile-progress {\n  background-color: #fff;\n  color: #202020;\n}\n:host ::ng-deep .tile-progress .tile-progressbar span {\n  background: #202020;\n}\n:host ::ng-deep .tile-progress .tile-footer {\n  background: #303641;\n  color: #fff;\n}\n:host ::ng-deep .tile-progress.tile-pink {\n  background-color: #fff;\n  color: #202020;\n}\n:host ::ng-deep .tile-progress.tile-pink .tile-progressbar span {\n  background: #202020;\n}\n:host ::ng-deep .tile-progress.tile-pink .tile-footer {\n  background: #ec3b83;\n  color: #fff;\n}\n:host ::ng-deep .backstretch {\n  z-index: 3 !important;\n}\n:host ::ng-deep #quote-carousel .carousel-indicators {\n  right: 50%;\n  top: auto;\n  bottom: 0;\n  margin-right: -19px;\n}\n:host ::ng-deep #quote-carousel .carousel-indicators li {\n  background: silver;\n}\n:host ::ng-deep #quote-carousel .carousel-indicators .active {\n  background: #333;\n}\n:host ::ng-deep #quote-carousel img {\n  width: 250px;\n  height: 100px;\n}\n:host ::ng-deep .item blockquote {\n  border-left: none;\n  margin: 0;\n  background-color: transparent;\n}\n:host ::ng-deep .item blockquote img {\n  margin-bottom: 10px;\n}\n:host ::ng-deep .item blockquote p:before {\n  content: \"\";\n  font-family: Fontawesome;\n  float: left;\n  margin-right: 10px;\n}\n:host ::ng-deep .testimonial-list-item:hover blockquote {\n  border-left: 4px solid #00b29e;\n}\n:host ::ng-deep .quote-author-list {\n  max-width: 95px;\n  height: auto;\n  padding: 10px 0 10px 15px;\n  margin-right: 19px;\n  position: relative;\n}\n@media screen and (min-width: 768px) {\n  :host ::ng-deep #quote-carouse {\n    margin-bottom: 0;\n    padding: 0 40px 30px;\n    margin-top: 30px;\n  }\n  :host ::ng-deep #main-slider .carousel,\n:host ::ng-deep #main-slider .carousel-inner,\n:host ::ng-deep #main-slider .carousel-inner .item,\n:host ::ng-deep #main-slider .carousel-inner .item .container,\n:host ::ng-deep #main-slider .carousel-inner .item .row,\n:host ::ng-deep #main-slider .carousel-inner .item .row .col-sm-12 {\n    height: 100vh;\n  }\n}\n@media screen and (max-width: 769px) {\n  :host ::ng-deep #quote-carousel .carousel-indicators {\n    bottom: -20px !important;\n  }\n  :host ::ng-deep #quote-carousel .carousel-indicators li {\n    display: inline-block;\n    margin: 0 5px;\n    width: 15px;\n    height: 15px;\n  }\n  :host ::ng-deep #quote-carousel .carousel-indicators li.active {\n    margin: 0 5px;\n    width: 20px;\n    height: 20px;\n  }\n}\n:host ::ng-deep #contactform input#name,\n:host ::ng-deep #contactform input#email,\n:host ::ng-deep #contactform input#website,\n:host ::ng-deep #contactform textarea#comments {\n  width: 100%;\n  padding: 10px 5px;\n  margin-bottom: 15px;\n  background-color: rgba(0, 0, 0, 0.1);\n  color: #202020;\n  border: none;\n}\n:host ::ng-deep #contactform textarea#comments {\n  min-height: 150px;\n}\n:host ::ng-deep #contact h3 {\n  text-transform: uppercase;\n}\n:host ::ng-deep #mapwrapper {\n  width: 100%;\n  height: 400px;\n}\n:host ::ng-deep .form-horizontal .control-label {\n  display: none;\n}\n:host ::ng-deep #message {\n  padding: 0;\n}\n:host ::ng-deep .form-control {\n  padding: 10px 5px;\n  background-color: rgba(0, 0, 0, 0.1);\n  color: #202020;\n  border: none;\n  border-radius: 0;\n}\n:host ::ng-deep #preloader {\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 999999;\n  width: 100%;\n  height: 100%;\n  overflow: visible;\n}\n:host ::ng-deep .mb0 {\n  margin-bottom: 0 !important;\n}\n:host ::ng-deep .section-inner {\n  padding-top: 60px;\n  padding-bottom: 60px;\n}\n:host ::ng-deep .section-inner.gap {\n  margin-bottom: 0 !important;\n}\n:host ::ng-deep .navbar-header h1 {\n  color: #fff;\n  font-size: 24px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  margin: 0;\n}\n:host ::ng-deep .navbar-inverse .navbar-nav {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n:host ::ng-deep .navbar-inverse .navbar-nav > li > a {\n  letter-spacing: 1px;\n  font-size: 15px;\n  padding: 15px 15px 10px;\n  color: #f5f5f5;\n  font-weight: 400;\n}\n:host ::ng-deep .blog .blog-item .blog-content {\n  padding: 60px 40px;\n  position: relative;\n  border-bottom: 4px solid #f0f0f0;\n}\n:host ::ng-deep .btn {\n  padding: 10px 16px;\n  font-size: 13px;\n  letter-spacing: 2px;\n}\n:host ::ng-deep .form-control {\n  height: 42px;\n}\n:host ::ng-deep .widget-title {\n  margin-top: 0;\n  font-size: 16px;\n  text-transform: uppercase;\n  margin-bottom: 30px;\n  letter-spacing: 2px;\n}\n:host ::ng-deep .portfolio-item h5 {\n  background: #fff;\n  margin: 0 20px 0 0;\n  padding: 20px 10px;\n  font-weight: 400;\n  font-size: 14px;\n  letter-spacing: 2px;\n}\n:host ::ng-deep .post .post-title {\n  font-weight: 400;\n  font-size: 14px;\n  letter-spacing: 2px;\n  display: block;\n  text-transform: uppercase;\n}\n:host ::ng-deep .overlay .btn-outlined.btn-primary {\n  background-color: #fff;\n  border-color: #fff;\n}\n:host ::ng-deep .post .content {\n  padding: 25px 15px;\n}\n:host ::ng-deep .post .author {\n  text-transform: uppercase;\n  font-size: 10px;\n  color: #737373;\n  padding: 10px 0 8px;\n  margin-bottom: 10px;\n}\n:host ::ng-deep .section-heading hr {\n  margin: 20px auto;\n  max-width: 330px;\n  opacity: 0.9;\n}\n:host ::ng-deep .main-title {\n  text-transform: uppercase;\n  letter-spacing: 6px;\n}\n:host ::ng-deep .section-heading p {\n  text-transform: uppercase;\n}\n:host ::ng-deep #content-wrapper {\n  box-shadow: none;\n}\n:host ::ng-deep .navbar-inverse .navbar-nav .dropdown-menu > li > a {\n  padding: 15px 15px 15px;\n  color: #eee;\n  text-transform: uppercase;\n  font-size: 12px;\n  letter-spacing: 1px;\n}\n:host ::ng-deep #single-page-slider {\n  min-height: 310px !important;\n}\n:host ::ng-deep #main-slider .carousel .btn {\n  border: 3px solid rgba(255, 255, 255, 0.9);\n  color: #fff;\n  border-radius: 0;\n  margin-top: 35px;\n  font-size: 19px;\n  font-weight: 400;\n  text-transform: uppercase;\n  padding: 10px 15px;\n  text-shadow: rgba(0, 0, 0, 0.4) 0 1px 1px;\n  letter-spacing: 4px;\n}\n:host ::ng-deep .backstretch:before {\n  content: \"\";\n  background-image: none !important;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n:host ::ng-deep #tagWrapper {\n  text-align: right;\n  margin: 40px 0;\n}\n:host ::ng-deep .btn-sm,\n:host ::ng-deep .btn-xs {\n  padding: 5px 10px;\n  font-size: 12px;\n}\n:host ::ng-deep .comments-title {\n  text-transform: uppercase;\n  margin-bottom: 60px;\n  margin-top: 40px !important;\n  font-size: 18px;\n  letter-spacing: 2px;\n}\n:host ::ng-deep .team-member .btn {\n  margin-top: 10px;\n  margin-bottom: 5px;\n  line-height: 37px;\n  height: 40px;\n  width: 40px;\n  padding: 0;\n}\n:host ::ng-deep .team-content h5 {\n  font-size: 16px;\n  text-transform: uppercase;\n  font-weight: 400;\n  letter-spacing: 2px;\n}\n:host ::ng-deep #testimonials-slider p {\n  font-size: 15px;\n  font-style: italic;\n  margin-bottom: 10px;\n}\n:host ::ng-deep #testimonials-slider h4 {\n  font-weight: 400;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-size: 14px;\n}\n:host ::ng-deep .search-trigger {\n  color: #fff;\n  padding: 15px 15px 10px;\n  display: block;\n  line-height: 1;\n}\n@media all and (max-width: 768px) {\n  :host ::ng-deep #content-wrapper {\n    margin-bottom: 0 !important;\n  }\n  :host ::ng-deep #footer-wrapper {\n    position: relative !important;\n  }\n}\na {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FsZWphbmRyb3BlcmV6L0RvY3VtZW50cy9zaW50aXR1bG8vYmx1ZXhwcmVzcy9naXQvYmx1L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLG1CQUFBO0FERUY7QUNBQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QURHRjtBQ0RBO0VBeUJVLHdFQUFBO0VBNEhSLHNGQUFBO0VBRUE7d0ZBQUE7RUFpSEEsc0ZBQUE7RUFFQTt3RkFBQTtFQXdKQSxzQ0FBQTtFQUVBLDRCQUFBO0VBV0EsbUNBQUE7RUEyQkEsNkNBQUE7RUF5Q0Esc0ZBQUE7RUFFQTt3RkFBQTtFQXNMQSxzRkFBQTtFQUVBO3dGQUFBO0VBc05BLHNGQUFBO0VBRUE7d0ZBQUE7RUFnRkEsc0ZBQUE7RUFFQTt3RkFBQTtFQXFMQSxrQkFBQTtFQWlTQSxzRkFBQTtFQUVBO3dGQUFBO0VBaUNBLHNGQUFBO0VBRUE7d0ZBQUE7RUFvQkEsc0ZBQUE7RUFFQTt3RkFBQTtFQTJCQSxzRkFBQTtFQUVBO3dGQUFBO0VBZ0NBLHNGQUFBO0VBRUE7d0ZBQUE7RUFlQSxzRkFBQTtFQUVBO3dGQUFBO0VBdUZBLHNGQUFBO0VBRUE7d0ZBQUE7RUFlQSxzRkFBQTtFQUVBO3dGQUFBO0VBMkZBLHNGQUFBO0VBRUE7d0ZBQUE7RUFrQkEsc0ZBQUE7RUFFQTt3RkFBQTtFQXVIQSxzRkFBQTtFQUVBO3dGQUFBO0VBT0Esc0ZBQUE7RUFFQTt3RkFBQTtFQXFGQTs7K0VBQUE7RUE2Q0EsY0FBQTtBRG45REY7QUNuRUU7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBRHFFSjtBQ25FSTtFQUNFLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBRHFFTjtBQ2xFRTtFQUNFLGtCQUFBO0FE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ZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xufVxuXG5ib2R5IHtcbiAgY29sb3I6ICMyMjI7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIHtcbiAgQGltcG9ydCB1cmwoXCJodHRwOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjQwMCwgNzAwLCAzMDBcIik7XG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAvKiAgU2xpZGVyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLyogIFNsaWRlclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLyogU3RhcnQ6IFJlY29tbWVuZGVkIElzb3RvcGUgc3R5bGVzICovXG4gIC8qKioqIElzb3RvcGUgRmlsdGVyaW5nICoqKiovXG4gIC8qKioqIElzb3RvcGUgQ1NTMyB0cmFuc2l0aW9ucyAqKioqL1xuICAvKioqKiBkaXNhYmxpbmcgSXNvdG9wZSBDU1MzIHRyYW5zaXRpb25zICoqKiovXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAvKiAgUFJJQ0lOR1xuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIC8qICBOYXZpZ2F0aW9uXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLyogIFRFQU1cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAvKiAgU29jaWFsXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAvKlVub3JkZXJlZCBMaXN0cyovXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAvKiAgQ29ubW1lbnRzXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLyogIENvbnRlbnRcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAvKiAgRm9vdGVyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLyogIFNlYXJjaFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIC8qICBQQVJBTExBWFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIC8qICBCVVRUT05TXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLyogIEFOSU1BVEVcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAvKiAgUG9zdHNcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAvKiAgU1RBVFNcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAvKiAgU0tJTExTXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLyogIEJBQ0tHUk9VTkRTXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLyogIFRFU1RJTU9OSUFMU1xuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIENPTlRBQ1RcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gIC8qIFBSRUxPQURFUiAqL1xufVxuOmhvc3QgOjpuZy1kZWVwLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmU7XG59XG46aG9zdCA6Om5nLWRlZXAuYnRuLXByaW1hcnk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzMzMyAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCA6Om5nLWRlZXAgLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbn1cbjpob3N0IDo6bmctZGVlcCAud3JhcHBlciB7XG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjpob3N0IDo6bmctZGVlcCAuY2xlYXJmaXgge1xuICB6b29tOiAxO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jbGVhcmZpeDpiZWZvcmUsXG46aG9zdCA6Om5nLWRlZXAgLmNsZWFyZml4OmFmdGVyIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGxpbmUtaGVpZ2h0OiAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jbGVhcmZpeDphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5oaWRlLXRleHQge1xuICBmb250OiAwLzAgYTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbn1cbjpob3N0IDo6bmctZGVlcCAuaW5wdXQtYmxvY2stbGV2ZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuOmhvc3QgOjpuZy1kZWVwIGJvZHkge1xuICBjb2xvcjogIzIyMjtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgZm9udC1mYW1pbHk6IExhdG8sIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIGgxLFxuOmhvc3QgOjpuZy1kZWVwIGgyLFxuOmhvc3QgOjpuZy1kZWVwIGgzLFxuOmhvc3QgOjpuZy1kZWVwIGg0LFxuOmhvc3QgOjpuZy1kZWVwIGg1LFxuOmhvc3QgOjpuZy1kZWVwIGg2IHtcbiAgZm9udC1mYW1pbHk6IExhdG8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG46aG9zdCA6Om5nLWRlZXAgYSB7XG4gIGNvbG9yOiAjMjIyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDMwMG1zO1xuICAtbW96LXRyYW5zaXRpb246IDMwMG1zO1xuICAtby10cmFuc2l0aW9uOiAzMDBtcztcbiAgdHJhbnNpdGlvbjogMzAwbXM7XG59XG46aG9zdCA6Om5nLWRlZXAgaHIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG59XG46aG9zdCA6Om5nLWRlZXAgLmJ0biB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG46aG9zdCA6Om5nLWRlZXAgLmJ0bi10cmFuc3BhcmVudCB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZjtcbn1cbjpob3N0IDo6bmctZGVlcCAuYnRuLXRyYW5zcGFyZW50OmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG46aG9zdCA6Om5nLWRlZXAgYTpob3Zlcixcbjpob3N0IDo6bmctZGVlcCBhOmZvY3VzIHtcbiAgY29sb3I6ICNkOTUzNGY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbjpob3N0IDo6bmctZGVlcCAuZHJvcGRvd24tbWVudSB7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIG1pbi13aWR0aDogMTgwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgYm9keSA+IHNlY3Rpb24ge1xuICBwYWRkaW5nOiA1MHB4IDA7XG59XG46aG9zdCA6Om5nLWRlZXAgLmVtYmVkLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDU2LjI1JTtcbiAgLyogMTYvOSByYXRpbyAqL1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgLyogSUU2IHdvcmthcm91bmQqL1xuICBoZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCA6Om5nLWRlZXAgLmVtYmVkLWNvbnRhaW5lciBpZnJhbWUsXG46aG9zdCA6Om5nLWRlZXAgLmVtYmVkLWNvbnRhaW5lciBvYmplY3QsXG46aG9zdCA6Om5nLWRlZXAgLmVtYmVkLWNvbnRhaW5lciBlbWJlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgOjpuZy1kZWVwIGJsb2NrcXVvdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tYWluLXRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbjpob3N0IDo6bmctZGVlcCAjbWFpbi1zbGlkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDU7XG4gIGNvbG9yOiAjZmZmO1xufVxuOmhvc3QgOjpuZy1kZWVwICNtYWluLXNsaWRlciAuY2Fyb3VzZWwtaW5uZXIge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbjpob3N0IDo6bmctZGVlcCAuYmFja3N0cmV0Y2g6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHotaW5kZXg6IC0xO1xufVxuOmhvc3QgOjpuZy1kZWVwICNtYWluLXNsaWRlciAuY2Fyb3VzZWwgaDIge1xuICBmb250LXNpemU6IDQ0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQpIDAgMXB4IDFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgI21haW4tc2xpZGVyIC5jYXJvdXNlbCAuYnRuIHtcbiAgYm9yZGVyOiA1cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIHRleHQtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMCAxcHggMXB4O1xuICB6LWluZGV4OiAxMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwICNtYWluLXNsaWRlciAuY2Fyb3VzZWwgLmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgY29sb3I6ICMyMDIwMjA7XG59XG46aG9zdCA6Om5nLWRlZXAgI21haW4tc2xpZGVyIC5jYXJvdXNlbCAuYm94ZWQge1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuOmhvc3QgOjpuZy1kZWVwICNtYWluLXNsaWRlciAuY2Fyb3VzZWwgLml0ZW0ge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMDtcbiAgdG9wOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDYwMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgZWFzZS1pbi1vdXQgNTAwbXM7XG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLWluLW91dCA1MDBtcztcbiAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLWluLW91dCA1MDBtcztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLWluLW91dCA1MDBtcztcbn1cbjpob3N0IDo6bmctZGVlcCAjbWFpbi1zbGlkZXIgLmNhcm91c2VsIC5pdGVtOmZpcnN0LWNoaWxkIHtcbiAgdG9wOiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46aG9zdCA6Om5nLWRlZXAgI21haW4tc2xpZGVyIC5jYXJvdXNlbCAuaXRlbS5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgZWFzZS1pbi1vdXQgNTAwbXM7XG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLWluLW91dCA1MDBtcztcbiAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLWluLW91dCA1MDBtcztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLWluLW91dCA1MDBtcztcbiAgei1pbmRleDogMTtcbn1cbjpob3N0IDo6bmctZGVlcCAuaG9tZS1pY29uIHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGNsZWFyOiBib3RoO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiA3OHB4O1xuICBtYXJnaW46IDEwMHB4IGF1dG8gMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XG59XG46aG9zdCA6Om5nLWRlZXAgI3NpbmdsZS1wYWdlLXNsaWRlciB7XG4gIHBhZGRpbmctdG9wOiAxNTBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAjc2luZ2xlLXBhZ2Utc2xpZGVyIC5jYXJvdXNlbCB7XG4gIHotaW5kZXg6IDUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMCAxcHggMXB4O1xufVxuOmhvc3QgOjpuZy1kZWVwICNtYWluLXNsaWRlci1wYWdlIHtcbiAgbWluLWhlaWdodDogMzUwcHg7XG4gIHotaW5kZXg6IDIgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAjcmVjZW50LXdvcmtzIHtcbiAgcGFkZGluZzogOTBweCAwO1xufVxuOmhvc3QgOjpuZy1kZWVwICNyZWNlbnQtd29ya3MgLml0ZW0taW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IDo6bmctZGVlcCAucG9ydGZvbGlvLWl0ZW1zLFxuOmhvc3QgOjpuZy1kZWVwIC5wb3J0Zm9saW8tZmlsdGVyIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIC0yMHB4IDIwcHggMDtcbn1cbjpob3N0IDo6bmctZGVlcCAucG9ydGZvbGlvLWZpbHRlciA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wb3J0Zm9saW8tZmlsdGVyID4gbGkgYS5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzAwYjI5ZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwYjI5ZTtcbn1cbjpob3N0IDo6bmctZGVlcCAucG9ydGZvbGlvLWl0ZW1zID4gbGkge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG46aG9zdCA6Om5nLWRlZXAgLnBvcnRmb2xpby1pdGVtcy5jb2wtMiA+IGxpIHtcbiAgd2lkdGg6IDUwJTtcbn1cbjpob3N0IDo6bmctZGVlcCAucG9ydGZvbGlvLWl0ZW1zLmNvbC0zID4gbGkge1xuICB3aWR0aDogMzMlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wb3J0Zm9saW8taXRlbXMuY29sLTQgPiBsaSB7XG4gIHdpZHRoOiAyNSU7XG59XG46aG9zdCA6Om5nLWRlZXAgLnBvcnRmb2xpby1pdGVtcy5jb2wtNSA+IGxpIHtcbiAgd2lkdGg6IDIwJTtcbn1cbjpob3N0IDo6bmctZGVlcCAucG9ydGZvbGlvLWl0ZW1zLmNvbC02ID4gbGkge1xuICB3aWR0aDogMTYlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wb3J0Zm9saW8taXRlbSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IDo6bmctZGVlcCAucG9ydGZvbGlvLWl0ZW0gLml0ZW0taW5uZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMjBweCAyMHB4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjpob3N0IDo6bmctZGVlcCAucG9ydGZvbGlvLWl0ZW0gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCA6Om5nLWRlZXAgLnBvcnRmb2xpby1pdGVtIGg1IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZjBmMGYwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbjpob3N0IDo6bmctZGVlcCAucG9ydGZvbGlvLWl0ZW06aG92ZXIgaDUsXG46aG9zdCA6Om5nLWRlZXAgLnRlYW0tbWVtYmVyOmhvdmVyIC50ZWFtLWNvbnRlbnQsXG46aG9zdCA6Om5nLWRlZXAgLnBvc3Q6aG92ZXIgLmNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMwMGIyOWU7XG59XG46aG9zdCA6Om5nLWRlZXAgLnBvcnRmb2xpby1pdGVtIGg1OmFmdGVyIHtcbiAgYm90dG9tOiAxMDAlO1xuICBsZWZ0OiA1MCU7XG4gIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XG4gIGJvcmRlci13aWR0aDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wb3J0Zm9saW8taXRlbSAub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XG59XG46aG9zdCA6Om5nLWRlZXAgLnBvcnRmb2xpby1pdGVtIC5vdmVybGF5IC5wcmV2aWV3IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAucG9ydGZvbGlvLWl0ZW06aG92ZXIgLm92ZXJsYXkge1xuICBvcGFjaXR5OiAxO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5pc290b3BlLWl0ZW0ge1xuICB6LWluZGV4OiAyO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5pc290b3BlLWhpZGRlbi5pc290b3BlLWl0ZW0ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgei1pbmRleDogMTtcbn1cbjpob3N0IDo6bmctZGVlcCAuaXNvdG9wZSxcbjpob3N0IDo6bmctZGVlcCAuaXNvdG9wZSAuaXNvdG9wZS1pdGVtIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjhzO1xuICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDAuOHM7XG4gIC1tcy10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjhzO1xuICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjhzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjhzO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5pc290b3BlIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBoZWlnaHQsIHdpZHRoO1xuICAtbW96LXRyYW5zaXRpb24tcHJvcGVydHk6IGhlaWdodCwgd2lkdGg7XG4gIC1tcy10cmFuc2l0aW9uLXByb3BlcnR5OiBoZWlnaHQsIHdpZHRoO1xuICAtby10cmFuc2l0aW9uLXByb3BlcnR5OiBoZWlnaHQsIHdpZHRoO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBoZWlnaHQsIHdpZHRoO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5pc290b3BlIC5pc290b3BlLWl0ZW0ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IDAgb3BhY2l0eTtcbiAgLW1vei10cmFuc2l0aW9uLXByb3BlcnR5OiAwIG9wYWNpdHk7XG4gIC1tcy10cmFuc2l0aW9uLXByb3BlcnR5OiAwIG9wYWNpdHk7XG4gIC1vLXRyYW5zaXRpb24tcHJvcGVydHk6IDAgb3BhY2l0eTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5pc290b3BlLm5vLXRyYW5zaXRpb24sXG46aG9zdCA6Om5nLWRlZXAgLmlzb3RvcGUubm8tdHJhbnNpdGlvbiAuaXNvdG9wZS1pdGVtLFxuOmhvc3QgOjpuZy1kZWVwIC5pc290b3BlIC5pc290b3BlLWl0ZW0ubm8tdHJhbnNpdGlvbiB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMDtcbiAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAwO1xuICAtbXMtdHJhbnNpdGlvbi1kdXJhdGlvbjogMDtcbiAgLW8tdHJhbnNpdGlvbi1kdXJhdGlvbjogMDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMDtcbn1cbjpob3N0IDo6bmctZGVlcCAuaXNvdG9wZS5pbmZpbml0ZS1zY3JvbGxpbmcge1xuICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmU7XG4gIC1tb3otdHJhbnNpdGlvbjogbm9uZTtcbiAgLW1zLXRyYW5zaXRpb246IG5vbmU7XG4gIC1vLXRyYW5zaXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IG5vbmU7XG59XG46aG9zdCA6Om5nLWRlZXAgLnByb2plY3QtY29udHJvbHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbn1cbjpob3N0IDo6bmctZGVlcCAucHJvamVjdC1jb250cm9scyBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDcwcHg7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46aG9zdCA6Om5nLWRlZXAgLnByb2plY3QtY29udHJvbHMgc3Bhbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0IDo6bmctZGVlcCBkaXYucHBfb3ZlcmxheSB7XG4gIHotaW5kZXg6IDk5OTkgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAjcHJpY2luZy10YWJsZSAucGxhbiB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMCAwIDIwcHg7XG4gIGJhY2tncm91bmQ6ICMwMGIyOWU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMzBweCAwO1xufVxuOmhvc3QgOjpuZy1kZWVwICNwcmljaW5nLXRhYmxlIC5wbGFuIGxpIHtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGNvbG9yOiAjZmZmO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDMwMG1zO1xuICAtbW96LXRyYW5zaXRpb246IDMwMG1zO1xuICAtby10cmFuc2l0aW9uOiAzMDBtcztcbiAgdHJhbnNpdGlvbjogMzAwbXM7XG59XG46aG9zdCA6Om5nLWRlZXAgI3ByaWNpbmctdGFibGUgLnBsYW4gbGkucGxhbi1uYW1lIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmctYm90dG9tOiAzNXB4O1xufVxuOmhvc3QgOjpuZy1kZWVwICNwcmljaW5nLXRhYmxlIC5wbGFuIGxpLnBsYW4tbmFtZSBoMyB7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IDo6bmctZGVlcCAjcHJpY2luZy10YWJsZSAucGxhbiBsaS5wbGFuLXByaWNlIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuOmhvc3QgOjpuZy1kZWVwICNwcmljaW5nLXRhYmxlIC5wbGFuIGxpLnBsYW4tcHJpY2UgPiBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAjcHJpY2luZy10YWJsZSAucGxhbiBsaS5wbGFuLXByaWNlID4gZGl2IHN1cCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgI3ByaWNpbmctdGFibGUgLnBsYW4gbGkucGxhbi1wcmljZSA+IGRpdiA+IHNtYWxsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbjpob3N0IDo6bmctZGVlcCAjcHJpY2luZy10YWJsZSAucGxhbiBsaS5wbGFuLWFjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGJvcmRlci10b3A6IDA7XG59XG46aG9zdCA6Om5nLWRlZXAgI3ByaWNpbmctdGFibGUgLnBsYW4uZmVhdHVyZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xufVxuOmhvc3QgOjpuZy1kZWVwICN0aXRsZSBoMSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCA6Om5nLWRlZXAgI21lZXQtdGhlLXRlYW0gLnJvbGUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5pbWctdGh1bWJuYWlsIHtcbiAgYm9yZGVyOiAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wcm9ncmVzcyxcbjpob3N0IDo6bmctZGVlcCAucHJvZ3Jlc3MgLmJhciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC53ZWxsIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMDtcbn1cbjpob3N0IDo6bmctZGVlcCB1bC5icmVhZGNydW1iIHtcbiAgbWFyZ2luOiAyMHB4IDAgMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgdWwuYnJlYWRjcnVtYiA+IGxpIHtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG46aG9zdCA6Om5nLWRlZXAgdWwuYnJlYWRjcnVtYiA+IGxpID4gYSxcbjpob3N0IDo6bmctZGVlcCB1bC5icmVhZGNydW1iID4gbGkgLmRpdmlkZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cbjpob3N0IDo6bmctZGVlcCB1bC5icmVhZGNydW1iID4gbGkuYWN0aXZlIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cbjpob3N0IDo6bmctZGVlcCB1bC50YWctY2xvdWQge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG46aG9zdCA6Om5nLWRlZXAgdWwudGFnLWNsb3VkIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMCAycHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1zb2NpYWwge1xuICBib3JkZXI6IDA7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMzcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG59XG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1zb2NpYWwuYnRuLWZhY2Vib29rIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzRmN2RkNDtcbiAgY29sb3I6ICM0ZjdkZDQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1zb2NpYWwuYnRuLWZhY2Vib29rOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzRmN2RkNDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYnRuLXNvY2lhbC5idG4tdHdpdHRlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM1YmNlZmY7XG4gIGNvbG9yOiAjNWJjZWZmO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5idG4tc29jaWFsLmJ0bi10d2l0dGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzhlZGRmZjtcbn1cbjpob3N0IDo6bmctZGVlcCAuYnRuLXNvY2lhbC5idG4tbGlua2VkaW4ge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjFhNmQ4O1xuICBjb2xvcjogIzIxYTZkODtcbn1cbjpob3N0IDo6bmctZGVlcCAuYnRuLXNvY2lhbC5idG4tbGlua2VkaW46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjFhNmQ4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5idG4tc29jaWFsLmJ0bi1nb29nbGUtcGx1cyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkYzQyMmI7XG4gIGNvbG9yOiAjZGM0MjJiO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5idG4tc29jaWFsLmJ0bi1nb29nbGUtcGx1czpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNkYzQyMmI7XG59XG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1zb2NpYWw6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cbjpob3N0IDo6bmctZGVlcCAubmF2YmFyLWludmVyc2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xuICBib3JkZXI6IG5vbmU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLXRvZ2dsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZjtcbn1cbjpob3N0IDo6bmctZGVlcCAubmF2YmFyLWZpeGVkLXRvcCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLWJyYW5kIHtcbiAgZm9udC1mYW1pbHk6IExhdG8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2ID4gbGkgPiBhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICNmNWY1ZjU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogY29sb3IgMC4zcztcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcbn1cbjpob3N0IDo6bmctZGVlcCAubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgPiBsaSA+IGE6OmJlZm9yZSxcbjpob3N0IDo6bmctZGVlcCAubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgPiBsaSA+IGE6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIDAgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgMCAwLjNzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgdHJhbnNmb3JtIDAuM3M7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbjpob3N0IDo6bmctZGVlcCAubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgPiBsaSA+IGE6aG92ZXI6OmJlZm9yZSxcbjpob3N0IDo6bmctZGVlcCAubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgPiBsaSA+IGE6Zm9jdXM6OmJlZm9yZSxcbjpob3N0IDo6bmctZGVlcCAubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgPiBsaSA+IGE6aG92ZXI6OmFmdGVyLFxuOmhvc3QgOjpuZy1kZWVwIC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiA+IGxpID4gYTpmb2N1czo6YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2ID4gbGkgPiBhOjpiZWZvcmUge1xuICB0b3A6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICBkaXNwbGF5OiBub25lO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbjpob3N0IDo6bmctZGVlcCAubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgPiBsaSA+IGE6OmFmdGVyIHtcbiAgYm90dG9tOiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2ID4gbGkgPiBhOjpiZWZvcmUsXG46aG9zdCA6Om5nLWRlZXAgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2ID4gbGkgPiBhOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb250ZW50OiBcIlwiO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgMCAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyAwIDAuM3M7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyB0cmFuc2Zvcm0gMC4zcztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG59XG46aG9zdCA6Om5nLWRlZXAgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2ID4gLmFjdGl2ZSA+IGEsXG46aG9zdCA6Om5nLWRlZXAgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2ID4gLmFjdGl2ZSA+IGE6aG92ZXIsXG46aG9zdCA6Om5nLWRlZXAgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2ID4gLmFjdGl2ZSA+IGE6Zm9jdXMsXG46aG9zdCA6Om5nLWRlZXAgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2ID4gLm9wZW4gPiBhLFxuOmhvc3QgOjpuZy1kZWVwIC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiA+IC5vcGVuID4gYTpob3Zlcixcbjpob3N0IDo6bmctZGVlcCAubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgPiAub3BlbiA+IGE6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbjpob3N0IDo6bmctZGVlcCAubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5uYXZiYXItcmlnaHQgLmRyb3Bkb3duLW1lbnUge1xuICByaWdodDogYXV0bztcbiAgbGVmdDogMDtcbn1cbjpob3N0IDo6bmctZGVlcCAubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGEge1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgY29sb3I6ICNlZmVmZWY7XG59XG46aG9zdCA6Om5nLWRlZXAgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2IC5kcm9wZG93bi1tZW51ID4gbGk6aG92ZXIgPiBhLFxuOmhvc3QgOjpuZy1kZWVwIC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudSA+IGxpOmZvY3VzID4gYSxcbjpob3N0IDo6bmctZGVlcCAubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUgPiBsaS5hY3RpdmUgPiBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudSA+IGxpOmxhc3QtY2hpbGQgPiBhIHtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2IC5kcm9wZG93bi1tZW51ID4gbGkuZGl2aWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbjpob3N0IDo6bmctZGVlcCAubmF2YmFyLWludmVyc2UgLm5hdmJhci1jb2xsYXBzZSxcbjpob3N0IDo6bmctZGVlcCAubmF2YmFyLWludmVyc2UgLm5hdmJhci1mb3JtIHtcbiAgYm9yZGVyLXRvcDogMDtcbn1cbjpob3N0IDo6bmctZGVlcCAub3BhcXVlZCB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgdGV4dC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwIDFweCAxcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLm5hdmJhci1pbnZlcnNlLm9wYXF1ZWQgLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5uYXZiYXItYnJhbmQgaDEge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC50ZWFtLW1lbWJlcjpob3ZlciAuaW1nLXRodW1ibmFpbCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMjllO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50ZWFtLW1lbWJlciAuaW1nLXRodW1ibmFpbCB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGNvbG9yIDAuM3MgYm94LXNoYWRvdyAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBjb2xvciAwLjNzIGJveC1zaGFkb3cgMC4zcztcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGNvbG9yIDAuM3MgYm94LXNoYWRvdyAwLjNzO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50ZWFtLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2YwZjBmMDtcbn1cbjpob3N0IDo6bmctZGVlcCAudGVhbS1jb250ZW50IGg1IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC50ZWFtLWNvbnRlbnQ6YWZ0ZXIge1xuICBib3R0b206IDEwMCU7XG4gIGxlZnQ6IDUwJTtcbiAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY29udGVudDogXCIgXCI7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXdpZHRoOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRlYW0tbWVtYmVyIC5idG4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRlYW0taW1hZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDA7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRlYW0taW1hZ2UgLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50ZWFtLWltYWdlIC5vdmVybGF5IC5wcmV2aWV3IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAudGVhbS1pbWFnZTpob3ZlciAub3ZlcmxheSB7XG4gIG9wYWNpdHk6IDE7XG59XG46aG9zdCA6Om5nLWRlZXAgI3NvY2lhbC1tZWRpYSAuZmEtZmFjZWJvb2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M1ODk5O1xufVxuOmhvc3QgOjpuZy1kZWVwICNzb2NpYWwtbWVkaWEgLmZhLWZhY2Vib29rOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRlNmZiYTtcbn1cbjpob3N0IDo6bmctZGVlcCAjc29jaWFsLW1lZGlhIC5mYS10d2l0dGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5YzVmNjtcbn1cbjpob3N0IDo6bmctZGVlcCAjc29jaWFsLW1lZGlhIC5mYS10d2l0dGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVhZDJmODtcbn1cbjpob3N0IDo6bmctZGVlcCAjc29jaWFsLW1lZGlhIC5mYS1nb29nbGUtcGx1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMTNkMmY7XG59XG46aG9zdCA6Om5nLWRlZXAgI3NvY2lhbC1tZWRpYSAuZmEtZ29vZ2xlLXBsdXM6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGE2NDU5O1xufVxuOmhvc3QgOjpuZy1kZWVwICNzb2NpYWwtbWVkaWEgLmZhLXBpbnRlcmVzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNjExMTg7XG59XG46aG9zdCA6Om5nLWRlZXAgI3NvY2lhbC1tZWRpYSAuZmEtcGludGVyZXN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjMWUyNjtcbn1cbjpob3N0IDo6bmctZGVlcCAuZmEtbGcge1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGhlaWdodDogMTA4cHg7XG4gIHdpZHRoOiAxMDhweDtcbiAgbGluZS1oZWlnaHQ6IDEwOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG46aG9zdCA6Om5nLWRlZXAgLmZhLW1kIHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBoZWlnaHQ6IDY4cHg7XG4gIHdpZHRoOiA2OHB4O1xuICBsaW5lLWhlaWdodDogNjhweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjI5ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHdoaXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBjb2xvciAwLjNzIGJveC1zaGFkb3cgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgY29sb3IgMC4zcyBib3gtc2hhZG93IDAuM3M7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBjb2xvciAwLjNzIGJveC1zaGFkb3cgMC4zcztcbn1cbjpob3N0IDo6bmctZGVlcCAuc2VydmljZS1ibG9jazpob3ZlciAuZmEtbWQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMwMGIyOWU7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDRweCAjMDBiMjllO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5zZXJ2aWNlLWJsb2NrIC5tZWRpYS1oZWFkaW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5zZWN0aW9uLWhlYWRpbmcgaHIge1xuICBtYXJnaW46IDVweCBhdXRvO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tb2RhbCB7XG4gIGJvcmRlcjogMDtcbn1cbjpob3N0IDo6bmctZGVlcCAubW9kYWwjbG9naW5Gb3JtIHtcbiAgd2lkdGg6IDYwMHB4O1xuICBtYXJnaW4tbGVmdDogLTMwMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tb2RhbCAubW9kYWwtaGVhZGVyIHtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMDtcbn1cbjpob3N0IDo6bmctZGVlcCAubW9kYWwgLm1vZGFsLWhlYWRlciA+IGg0IHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzg0ODQ4NDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tb2RhbCAubW9kYWwtYm9keSB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vZGFsIGlucHV0W3R5cGU9dGV4dF0sXG46aG9zdCA6Om5nLWRlZXAgLm1vZGFsIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAxMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tb2RhbCAuZmEtcmVtb3ZlIHtcbiAgY29sb3I6ICM4NDg0ODQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC01cHg7XG4gIHRvcDogLTVweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vZGFsIGJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBib3JkZXI6IDA7XG59XG46aG9zdCA6Om5nLWRlZXAgLmdhcCB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLmJpZy1nYXAge1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAubm8tbWFyZ2luIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5yZWdpc3RyYXRpb24tZm9ybSB7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuOmhvc3QgOjpuZy1kZWVwICNib3R0b20ge1xuICBjb2xvcjogI2JkYzNjNztcbn1cbjpob3N0IDo6bmctZGVlcCAjYm90dG9tIGg0IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbjpob3N0IDo6bmctZGVlcCAjYm90dG9tIC5tZWRpYS1oZWFkaW5nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG46aG9zdCA6Om5nLWRlZXAgLnJvdyA+IGRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgdWwudW5zdHlsZWQge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG46aG9zdCA6Om5nLWRlZXAgdWwuYXJyb3csXG46aG9zdCA6Om5nLWRlZXAgdWwuYXJyb3ctZG91YmxlLFxuOmhvc3QgOjpuZy1kZWVwIHVsLnRpY2ssXG46aG9zdCA6Om5nLWRlZXAgdWwuY3Jvc3MsXG46aG9zdCA6Om5nLWRlZXAgdWwuc3Rhcixcbjpob3N0IDo6bmctZGVlcCB1bC5yc3Mge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG46aG9zdCA6Om5nLWRlZXAgdWwuYXJyb3cgbGk6OmJlZm9yZSxcbjpob3N0IDo6bmctZGVlcCB1bC5hcnJvdy1kb3VibGUgbGk6OmJlZm9yZSxcbjpob3N0IDo6bmctZGVlcCB1bC50aWNrIGxpOjpiZWZvcmUsXG46aG9zdCA6Om5nLWRlZXAgdWwuY3Jvc3MgbGk6OmJlZm9yZSxcbjpob3N0IDo6bmctZGVlcCB1bC5zdGFyIGxpOjpiZWZvcmUsXG46aG9zdCA6Om5nLWRlZXAgdWwucnNzIGxpOjpiZWZvcmUsXG46aG9zdCA6Om5nLWRlZXAgdWwuYXJyb3cgbGk6OmFmdGVyLFxuOmhvc3QgOjpuZy1kZWVwIHVsLmFycm93LWRvdWJsZSBsaTo6YWZ0ZXIsXG46aG9zdCA6Om5nLWRlZXAgdWwudGljayBsaTo6YWZ0ZXIsXG46aG9zdCA6Om5nLWRlZXAgdWwuY3Jvc3MgbGk6OmFmdGVyLFxuOmhvc3QgOjpuZy1kZWVwIHVsLnN0YXIgbGk6OmFmdGVyLFxuOmhvc3QgOjpuZy1kZWVwIHVsLnJzcyBsaTo6YWZ0ZXIge1xuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbjpob3N0IDo6bmctZGVlcCB1bC5hcnJvdyBsaTo6YmVmb3JlLFxuOmhvc3QgOjpuZy1kZWVwIHVsLmFycm93LWRvdWJsZSBsaTo6YmVmb3JlLFxuOmhvc3QgOjpuZy1kZWVwIHVsLnRpY2sgbGk6OmJlZm9yZSxcbjpob3N0IDo6bmctZGVlcCB1bC5jcm9zcyBsaTo6YmVmb3JlLFxuOmhvc3QgOjpuZy1kZWVwIHVsLnN0YXIgbGk6OmJlZm9yZSxcbjpob3N0IDo6bmctZGVlcCB1bC5yc3MgbGk6OmJlZm9yZSB7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIHVsLmFycm93IGxpOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+EhVwiO1xufVxuOmhvc3QgOjpuZy1kZWVwIHVsLmFycm93LWRvdWJsZSBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvhIFcIjtcbn1cbjpob3N0IDo6bmctZGVlcCB1bC50aWNrIGxpOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+AjFwiO1xufVxuOmhvc3QgOjpuZy1kZWVwIHVsLmNyb3NzIGxpOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+AjVwiO1xufVxuOmhvc3QgOjpuZy1kZWVwIHVsLnN0YXIgbGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74CGXCI7XG59XG46aG9zdCA6Om5nLWRlZXAgdWwucnNzIGxpOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+CnlwiO1xufVxuOmhvc3QgOjpuZy1kZWVwICNmb290ZXIge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxMDEwO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIGNvbG9yOiAjZWVlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzMzMztcbn1cbjpob3N0IDo6bmctZGVlcCAjZm9vdGVyIGEsXG46aG9zdCA6Om5nLWRlZXAgI2Zvb3Rlci13cmFwcGVyIGEge1xuICBjb2xvcjogI2JkYzNjNztcbn1cbjpob3N0IDo6bmctZGVlcCAjZm9vdGVyIGE6aG92ZXIsXG46aG9zdCA6Om5nLWRlZXAgI2Zvb3Rlci13cmFwcGVyIGE6aG92ZXIge1xuICBjb2xvcjogIzAwYjI5ZTtcbn1cbjpob3N0IDo6bmctZGVlcCAjZm9vdGVyIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgOjpuZy1kZWVwICNmb290ZXIgdWwgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgdWwuc29jaWFsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuOmhvc3QgOjpuZy1kZWVwIHVsLnNvY2lhbCA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgNXB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIHVsLnNvY2lhbCA+IGxpID4gYSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM2NjY7XG59XG46aG9zdCA6Om5nLWRlZXAgdWwuc29jaWFsID4gbGkgPiBhOmhvdmVyIHtcbiAgY29sb3I6ICM5OTk7XG59XG46aG9zdCA6Om5nLWRlZXAgLmJveC1ib3JkZXIge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hY2NvcmRpb24tZ3JvdXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YwZjBmMDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYWNjb3JkaW9uLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGUge1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYWNjb3JkaW9uLWlubmVyIHtcbiAgYm9yZGVyLXRvcDogMDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYmxvZyAuYmxvZy1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYmxvZyAuYmxvZy1pdGVtIC5pbWctYmxvZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBoZWlnaHQ6IGF1dG87XG59XG46aG9zdCA6Om5nLWRlZXAgLmJsb2cgLmJsb2ctaXRlbSAuYmxvZy1jb250ZW50IHtcbiAgcGFkZGluZzogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2YwZjBmMDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYmxvZyAuYmxvZy1pdGVtIC5ibG9nLWNvbnRlbnQ6YWZ0ZXIge1xuICBib3R0b206IDEwMCU7XG4gIGxlZnQ6IDUwJTtcbiAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY29udGVudDogXCIgXCI7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXdpZHRoOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLmJsb2cgLmJsb2ctaXRlbSBoMyB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG46aG9zdCA6Om5nLWRlZXAgLmJsb2cgLmJsb2ctaXRlbSAuZW50cnktbWV0YSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM3MzczNzM7XG4gIG1hcmdpbi1ib3R0b206IDExcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLmJsb2cgLmJsb2ctaXRlbSAuZW50cnktbWV0YSA+IHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjOTk5O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYmxvZyAuYmxvZy1pdGVtIC5lbnRyeS1tZXRhID4gc3BhbiBhIHtcbiAgY29sb3I6ICM5OTk7XG59XG46aG9zdCA6Om5nLWRlZXAgLmJsb2ctZmVhdHVyZWQtaW1hZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDA7XG59XG46aG9zdCA6Om5nLWRlZXAgLmJsb2ctZmVhdHVyZWQtaW1hZ2UgLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5ibG9nLWZlYXR1cmVkLWltYWdlIC5vdmVybGF5IC5wcmV2aWV3IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYmxvZy1mZWF0dXJlZC1pbWFnZTpob3ZlciAub3ZlcmxheSB7XG4gIG9wYWNpdHk6IDE7XG59XG46aG9zdCA6Om5nLWRlZXAgdWwucGFnaW5hdGlvbiA+IGxpID4gYSB7XG4gIGJvcmRlcjogMDtcbn1cbjpob3N0IDo6bmctZGVlcCB1bC5wYWdpbmF0aW9uID4gbGkuYWN0aXZlID4gYSxcbjpob3N0IDo6bmctZGVlcCB1bC5wYWdpbmF0aW9uID4gbGk6aG92ZXIgPiBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgY29sb3I6ICNmZmY7XG59XG46aG9zdCA6Om5nLWRlZXAgdGV4dGFyZWEjbWVzc2FnZSB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgaGVpZ2h0OiAyMTlweDtcbn1cbjpob3N0IDo6bmctZGVlcCAud2lkZ2V0IHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbjpob3N0IDo6bmctZGVlcCB1bC5nYWxsZXJ5IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIHVsLmdhbGxlcnkgbGkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDYwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCA0cHggNHB4IDA7XG4gIGZsb2F0OiBsZWZ0O1xufVxuOmhvc3QgOjpuZy1kZWVwIHVsLmZhcSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IDo6bmctZGVlcCB1bC5mYXEgbGkge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIHVsLmZhcSBsaTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG46aG9zdCA6Om5nLWRlZXAgdWwuZmFxIGxpIHNwYW4ubnVtYmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMjIyO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIHVsLmZhcSBsaSA+IGRpdiB7XG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIHVsLmZhcSBsaSA+IGRpdiBoMyB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG46aG9zdCA6Om5nLWRlZXAgI2Vycm9yIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgaW1nLmNvbW1lbnQtYXZhdGFyIHtcbiAgbWF4LXdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG46aG9zdCA6Om5nLWRlZXAgaW1nLmF1dGhvci1ib3gtaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDExMHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG46aG9zdCA6Om5nLWRlZXAgI2NvbW1lbnRzLWxpc3QgLndlbGwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCA6Om5nLWRlZXAgI2NvbW1lbnRzLWxpc3QgLndlbGw6YWZ0ZXIge1xuICByaWdodDogMTAwJTtcbiAgdG9wOiA1MCU7XG4gIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjQ1LCAyNDUsIDI0NSwgMCk7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogI2Y1ZjVmNTtcbiAgYm9yZGVyLXdpZHRoOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAjY29udGVudC13cmFwcGVyIHtcbiAgcGFkZGluZzogMDtcbiAgei1pbmRleDogNTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAwIDRweCAycHggLTJweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG46aG9zdCA6Om5nLWRlZXAgLndoaXRlIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuOmhvc3QgOjpuZy1kZWVwICNjb250ZW50LXdyYXBwZXIgc2VjdGlvbiB7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAjZm9vdGVyLXdyYXBwZXIge1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nLXRvcDogNjBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC53aWRnZXQtaW1nIHtcbiAgbWF4LXdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG46aG9zdCA6Om5nLWRlZXAgLmFib3V0LXVzLXdpZGdldCB7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cbjpob3N0IDo6bmctZGVlcCAud2lkZ2V0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuOmhvc3QgOjpuZy1kZWVwICNzZWFyY2gtd3JhcHBlciBpbnB1dCNzZWFyY2gtYm94IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNTU1O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBjb2xvcjogI2VlZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA4cHggNXB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5vcGFxdWVkICNzZWFyY2gtd3JhcHBlciBpbnB1dCNzZWFyY2gtYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLnNlYXJjaC10cmlnZ2VyIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5zZWFyY2gtdHJpZ2dlcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGl2aWRlci1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2Y1ZjVmNTtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGl2aWRlci1zZWN0aW9uIGEge1xuICBjb2xvcjogI2Y1ZjVmNTtcbn1cbjpob3N0IDo6bmctZGVlcCAuYnRuLW91dGxpbmVkIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5idG4tb3V0bGluZWQuYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDBiMjllO1xuICBjb2xvcjogIzAwYjI5ZTtcbn1cbjpob3N0IDo6bmctZGVlcCAuYnRuLW91dGxpbmVkLmJ0bi1wcmltYXJ5OmhvdmVyLFxuOmhvc3QgOjpuZy1kZWVwIC5idG4tb3V0bGluZWQuYnRuLXByaW1hcnk6YWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMwMGIyOWU7XG4gIGJvcmRlci1jb2xvcjogIzAwYjI5ZTtcbn1cbjpob3N0IDo6bmctZGVlcCAuYnRuLW91dGxpbmVkLmJ0bi1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzVjYjg1YztcbiAgY29sb3I6ICM1Y2I4NWM7XG59XG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1vdXRsaW5lZC5idG4tc3VjY2Vzczpob3Zlcixcbjpob3N0IDo6bmctZGVlcCAuYnRuLW91dGxpbmVkLmJ0bi1zdWNjZXNzOmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjNDdhNDQ3O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5idG4tb3V0bGluZWQuYnRuLWluZm8ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNWJjMGRlO1xuICBjb2xvcjogIzViYzBkZTtcbn1cbjpob3N0IDo6bmctZGVlcCAuYnRuLW91dGxpbmVkLmJ0bi1pbmZvOmhvdmVyLFxuOmhvc3QgOjpuZy1kZWVwIC5idG4tb3V0bGluZWQuYnRuLWluZm86YWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMzOWIzZDc7XG59XG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1vdXRsaW5lZC5idG4td2FybmluZyB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmMGFkNGU7XG4gIGNvbG9yOiAjZjBhZDRlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5idG4tb3V0bGluZWQuYnRuLXdhcm5pbmc6aG92ZXIsXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1vdXRsaW5lZC5idG4td2FybmluZzphY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogI2VkOWMyODtcbn1cbjpob3N0IDo6bmctZGVlcCAuYnRuLW91dGxpbmVkLmJ0bi1kYW5nZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZDk1MzRmO1xuICBjb2xvcjogI2Q5NTM0Zjtcbn1cbjpob3N0IDo6bmctZGVlcCAuYnRuLW91dGxpbmVkLmJ0bi1kYW5nZXI6aG92ZXIsXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1vdXRsaW5lZC5idG4tZGFuZ2VyOmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjZDIzMjJkO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5idG4tb3V0bGluZWQuYnRuLXdoaXRlIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgY29sb3I6ICNmZmY7XG59XG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1vdXRsaW5lZC5idG4td2hpdGU6aG92ZXIsXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1vdXRsaW5lZC5idG4td2hpdGU6YWN0aXZlIHtcbiAgY29sb3I6ICMwMGIyOWU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG46aG9zdCA6Om5nLWRlZXAgLm5vLWRpc3BsYXkge1xuICBvcGFjaXR5OiAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hcHBlYXIge1xuICBvcGFjaXR5OiAxO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLnBvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wb3N0IC5jb250ZW50IHtcbiAgcGFkZGluZzogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2YwZjBmMDtcbn1cbjpob3N0IDo6bmctZGVlcCAucG9zdCAuY29udGVudDphZnRlciB7XG4gIGJvdHRvbTogMTAwJTtcbiAgbGVmdDogNTAlO1xuICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjb250ZW50OiBcIiBcIjtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmO1xuICBib3JkZXItd2lkdGg6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cbjpob3N0IDo6bmctZGVlcCAucG9zdCAuYXV0aG9yIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzczNzM3MztcbiAgcGFkZGluZzogMTBweCAwIDhweDtcbn1cbjpob3N0IDo6bmctZGVlcCAucG9zdCAucG9zdC1pbWctY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMDtcbn1cbjpob3N0IDo6bmctZGVlcCAucG9zdCAucG9zdC1pbWctY29udGVudCAub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XG59XG46aG9zdCA6Om5nLWRlZXAgLnBvc3QgLnBvc3QtaW1nLWNvbnRlbnQgLm92ZXJsYXkgLnByZXZpZXcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wb3N0IC5wb3N0LWltZy1jb250ZW50OmhvdmVyIC5vdmVybGF5IHtcbiAgb3BhY2l0eTogMTtcbn1cbjpob3N0IDo6bmctZGVlcCAucG9zdCAucG9zdC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wb3N0IC5wb3N0LXRpdGxlIGIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCA1MSwgNTEsIDAuNTgpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5yZWFkLW1vcmUtd3JhcHBlciB7XG4gIG1hcmdpbjogMjVweCAwIDVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLnN0YXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDRweDtcbn1cbjpob3N0IDo6bmctZGVlcCAjc3RhdHMgaDEge1xuICBtYXJnaW46IDEwcHggMDtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuOmhvc3QgOjpuZy1kZWVwICNzdGF0cyBoMyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50aWxlLXByb2dyZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzY0MTtcbiAgY29sb3I6ICNmZmY7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRpbGUtcHJvZ3Jlc3Mge1xuICBiYWNrZ3JvdW5kOiAjMDBhNjViO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50aWxlLXByb2dyZXNzIC50aWxlLWhlYWRlciB7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRpbGUtcHJvZ3Jlc3MgLnRpbGUtcHJvZ3Jlc3NiYXIge1xuICBoZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50aWxlLXByb2dyZXNzIC50aWxlLXByb2dyZXNzYmFyIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50aWxlLXByb2dyZXNzIC50aWxlLXByb2dyZXNzYmFyIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMS41cyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDEuNXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMS41cyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XG4gIHRyYW5zaXRpb246IGFsbCAxLjVzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcbn1cbjpob3N0IDo6bmctZGVlcCAudGlsZS1wcm9ncmVzcyAudGlsZS1mb290ZXIge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xuICBib3JkZXItcmFkaXVzOiAwIDAgM3B4IDNweDtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgM3B4IDNweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAwIDAgM3B4IDNweDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC50aWxlLXByb2dyZXNzLnRpbGUtcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMyMDIwMjA7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRpbGUtcHJvZ3Jlc3MgLnRpbGUtcHJvZ3Jlc3NiYXIgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICMyMDIwMjA7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRpbGUtcHJvZ3Jlc3MudGlsZS1yZWQgLnRpbGUtZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogI2Y1Njk1NDtcbiAgY29sb3I6ICNmZmY7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRpbGUtcHJvZ3Jlc3MudGlsZS1jeWFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMyMDIwMjA7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRpbGUtcHJvZ3Jlc3MudGlsZS1jeWFuIC50aWxlLXByb2dyZXNzYmFyIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjMjAyMDIwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50aWxlLXByb2dyZXNzLnRpbGUtY3lhbiAudGlsZS1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDBiMjllO1xuICBjb2xvcjogI2ZmZjtcbn1cbjpob3N0IDo6bmctZGVlcCAudGlsZS1wcm9ncmVzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMjAyMDIwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50aWxlLXByb2dyZXNzIC50aWxlLXByb2dyZXNzYmFyIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjMjAyMDIwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50aWxlLXByb2dyZXNzIC50aWxlLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMzMDM2NDE7XG4gIGNvbG9yOiAjZmZmO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50aWxlLXByb2dyZXNzLnRpbGUtcGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMjAyMDIwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50aWxlLXByb2dyZXNzLnRpbGUtcGluayAudGlsZS1wcm9ncmVzc2JhciBzcGFuIHtcbiAgYmFja2dyb3VuZDogIzIwMjAyMDtcbn1cbjpob3N0IDo6bmctZGVlcCAudGlsZS1wcm9ncmVzcy50aWxlLXBpbmsgLnRpbGUtZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogI2VjM2I4MztcbiAgY29sb3I6ICNmZmY7XG59XG46aG9zdCA6Om5nLWRlZXAgLmJhY2tzdHJldGNoIHtcbiAgei1pbmRleDogMyAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwICNxdW90ZS1jYXJvdXNlbCAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gIHJpZ2h0OiA1MCU7XG4gIHRvcDogYXV0bztcbiAgYm90dG9tOiAwO1xuICBtYXJnaW4tcmlnaHQ6IC0xOXB4O1xufVxuOmhvc3QgOjpuZy1kZWVwICNxdW90ZS1jYXJvdXNlbCAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gIGJhY2tncm91bmQ6IHNpbHZlcjtcbn1cbjpob3N0IDo6bmctZGVlcCAjcXVvdGUtY2Fyb3VzZWwgLmNhcm91c2VsLWluZGljYXRvcnMgLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG59XG46aG9zdCA6Om5nLWRlZXAgI3F1b3RlLWNhcm91c2VsIGltZyB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuaXRlbSBibG9ja3F1b3RlIHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLml0ZW0gYmxvY2txdW90ZSBpbWcge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5pdGVtIGJsb2NrcXVvdGUgcDpiZWZvcmUge1xuICBjb250ZW50OiBcIu+EjVwiO1xuICBmb250LWZhbWlseTogRm9udGF3ZXNvbWU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRlc3RpbW9uaWFsLWxpc3QtaXRlbTpob3ZlciBibG9ja3F1b3RlIHtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMDBiMjllO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5xdW90ZS1hdXRob3ItbGlzdCB7XG4gIG1heC13aWR0aDogOTVweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE5cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIDpob3N0IDo6bmctZGVlcCAjcXVvdGUtY2Fyb3VzZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBwYWRkaW5nOiAwIDQwcHggMzBweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG4gIDpob3N0IDo6bmctZGVlcCAjbWFpbi1zbGlkZXIgLmNhcm91c2VsLFxuOmhvc3QgOjpuZy1kZWVwICNtYWluLXNsaWRlciAuY2Fyb3VzZWwtaW5uZXIsXG46aG9zdCA6Om5nLWRlZXAgI21haW4tc2xpZGVyIC5jYXJvdXNlbC1pbm5lciAuaXRlbSxcbjpob3N0IDo6bmctZGVlcCAjbWFpbi1zbGlkZXIgLmNhcm91c2VsLWlubmVyIC5pdGVtIC5jb250YWluZXIsXG46aG9zdCA6Om5nLWRlZXAgI21haW4tc2xpZGVyIC5jYXJvdXNlbC1pbm5lciAuaXRlbSAucm93LFxuOmhvc3QgOjpuZy1kZWVwICNtYWluLXNsaWRlciAuY2Fyb3VzZWwtaW5uZXIgLml0ZW0gLnJvdyAuY29sLXNtLTEyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xuICA6aG9zdCA6Om5nLWRlZXAgI3F1b3RlLWNhcm91c2VsIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgICBib3R0b206IC0yMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwICNxdW90ZS1jYXJvdXNlbCAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMCA1cHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICB9XG4gIDpob3N0IDo6bmctZGVlcCAjcXVvdGUtY2Fyb3VzZWwgLmNhcm91c2VsLWluZGljYXRvcnMgbGkuYWN0aXZlIHtcbiAgICBtYXJnaW46IDAgNXB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgfVxufVxuOmhvc3QgOjpuZy1kZWVwICNjb250YWN0Zm9ybSBpbnB1dCNuYW1lLFxuOmhvc3QgOjpuZy1kZWVwICNjb250YWN0Zm9ybSBpbnB1dCNlbWFpbCxcbjpob3N0IDo6bmctZGVlcCAjY29udGFjdGZvcm0gaW5wdXQjd2Vic2l0ZSxcbjpob3N0IDo6bmctZGVlcCAjY29udGFjdGZvcm0gdGV4dGFyZWEjY29tbWVudHMge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgY29sb3I6ICMyMDIwMjA7XG4gIGJvcmRlcjogbm9uZTtcbn1cbjpob3N0IDo6bmctZGVlcCAjY29udGFjdGZvcm0gdGV4dGFyZWEjY29tbWVudHMge1xuICBtaW4taGVpZ2h0OiAxNTBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAjY29udGFjdCBoMyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG46aG9zdCA6Om5nLWRlZXAgI21hcHdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZm9ybS1ob3Jpem9udGFsIC5jb250cm9sLWxhYmVsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0IDo6bmctZGVlcCAjbWVzc2FnZSB7XG4gIHBhZGRpbmc6IDA7XG59XG46aG9zdCA6Om5nLWRlZXAgLmZvcm0tY29udHJvbCB7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGNvbG9yOiAjMjAyMDIwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG46aG9zdCA6Om5nLWRlZXAgI3ByZWxvYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tYjAge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLnNlY3Rpb24taW5uZXIge1xuICBwYWRkaW5nLXRvcDogNjBweDtcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnNlY3Rpb24taW5uZXIuZ2FwIHtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5uYXZiYXItaGVhZGVyIGgxIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiA+IGxpID4gYSB7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMTVweCAxNXB4IDEwcHg7XG4gIGNvbG9yOiAjZjVmNWY1O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5ibG9nIC5ibG9nLWl0ZW0gLmJsb2ctY29udGVudCB7XG4gIHBhZGRpbmc6IDYwcHggNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2YwZjBmMDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYnRuIHtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLmZvcm0tY29udHJvbCB7XG4gIGhlaWdodDogNDJweDtcbn1cbjpob3N0IDo6bmctZGVlcCAud2lkZ2V0LXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wb3J0Zm9saW8taXRlbSBoNSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbjogMCAyMHB4IDAgMDtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnBvc3QgLnBvc3QtdGl0bGUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5vdmVybGF5IC5idG4tb3V0bGluZWQuYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICNmZmY7XG59XG46aG9zdCA6Om5nLWRlZXAgLnBvc3QgLmNvbnRlbnQge1xuICBwYWRkaW5nOiAyNXB4IDE1cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnBvc3QgLmF1dGhvciB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICM3MzczNzM7XG4gIHBhZGRpbmc6IDEwcHggMCA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnNlY3Rpb24taGVhZGluZyBociB7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBtYXgtd2lkdGg6IDMzMHB4O1xuICBvcGFjaXR5OiAwLjk7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1haW4tdGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogNnB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5zZWN0aW9uLWhlYWRpbmcgcCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG46aG9zdCA6Om5nLWRlZXAgI2NvbnRlbnQtd3JhcHBlciB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG46aG9zdCA6Om5nLWRlZXAgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2IC5kcm9wZG93bi1tZW51ID4gbGkgPiBhIHtcbiAgcGFkZGluZzogMTVweCAxNXB4IDE1cHg7XG4gIGNvbG9yOiAjZWVlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgI3NpbmdsZS1wYWdlLXNsaWRlciB7XG4gIG1pbi1oZWlnaHQ6IDMxMHB4ICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgI21haW4tc2xpZGVyIC5jYXJvdXNlbCAuYnRuIHtcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIHRleHQtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMCAxcHggMXB4O1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5iYWNrc3RyZXRjaDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbjpob3N0IDo6bmctZGVlcCAjdGFnV3JhcHBlciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW46IDQwcHggMDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYnRuLXNtLFxuOmhvc3QgOjpuZy1kZWVwIC5idG4teHMge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jb21tZW50cy10aXRsZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gIG1hcmdpbi10b3A6IDQwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC50ZWFtLW1lbWJlciAuYnRuIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBsaW5lLWhlaWdodDogMzdweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgcGFkZGluZzogMDtcbn1cbjpob3N0IDo6bmctZGVlcCAudGVhbS1jb250ZW50IGg1IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuOmhvc3QgOjpuZy1kZWVwICN0ZXN0aW1vbmlhbHMtc2xpZGVyIHAge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAjdGVzdGltb25pYWxzLXNsaWRlciBoNCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuc2VhcmNoLXRyaWdnZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTVweCAxNXB4IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDpob3N0IDo6bmctZGVlcCAjY29udGVudC13cmFwcGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwICNmb290ZXItd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iLCJib2R5IHtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbn1cbmJvZHkge1xuICBjb2xvcjogIzIyMjtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgZm9udC1mYW1pbHk6IExhdG8sIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIHtcbiAgJi5idG4tcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlIWltcG9ydGFudDtcbiAgICBib3JkZXI6IG5vbmU7XG5cbiAgICAmOmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMzMzIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXI6IG5vbmUhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICBoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiA5O1xuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG4gIH1cbiAgLndyYXBwZXIge1xuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC8vbWFxdWV0YVxuICBAaW1wb3J0IHVybChcImh0dHA6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86NDAwLCA3MDAsIDMwMFwiKTtcblxuICAuY2xlYXJmaXgge1xuICAgIHpvb206IDE7XG4gIH1cblxuICAuY2xlYXJmaXg6YmVmb3JlLFxuICAuY2xlYXJmaXg6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gIH1cblxuICAuY2xlYXJmaXg6YWZ0ZXIge1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG5cbiAgLmhpZGUtdGV4dCB7XG4gICAgZm9udDogMC8wIGE7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMDtcbiAgfVxuXG4gIC5pbnB1dC1ibG9jay1sZXZlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMzBweDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICBib2R5IHtcbiAgICBjb2xvcjogIzIyMjtcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgIGZvbnQtZmFtaWx5OiBMYXRvLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogMS42O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIGgxLFxuICBoMixcbiAgaDMsXG4gIGg0LFxuICBoNSxcbiAgaDYge1xuICAgIGZvbnQtZmFtaWx5OiBMYXRvLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cblxuICBhIHtcbiAgICBjb2xvcjogIzIyMjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDMwMG1zO1xuICAgIC1tb3otdHJhbnNpdGlvbjogMzAwbXM7XG4gICAgLW8tdHJhbnNpdGlvbjogMzAwbXM7XG4gICAgdHJhbnNpdGlvbjogMzAwbXM7XG4gIH1cblxuICBociB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU1ZTU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gIH1cblxuICAuYnRuIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG5cbiAgLmJ0bi10cmFuc3BhcmVudCB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gIC5idG4tdHJhbnNwYXJlbnQ6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICB9XG5cbiAgYTpob3ZlcixcbiAgYTpmb2N1cyB7XG4gICAgY29sb3I6ICNkOTUzNGY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAuZHJvcGRvd24tbWVudSB7XG4gICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICBtaW4td2lkdGg6IDE4MHB4O1xuICB9XG5cbiAgYm9keSA+IHNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDUwcHggMDtcbiAgfVxuXG4gIC5lbWJlZC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xuICAgIC8qIDE2LzkgcmF0aW8gKi9cbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAvKiBJRTYgd29ya2Fyb3VuZCovXG4gICAgaGVpZ2h0OiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAuZW1iZWQtY29udGFpbmVyIGlmcmFtZSxcbiAgLmVtYmVkLWNvbnRhaW5lciBvYmplY3QsXG4gIC5lbWJlZC1jb250YWluZXIgZW1iZWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICBibG9ja3F1b3RlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG5cbiAgLm1haW4tdGl0bGUge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAvKiAgU2xpZGVyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAjbWFpbi1zbGlkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiA1O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAgI21haW4tc2xpZGVyIC5jYXJvdXNlbC1pbm5lciB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cblxuICAuYmFja3N0cmV0Y2g6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvb3ZlcmxheXMvMDQucG5nKTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB6LWluZGV4OiAtMTtcbiAgfVxuXG4gICNtYWluLXNsaWRlciAuY2Fyb3VzZWwgaDIge1xuICAgIGZvbnQtc2l6ZTogNDRweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQpIDAgMXB4IDFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cblxuICAjbWFpbi1zbGlkZXIgLmNhcm91c2VsIC5idG4ge1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgdGV4dC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwIDFweCAxcHg7XG4gICAgei1pbmRleDogMTBweDtcbiAgfVxuXG4gICNtYWluLXNsaWRlciAuY2Fyb3VzZWwgLmJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAgIGNvbG9yOiAjMjAyMDIwO1xuICB9XG5cbiAgI21haW4tc2xpZGVyIC5jYXJvdXNlbCAuYm94ZWQge1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cblxuICAjbWFpbi1zbGlkZXIgLmNhcm91c2VsIC5pdGVtIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRvcDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLWluLW91dCA1MDBtcztcbiAgICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgZWFzZS1pbi1vdXQgNTAwbXM7XG4gICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLWluLW91dCA1MDBtcztcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UtaW4tb3V0IDUwMG1zO1xuICB9XG5cbiAgI21haW4tc2xpZGVyIC5jYXJvdXNlbCAuaXRlbTpmaXJzdC1jaGlsZCB7XG4gICAgdG9wOiBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gICNtYWluLXNsaWRlciAuY2Fyb3VzZWwgLml0ZW0uYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLWluLW91dCA1MDBtcztcbiAgICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgZWFzZS1pbi1vdXQgNTAwbXM7XG4gICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLWluLW91dCA1MDBtcztcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UtaW4tb3V0IDUwMG1zO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cblxuICAuaG9tZS1pY29uIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogNzhweDtcbiAgICBtYXJnaW46IDEwMHB4IGF1dG8gMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XG4gIH1cblxuICAjc2luZ2xlLXBhZ2Utc2xpZGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMTUwcHg7XG4gIH1cblxuICAjc2luZ2xlLXBhZ2Utc2xpZGVyIC5jYXJvdXNlbCB7XG4gICAgei1pbmRleDogNSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMCAxcHggMXB4O1xuICB9XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgLyogIFNsaWRlclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgI21haW4tc2xpZGVyLXBhZ2Uge1xuICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xuICAgIHotaW5kZXg6IDIgIWltcG9ydGFudDtcbiAgfVxuXG4gICNzZXJ2aWNlcyAubWVkaWE6aG92ZXIgLmZhLW1kIHtcbiAgfVxuXG4gICNyZWNlbnQtd29ya3Mge1xuICAgIHBhZGRpbmc6IDkwcHggMDtcbiAgfVxuXG4gICNyZWNlbnQtd29ya3MgLml0ZW0taW5uZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAucG9ydGZvbGlvLWl0ZW1zLFxuICAucG9ydGZvbGlvLWZpbHRlciB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMCAtMjBweCAyMHB4IDA7XG4gIH1cblxuICAucG9ydGZvbGlvLWZpbHRlciA+IGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICAucG9ydGZvbGlvLWZpbHRlciA+IGxpIGEuYWN0aXZlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiAjMDBiMjllO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMGIyOWU7XG4gIH1cblxuICAucG9ydGZvbGlvLWl0ZW1zID4gbGkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgLnBvcnRmb2xpby1pdGVtcy5jb2wtMiA+IGxpIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG5cbiAgLnBvcnRmb2xpby1pdGVtcy5jb2wtMyA+IGxpIHtcbiAgICB3aWR0aDogMzMlO1xuICB9XG5cbiAgLnBvcnRmb2xpby1pdGVtcy5jb2wtNCA+IGxpIHtcbiAgICB3aWR0aDogMjUlO1xuICB9XG5cbiAgLnBvcnRmb2xpby1pdGVtcy5jb2wtNSA+IGxpIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG5cbiAgLnBvcnRmb2xpby1pdGVtcy5jb2wtNiA+IGxpIHtcbiAgICB3aWR0aDogMTYlO1xuICB9XG5cbiAgLnBvcnRmb2xpby1pdGVtIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5wb3J0Zm9saW8taXRlbSAuaXRlbS1pbm5lciB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMCAyMHB4IDIwcHggMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAucG9ydGZvbGlvLWl0ZW0gaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5wb3J0Zm9saW8taXRlbSBoNSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2YwZjBmMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIH1cblxuICAucG9ydGZvbGlvLWl0ZW06aG92ZXIgaDUsXG4gIC50ZWFtLW1lbWJlcjpob3ZlciAudGVhbS1jb250ZW50LFxuICAucG9zdDpob3ZlciAuY29udGVudCB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzAwYjI5ZTtcbiAgfVxuXG4gIC5wb3J0Zm9saW8taXRlbSBoNTphZnRlciB7XG4gICAgYm90dG9tOiAxMDAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGhlaWdodDogMDtcbiAgICB3aWR0aDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXdpZHRoOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgfVxuXG4gIC5wb3J0Zm9saW8taXRlbSAub3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XG4gICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xuICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcbiAgfVxuXG4gIC5wb3J0Zm9saW8taXRlbSAub3ZlcmxheSAucHJldmlldyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgfVxuXG4gIC5wb3J0Zm9saW8taXRlbTpob3ZlciAub3ZlcmxheSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIC8qIFN0YXJ0OiBSZWNvbW1lbmRlZCBJc290b3BlIHN0eWxlcyAqL1xuXG4gIC8qKioqIElzb3RvcGUgRmlsdGVyaW5nICoqKiovXG5cbiAgLmlzb3RvcGUtaXRlbSB7XG4gICAgei1pbmRleDogMjtcbiAgfVxuXG4gIC5pc290b3BlLWhpZGRlbi5pc290b3BlLWl0ZW0ge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cblxuICAvKioqKiBJc290b3BlIENTUzMgdHJhbnNpdGlvbnMgKioqKi9cblxuICAuaXNvdG9wZSxcbiAgLmlzb3RvcGUgLmlzb3RvcGUtaXRlbSB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjhzO1xuICAgIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMC44cztcbiAgICAtbXMtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC44cztcbiAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjhzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuOHM7XG4gIH1cblxuICAuaXNvdG9wZSB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBoZWlnaHQsIHdpZHRoO1xuICAgIC1tb3otdHJhbnNpdGlvbi1wcm9wZXJ0eTogaGVpZ2h0LCB3aWR0aDtcbiAgICAtbXMtdHJhbnNpdGlvbi1wcm9wZXJ0eTogaGVpZ2h0LCB3aWR0aDtcbiAgICAtby10cmFuc2l0aW9uLXByb3BlcnR5OiBoZWlnaHQsIHdpZHRoO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGhlaWdodCwgd2lkdGg7XG4gIH1cblxuICAuaXNvdG9wZSAuaXNvdG9wZS1pdGVtIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IDAgb3BhY2l0eTtcbiAgICAtbW96LXRyYW5zaXRpb24tcHJvcGVydHk6IDAgb3BhY2l0eTtcbiAgICAtbXMtdHJhbnNpdGlvbi1wcm9wZXJ0eTogMCBvcGFjaXR5O1xuICAgIC1vLXRyYW5zaXRpb24tcHJvcGVydHk6IDAgb3BhY2l0eTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gIH1cblxuICAvKioqKiBkaXNhYmxpbmcgSXNvdG9wZSBDU1MzIHRyYW5zaXRpb25zICoqKiovXG5cbiAgLmlzb3RvcGUubm8tdHJhbnNpdGlvbixcbiAgLmlzb3RvcGUubm8tdHJhbnNpdGlvbiAuaXNvdG9wZS1pdGVtLFxuICAuaXNvdG9wZSAuaXNvdG9wZS1pdGVtLm5vLXRyYW5zaXRpb24ge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMDtcbiAgICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDA7XG4gICAgLW1zLXRyYW5zaXRpb24tZHVyYXRpb246IDA7XG4gICAgLW8tdHJhbnNpdGlvbi1kdXJhdGlvbjogMDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwO1xuICB9XG5cbiAgLmlzb3RvcGUuaW5maW5pdGUtc2Nyb2xsaW5nIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmU7XG4gICAgLW1vei10cmFuc2l0aW9uOiBub25lO1xuICAgIC1tcy10cmFuc2l0aW9uOiBub25lO1xuICAgIC1vLXRyYW5zaXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxuXG4gIC5wcm9qZWN0LWNvbnRyb2xzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gIH1cblxuICAucHJvamVjdC1jb250cm9scyBzcGFuIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiA3MHB4O1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5wcm9qZWN0LWNvbnRyb2xzIHNwYW46aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIGRpdi5wcF9vdmVybGF5IHtcbiAgICB6LWluZGV4OiA5OTk5ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAvKiAgUFJJQ0lOR1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgI3ByaWNpbmctdGFibGUgLnBsYW4ge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICMwMGIyOWU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDMwcHggMDtcbiAgfVxuXG4gICNwcmljaW5nLXRhYmxlIC5wbGFuIGxpIHtcbiAgICBwYWRkaW5nOiA1cHggMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDMwMG1zO1xuICAgIC1tb3otdHJhbnNpdGlvbjogMzAwbXM7XG4gICAgLW8tdHJhbnNpdGlvbjogMzAwbXM7XG4gICAgdHJhbnNpdGlvbjogMzAwbXM7XG4gIH1cblxuICAjcHJpY2luZy10YWJsZSAucGxhbiBsaS5wbGFuLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzVweDtcbiAgfVxuXG4gICNwcmljaW5nLXRhYmxlIC5wbGFuIGxpLnBsYW4tbmFtZSBoMyB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgI3ByaWNpbmctdGFibGUgLnBsYW4gbGkucGxhbi1wcmljZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIH1cblxuICAjcHJpY2luZy10YWJsZSAucGxhbiBsaS5wbGFuLXByaWNlID4gZGl2IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICB9XG5cbiAgI3ByaWNpbmctdGFibGUgLnBsYW4gbGkucGxhbi1wcmljZSA+IGRpdiBzdXAge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgfVxuXG4gICNwcmljaW5nLXRhYmxlIC5wbGFuIGxpLnBsYW4tcHJpY2UgPiBkaXYgPiBzbWFsbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICB9XG5cbiAgI3ByaWNpbmctdGFibGUgLnBsYW4gbGkucGxhbi1hY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgfVxuXG4gICNwcmljaW5nLXRhYmxlIC5wbGFuLmZlYXR1cmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xuICB9XG5cbiAgI3RpdGxlIGgxIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cblxuICAuY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAjbWVldC10aGUtdGVhbSAucm9sZSB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAuaW1nLXRodW1ibmFpbCB7XG4gICAgYm9yZGVyOiAwO1xuICB9XG5cbiAgLnByb2dyZXNzLFxuICAucHJvZ3Jlc3MgLmJhciB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB9XG5cbiAgLndlbGwge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXI6IDA7XG4gIH1cblxuICB1bC5icmVhZGNydW1iIHtcbiAgICBtYXJnaW46IDIwcHggMCAwO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgdWwuYnJlYWRjcnVtYiA+IGxpIHtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gIHVsLmJyZWFkY3J1bWIgPiBsaSA+IGEsXG4gIHVsLmJyZWFkY3J1bWIgPiBsaSAuZGl2aWRlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICB1bC5icmVhZGNydW1iID4gbGkuYWN0aXZlIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICB9XG5cbiAgdWwudGFnLWNsb3VkIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgdWwudGFnLWNsb3VkIGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAwIDAgMnB4O1xuICB9XG5cbiAgLmJ0bi1zb2NpYWwge1xuICAgIGJvcmRlcjogMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAuYnRuLXNvY2lhbC5idG4tZmFjZWJvb2sge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0ZjdkZDQ7XG4gICAgY29sb3I6ICM0ZjdkZDQ7XG4gIH1cblxuICAuYnRuLXNvY2lhbC5idG4tZmFjZWJvb2s6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICM0ZjdkZDQ7XG4gIH1cblxuICAuYnRuLXNvY2lhbC5idG4tdHdpdHRlciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzViY2VmZjtcbiAgICBjb2xvcjogIzViY2VmZjtcbiAgfVxuXG4gIC5idG4tc29jaWFsLmJ0bi10d2l0dGVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjOGVkZGZmO1xuICB9XG5cbiAgLmJ0bi1zb2NpYWwuYnRuLWxpbmtlZGluIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMjFhNmQ4O1xuICAgIGNvbG9yOiAjMjFhNmQ4O1xuICB9XG5cbiAgLmJ0bi1zb2NpYWwuYnRuLWxpbmtlZGluOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjFhNmQ4O1xuICB9XG5cbiAgLmJ0bi1zb2NpYWwuYnRuLWdvb2dsZS1wbHVzIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZGM0MjJiO1xuICAgIGNvbG9yOiAjZGM0MjJiO1xuICB9XG5cbiAgLmJ0bi1zb2NpYWwuYnRuLWdvb2dsZS1wbHVzOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZGM0MjJiO1xuICB9XG5cbiAgLmJ0bi1zb2NpYWw6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgLyogIE5hdmlnYXRpb25cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIC5uYXZiYXItaW52ZXJzZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgfVxuXG4gIC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLXRvZ2dsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICAubmF2YmFyLWZpeGVkLXRvcCB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgfVxuXG4gIC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLWJyYW5kIHtcbiAgICBmb250LWZhbWlseTogTGF0bywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICAubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuXG4gIC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiA+IGxpID4gYSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiAjZjVmNWY1O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogY29sb3IgMC4zcztcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xuICB9XG5cbiAgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2ID4gbGkgPiBhOjpiZWZvcmUsXG4gIC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiA+IGxpID4gYTo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIDAgMC4zcztcbiAgICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyAwIDAuM3M7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIHRyYW5zZm9ybSAwLjNzO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2ID4gbGkgPiBhOmhvdmVyOjpiZWZvcmUsXG4gIC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiA+IGxpID4gYTpmb2N1czo6YmVmb3JlLFxuICAubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgPiBsaSA+IGE6aG92ZXI6OmFmdGVyLFxuICAubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgPiBsaSA+IGE6Zm9jdXM6OmFmdGVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2ID4gbGkgPiBhOjpiZWZvcmUge1xuICAgIHRvcDogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2ID4gbGkgPiBhOjphZnRlciB7XG4gICAgYm90dG9tOiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2ID4gbGkgPiBhOjpiZWZvcmUsXG4gIC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiA+IGxpID4gYTo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgMCAwLjNzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIDAgMC4zcztcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgdHJhbnNmb3JtIDAuM3M7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB9XG5cbiAgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2ID4gLmFjdGl2ZSA+IGEsXG4gIC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiA+IC5hY3RpdmUgPiBhOmhvdmVyLFxuICAubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgPiAuYWN0aXZlID4gYTpmb2N1cyxcbiAgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2ID4gLm9wZW4gPiBhLFxuICAubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgPiAub3BlbiA+IGE6aG92ZXIsXG4gIC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiA+IC5vcGVuID4gYTpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cblxuICAubmF2YmFyLXJpZ2h0IC5kcm9wZG93bi1tZW51IHtcbiAgICByaWdodDogYXV0bztcbiAgICBsZWZ0OiAwO1xuICB9XG5cbiAgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2IC5kcm9wZG93bi1tZW51ID4gbGkgPiBhIHtcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcbiAgICBjb2xvcjogI2VmZWZlZjtcbiAgfVxuXG4gIC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudSA+IGxpOmhvdmVyID4gYSxcbiAgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2IC5kcm9wZG93bi1tZW51ID4gbGk6Zm9jdXMgPiBhLFxuICAubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUgPiBsaS5hY3RpdmUgPiBhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIH1cblxuICAubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUgPiBsaTpsYXN0LWNoaWxkID4gYSB7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XG4gIH1cblxuICAubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUgPiBsaS5kaXZpZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cblxuICAubmF2YmFyLWludmVyc2UgLm5hdmJhci1jb2xsYXBzZSxcbiAgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItZm9ybSB7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgfVxuXG4gIC5vcGFxdWVkIHtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgdGV4dC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwIDFweCAxcHg7XG4gIH1cblxuICAubmF2YmFyLWludmVyc2Uub3BhcXVlZCAubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIH1cblxuICAubmF2YmFyLWJyYW5kIGgxIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICB9XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgLyogIFRFQU1cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIC50ZWFtLW1lbWJlcjpob3ZlciAuaW1nLXRodW1ibmFpbCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjI5ZTtcbiAgfVxuXG4gIC50ZWFtLW1lbWJlciAuaW1nLXRodW1ibmFpbCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBjb2xvciAwLjNzIGJveC1zaGFkb3cgMC4zcztcbiAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBjb2xvciAwLjNzIGJveC1zaGFkb3cgMC4zcztcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgY29sb3IgMC4zcyBib3gtc2hhZG93IDAuM3M7XG4gIH1cblxuICAudGVhbS1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNmMGYwZjA7XG4gIH1cblxuICAudGVhbS1jb250ZW50IGg1IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAudGVhbS1jb250ZW50OmFmdGVyIHtcbiAgICBib3R0b206IDEwMCU7XG4gICAgbGVmdDogNTAlO1xuICAgIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItd2lkdGg6IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICB9XG5cbiAgLnRlYW0tbWVtYmVyIC5idG4ge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG5cbiAgLnRlYW0taW1hZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLnRlYW0taW1hZ2UgLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xuICAgIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcbiAgICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XG4gIH1cblxuICAudGVhbS1pbWFnZSAub3ZlcmxheSAucHJldmlldyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgfVxuXG4gIC50ZWFtLWltYWdlOmhvdmVyIC5vdmVybGF5IHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgLyogIFNvY2lhbFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgI3NvY2lhbC1tZWRpYSAuZmEtZmFjZWJvb2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYzU4OTk7XG4gIH1cblxuICAjc29jaWFsLW1lZGlhIC5mYS1mYWNlYm9vazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRlNmZiYTtcbiAgfVxuXG4gICNzb2NpYWwtbWVkaWEgLmZhLXR3aXR0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOWM1ZjY7XG4gIH1cblxuICAjc29jaWFsLW1lZGlhIC5mYS10d2l0dGVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWFkMmY4O1xuICB9XG5cbiAgI3NvY2lhbC1tZWRpYSAuZmEtZ29vZ2xlLXBsdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMTNkMmY7XG4gIH1cblxuICAjc29jaWFsLW1lZGlhIC5mYS1nb29nbGUtcGx1czpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RhNjQ1OTtcbiAgfVxuXG4gICNzb2NpYWwtbWVkaWEgLmZhLXBpbnRlcmVzdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M2MTExODtcbiAgfVxuXG4gICNzb2NpYWwtbWVkaWEgLmZhLXBpbnRlcmVzdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjMWUyNjtcbiAgfVxuXG4gIC5mYS1sZyB7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIGhlaWdodDogMTA4cHg7XG4gICAgd2lkdGg6IDEwOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMDhweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB9XG5cbiAgLmZhLW1kIHtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgaGVpZ2h0OiA2OHB4O1xuICAgIHdpZHRoOiA2OHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA2OHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMjllO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGNvbG9yIDAuM3MgYm94LXNoYWRvdyAwLjNzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGNvbG9yIDAuM3MgYm94LXNoYWRvdyAwLjNzO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBjb2xvciAwLjNzIGJveC1zaGFkb3cgMC4zcztcbiAgfVxuXG4gIC5zZXJ2aWNlLWJsb2NrOmhvdmVyIC5mYS1tZCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICMwMGIyOWU7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgNHB4ICMwMGIyOWU7XG4gIH1cblxuICAuc2VydmljZS1ibG9jayAubWVkaWEtaGVhZGluZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAuc2VjdGlvbi1oZWFkaW5nIGhyIHtcbiAgICBtYXJnaW46IDVweCBhdXRvO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gIH1cblxuICAubW9kYWwge1xuICAgIGJvcmRlcjogMDtcbiAgfVxuXG4gIC5tb2RhbCNsb2dpbkZvcm0ge1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBtYXJnaW4tbGVmdDogLTMwMHB4O1xuICB9XG5cbiAgLm1vZGFsIC5tb2RhbC1oZWFkZXIge1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMDtcbiAgfVxuXG4gIC5tb2RhbCAubW9kYWwtaGVhZGVyID4gaDQge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjODQ4NDg0O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLm1vZGFsIC5tb2RhbC1ib2R5IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG5cbiAgLm1vZGFsIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuICAubW9kYWwgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cblxuICAubW9kYWwgLmZhLXJlbW92ZSB7XG4gICAgY29sb3I6ICM4NDg0ODQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAtNXB4O1xuICAgIHRvcDogLTVweDtcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICNlYmViZWI7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5tb2RhbCBidXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGJvcmRlcjogMDtcbiAgfVxuXG4gIC5nYXAge1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIH1cblxuICAuYmlnLWdhcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gIH1cblxuICAubm8tbWFyZ2luIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5yZWdpc3RyYXRpb24tZm9ybSB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICAjYm90dG9tIHtcbiAgICBjb2xvcjogI2JkYzNjNztcbiAgfVxuXG4gICNib3R0b20gaDQge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuXG4gICNib3R0b20gLm1lZGlhLWhlYWRpbmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cblxuICAucm93ID4gZGl2IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgdWwudW5zdHlsZWQge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAvKlVub3JkZXJlZCBMaXN0cyovXG5cbiAgdWwuYXJyb3csXG4gIHVsLmFycm93LWRvdWJsZSxcbiAgdWwudGljayxcbiAgdWwuY3Jvc3MsXG4gIHVsLnN0YXIsXG4gIHVsLnJzcyB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIHVsLmFycm93IGxpOjpiZWZvcmUsXG4gIHVsLmFycm93LWRvdWJsZSBsaTo6YmVmb3JlLFxuICB1bC50aWNrIGxpOjpiZWZvcmUsXG4gIHVsLmNyb3NzIGxpOjpiZWZvcmUsXG4gIHVsLnN0YXIgbGk6OmJlZm9yZSxcbiAgdWwucnNzIGxpOjpiZWZvcmUsXG4gIHVsLmFycm93IGxpOjphZnRlcixcbiAgdWwuYXJyb3ctZG91YmxlIGxpOjphZnRlcixcbiAgdWwudGljayBsaTo6YWZ0ZXIsXG4gIHVsLmNyb3NzIGxpOjphZnRlcixcbiAgdWwuc3RhciBsaTo6YWZ0ZXIsXG4gIHVsLnJzcyBsaTo6YWZ0ZXIge1xuICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICB1bC5hcnJvdyBsaTo6YmVmb3JlLFxuICB1bC5hcnJvdy1kb3VibGUgbGk6OmJlZm9yZSxcbiAgdWwudGljayBsaTo6YmVmb3JlLFxuICB1bC5jcm9zcyBsaTo6YmVmb3JlLFxuICB1bC5zdGFyIGxpOjpiZWZvcmUsXG4gIHVsLnJzcyBsaTo6YmVmb3JlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgfVxuXG4gIHVsLmFycm93IGxpOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxmMTA1XCI7XG4gIH1cblxuICB1bC5hcnJvdy1kb3VibGUgbGk6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGYxMDFcIjtcbiAgfVxuXG4gIHVsLnRpY2sgbGk6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGYwMGNcIjtcbiAgfVxuXG4gIHVsLmNyb3NzIGxpOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxmMDBkXCI7XG4gIH1cblxuICB1bC5zdGFyIGxpOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxmMDA2XCI7XG4gIH1cblxuICB1bC5yc3MgbGk6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGYwOWVcIjtcbiAgfVxuXG4gICNmb290ZXIge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwMTAxMDtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICBjb2xvcjogI2VlZTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzMzMztcbiAgfVxuXG4gICNmb290ZXIgYSxcbiAgI2Zvb3Rlci13cmFwcGVyIGEge1xuICAgIGNvbG9yOiAjYmRjM2M3O1xuICB9XG5cbiAgI2Zvb3RlciBhOmhvdmVyLFxuICAjZm9vdGVyLXdyYXBwZXIgYTpob3ZlciB7XG4gICAgY29sb3I6ICMwMGIyOWU7XG4gIH1cblxuICAjZm9vdGVyIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgI2Zvb3RlciB1bCA+IGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cblxuICB1bC5zb2NpYWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4gIHVsLnNvY2lhbCA+IGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAwIDVweDtcbiAgfVxuXG4gIHVsLnNvY2lhbCA+IGxpID4gYSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjNjY2O1xuICB9XG5cbiAgdWwuc29jaWFsID4gbGkgPiBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzk5OTtcbiAgfVxuXG4gIC5ib3gtYm9yZGVyIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG5cbiAgLmFjY29yZGlvbi1ncm91cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YwZjBmMDtcbiAgfVxuXG4gIC5hY2NvcmRpb24taGVhZGluZyAuYWNjb3JkaW9uLXRvZ2dsZSB7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuXG4gIC5hY2NvcmRpb24taW5uZXIge1xuICAgIGJvcmRlci10b3A6IDA7XG4gIH1cblxuICAuYmxvZyAuYmxvZy1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIH1cblxuICAuYmxvZyAuYmxvZy1pdGVtIC5pbWctYmxvZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAuYmxvZyAuYmxvZy1pdGVtIC5ibG9nLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZjBmMGYwO1xuICB9XG5cbiAgLmJsb2cgLmJsb2ctaXRlbSAuYmxvZy1jb250ZW50OmFmdGVyIHtcbiAgICBib3R0b206IDEwMCU7XG4gICAgbGVmdDogNTAlO1xuICAgIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItd2lkdGg6IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICB9XG5cbiAgLmJsb2cgLmJsb2ctaXRlbSBoMyB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuXG4gIC5ibG9nIC5ibG9nLWl0ZW0gLmVudHJ5LW1ldGEge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjNzM3MzczO1xuICAgIG1hcmdpbi1ib3R0b206IDExcHg7XG4gIH1cblxuICAuYmxvZyAuYmxvZy1pdGVtIC5lbnRyeS1tZXRhID4gc3BhbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAuYmxvZyAuYmxvZy1pdGVtIC5lbnRyeS1tZXRhID4gc3BhbiBhIHtcbiAgICBjb2xvcjogIzk5OTtcbiAgfVxuXG4gIC5ibG9nLWZlYXR1cmVkLWltYWdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5ibG9nLWZlYXR1cmVkLWltYWdlIC5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcbiAgICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XG4gICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xuICB9XG5cbiAgLmJsb2ctZmVhdHVyZWQtaW1hZ2UgLm92ZXJsYXkgLnByZXZpZXcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIH1cblxuICAuYmxvZy1mZWF0dXJlZC1pbWFnZTpob3ZlciAub3ZlcmxheSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHVsLnBhZ2luYXRpb24gPiBsaSA+IGEge1xuICAgIGJvcmRlcjogMDtcbiAgfVxuXG4gIHVsLnBhZ2luYXRpb24gPiBsaS5hY3RpdmUgPiBhLFxuICB1bC5wYWdpbmF0aW9uID4gbGk6aG92ZXIgPiBhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAgdGV4dGFyZWEjbWVzc2FnZSB7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGhlaWdodDogMjE5cHg7XG4gIH1cblxuICAud2lkZ2V0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG5cbiAgdWwuZ2FsbGVyeSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIHVsLmdhbGxlcnkgbGkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwIDRweCA0cHggMDtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gIHVsLmZhcSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICB1bC5mYXEgbGkge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cblxuICB1bC5mYXEgbGk6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cblxuICB1bC5mYXEgbGkgc3Bhbi5udW1iZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogIzIyMjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cblxuICB1bC5mYXEgbGkgPiBkaXYge1xuICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICB9XG5cbiAgdWwuZmFxIGxpID4gZGl2IGgzIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG5cbiAgI2Vycm9yIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XG4gIH1cblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAvKiAgQ29ubW1lbnRzXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICBpbWcuY29tbWVudC1hdmF0YXIge1xuICAgIG1heC13aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICBpbWcuYXV0aG9yLWJveC1pbWFnZSB7XG4gICAgbWF4LXdpZHRoOiAxMTBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAjY29tbWVudHMtbGlzdCAud2VsbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAjY29tbWVudHMtbGlzdCAud2VsbDphZnRlciB7XG4gICAgcmlnaHQ6IDEwMCU7XG4gICAgdG9wOiA1MCU7XG4gICAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBoZWlnaHQ6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNDUsIDI0NSwgMjQ1LCAwKTtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICNmNWY1ZjU7XG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICB9XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgLyogIENvbnRlbnRcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gICNjb250ZW50LXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgei1pbmRleDogNTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB9XG5cbiAgLndoaXRlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgfVxuXG4gICNjb250ZW50LXdyYXBwZXIgc2VjdGlvbiB7XG4gICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XG4gIH1cblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAvKiAgRm9vdGVyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAjZm9vdGVyLXdyYXBwZXIge1xuICAgIHotaW5kZXg6IDE7XG4gICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xuICB9XG5cbiAgLndpZGdldC1pbWcge1xuICAgIG1heC13aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAuYWJvdXQtdXMtd2lkZ2V0IHtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL3dvcmxkLW1hcC5wbmcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgfVxuXG4gIC53aWRnZXQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgLyogIFNlYXJjaFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgI3NlYXJjaC13cmFwcGVyIGlucHV0I3NlYXJjaC1ib3gge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNTU1O1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIGNvbG9yOiAjZWVlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiA4cHggNXB4O1xuICB9XG5cbiAgLm9wYXF1ZWQgI3NlYXJjaC13cmFwcGVyIGlucHV0I3NlYXJjaC1ib3gge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAuc2VhcmNoLXRyaWdnZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuc2VhcmNoLXRyaWdnZXI6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIC8qICBQQVJBTExBWFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgLmRpdmlkZXItc2VjdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjZjVmNWY1O1xuICB9XG5cbiAgLmRpdmlkZXItc2VjdGlvbiBhIHtcbiAgICBjb2xvcjogI2Y1ZjVmNTtcbiAgfVxuXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIC8qICBCVVRUT05TXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAuYnRuLW91dGxpbmVkIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5idG4tb3V0bGluZWQuYnRuLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwYjI5ZTtcbiAgICBjb2xvcjogIzAwYjI5ZTtcbiAgfVxuXG4gIC5idG4tb3V0bGluZWQuYnRuLXByaW1hcnk6aG92ZXIsXG4gIC5idG4tb3V0bGluZWQuYnRuLXByaW1hcnk6YWN0aXZlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiAjMDBiMjllO1xuICAgIGJvcmRlci1jb2xvcjogIzAwYjI5ZTtcbiAgfVxuXG4gIC5idG4tb3V0bGluZWQuYnRuLXN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzVjYjg1YztcbiAgICBjb2xvcjogIzVjYjg1YztcbiAgfVxuXG4gIC5idG4tb3V0bGluZWQuYnRuLXN1Y2Nlc3M6aG92ZXIsXG4gIC5idG4tb3V0bGluZWQuYnRuLXN1Y2Nlc3M6YWN0aXZlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiAjNDdhNDQ3O1xuICB9XG5cbiAgLmJ0bi1vdXRsaW5lZC5idG4taW5mbyB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNWJjMGRlO1xuICAgIGNvbG9yOiAjNWJjMGRlO1xuICB9XG5cbiAgLmJ0bi1vdXRsaW5lZC5idG4taW5mbzpob3ZlcixcbiAgLmJ0bi1vdXRsaW5lZC5idG4taW5mbzphY3RpdmUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6ICMzOWIzZDc7XG4gIH1cblxuICAuYnRuLW91dGxpbmVkLmJ0bi13YXJuaW5nIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmMGFkNGU7XG4gICAgY29sb3I6ICNmMGFkNGU7XG4gIH1cblxuICAuYnRuLW91dGxpbmVkLmJ0bi13YXJuaW5nOmhvdmVyLFxuICAuYnRuLW91dGxpbmVkLmJ0bi13YXJuaW5nOmFjdGl2ZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogI2VkOWMyODtcbiAgfVxuXG4gIC5idG4tb3V0bGluZWQuYnRuLWRhbmdlciB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZDk1MzRmO1xuICAgIGNvbG9yOiAjZDk1MzRmO1xuICB9XG5cbiAgLmJ0bi1vdXRsaW5lZC5idG4tZGFuZ2VyOmhvdmVyLFxuICAuYnRuLW91dGxpbmVkLmJ0bi1kYW5nZXI6YWN0aXZlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiAjZDIzMjJkO1xuICB9XG5cbiAgLmJ0bi1vdXRsaW5lZC5idG4td2hpdGUge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gIC5idG4tb3V0bGluZWQuYnRuLXdoaXRlOmhvdmVyLFxuICAuYnRuLW91dGxpbmVkLmJ0bi13aGl0ZTphY3RpdmUge1xuICAgIGNvbG9yOiAjMDBiMjllO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gIH1cblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAvKiAgQU5JTUFURVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgLm5vLWRpc3BsYXkge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAuYXBwZWFyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgfVxuXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIC8qICBQb3N0c1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgLnBvc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5wb3N0IC5jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2YwZjBmMDtcbiAgfVxuXG4gIC5wb3N0IC5jb250ZW50OmFmdGVyIHtcbiAgICBib3R0b206IDEwMCU7XG4gICAgbGVmdDogNTAlO1xuICAgIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItd2lkdGg6IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICB9XG5cbiAgLnBvc3QgLmF1dGhvciB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM3MzczNzM7XG4gICAgcGFkZGluZzogMTBweCAwIDhweDtcbiAgfVxuXG4gIC5wb3N0IC5wb3N0LWltZy1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5wb3N0IC5wb3N0LWltZy1jb250ZW50IC5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcbiAgICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XG4gICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xuICB9XG5cbiAgLnBvc3QgLnBvc3QtaW1nLWNvbnRlbnQgLm92ZXJsYXkgLnByZXZpZXcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIH1cblxuICAucG9zdCAucG9zdC1pbWctY29udGVudDpob3ZlciAub3ZlcmxheSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIC5wb3N0IC5wb3N0LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luOiAwIDAgMTBweDtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgei1pbmRleDogMjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAucG9zdCAucG9zdC10aXRsZSBiIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCA1MSwgNTEsIDAuNTgpO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuXG4gIC5yZWFkLW1vcmUtd3JhcHBlciB7XG4gICAgbWFyZ2luOiAyNXB4IDAgNXB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgLyogIFNUQVRTXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAuc3RhdC1pY29uIHtcbiAgICBmb250LXNpemU6IDQ0cHg7XG4gIH1cblxuICAjc3RhdHMgaDEge1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgfVxuXG4gICNzdGF0cyBoMyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgLyogIFNLSUxMU1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgLnRpbGUtcHJvZ3Jlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDM2NDE7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICAudGlsZS1wcm9ncmVzcyB7XG4gICAgYmFja2dyb3VuZDogIzAwYTY1YjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cblxuICAudGlsZS1wcm9ncmVzcyAudGlsZS1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgfVxuXG4gIC50aWxlLXByb2dyZXNzIC50aWxlLXByb2dyZXNzYmFyIHtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC50aWxlLXByb2dyZXNzIC50aWxlLXByb2dyZXNzYmFyIHNwYW4ge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gIH1cblxuICAudGlsZS1wcm9ncmVzcyAudGlsZS1wcm9ncmVzc2JhciBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxLjVzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAxLjVzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMS41cyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDEuNXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xuICB9XG5cbiAgLnRpbGUtcHJvZ3Jlc3MgLnRpbGUtZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgM3B4IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAwIDAgM3B4IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgM3B4IDNweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XG4gIH1cblxuICAudGlsZS1wcm9ncmVzcy50aWxlLXJlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogIzIwMjAyMDtcbiAgfVxuXG4gIC50aWxlLXByb2dyZXNzIC50aWxlLXByb2dyZXNzYmFyIHNwYW4ge1xuICAgIGJhY2tncm91bmQ6ICMyMDIwMjA7XG4gIH1cblxuICAudGlsZS1wcm9ncmVzcy50aWxlLXJlZCAudGlsZS1mb290ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmNTY5NTQ7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICAudGlsZS1wcm9ncmVzcy50aWxlLWN5YW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICMyMDIwMjA7XG4gIH1cblxuICAudGlsZS1wcm9ncmVzcy50aWxlLWN5YW4gLnRpbGUtcHJvZ3Jlc3NiYXIgc3BhbiB7XG4gICAgYmFja2dyb3VuZDogIzIwMjAyMDtcbiAgfVxuXG4gIC50aWxlLXByb2dyZXNzLnRpbGUtY3lhbiAudGlsZS1mb290ZXIge1xuICAgIGJhY2tncm91bmQ6ICMwMGIyOWU7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICAudGlsZS1wcm9ncmVzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogIzIwMjAyMDtcbiAgfVxuXG4gIC50aWxlLXByb2dyZXNzIC50aWxlLXByb2dyZXNzYmFyIHNwYW4ge1xuICAgIGJhY2tncm91bmQ6ICMyMDIwMjA7XG4gIH1cblxuICAudGlsZS1wcm9ncmVzcyAudGlsZS1mb290ZXIge1xuICAgIGJhY2tncm91bmQ6ICMzMDM2NDE7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICAudGlsZS1wcm9ncmVzcy50aWxlLXBpbmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICMyMDIwMjA7XG4gIH1cblxuICAudGlsZS1wcm9ncmVzcy50aWxlLXBpbmsgLnRpbGUtcHJvZ3Jlc3NiYXIgc3BhbiB7XG4gICAgYmFja2dyb3VuZDogIzIwMjAyMDtcbiAgfVxuXG4gIC50aWxlLXByb2dyZXNzLnRpbGUtcGluayAudGlsZS1mb290ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlYzNiODM7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAvKiAgQkFDS0dST1VORFNcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIC5iYWNrc3RyZXRjaCB7XG4gICAgei1pbmRleDogMyAhaW1wb3J0YW50O1xuICB9XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgLyogIFRFU1RJTU9OSUFMU1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgI3F1b3RlLWNhcm91c2VsIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgICByaWdodDogNTAlO1xuICAgIHRvcDogYXV0bztcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTlweDtcbiAgfVxuXG4gICNxdW90ZS1jYXJvdXNlbCAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gICAgYmFja2dyb3VuZDogc2lsdmVyO1xuICB9XG5cbiAgI3F1b3RlLWNhcm91c2VsIC5jYXJvdXNlbC1pbmRpY2F0b3JzIC5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gIH1cblxuICAjcXVvdGUtY2Fyb3VzZWwgaW1nIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuXG4gIC5pdGVtIGJsb2NrcXVvdGUge1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5pdGVtIGJsb2NrcXVvdGUgaW1nIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgLml0ZW0gYmxvY2txdW90ZSBwOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGYxMGRcIjtcbiAgICBmb250LWZhbWlseTogRm9udGF3ZXNvbWU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG5cbiAgLnRlc3RpbW9uaWFsLWxpc3QtaXRlbTpob3ZlciBibG9ja3F1b3RlIHtcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMwMGIyOWU7XG4gIH1cblxuICAucXVvdGUtYXV0aG9yLWxpc3Qge1xuICAgIG1heC13aWR0aDogOTVweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE5cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAjcXVvdGUtY2Fyb3VzZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgcGFkZGluZzogMCA0MHB4IDMwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIH1cbiAgICAjbWFpbi1zbGlkZXIgLmNhcm91c2VsLFxuICAgICNtYWluLXNsaWRlciAuY2Fyb3VzZWwtaW5uZXIsXG4gICAgI21haW4tc2xpZGVyIC5jYXJvdXNlbC1pbm5lciAuaXRlbSxcbiAgICAjbWFpbi1zbGlkZXIgLmNhcm91c2VsLWlubmVyIC5pdGVtIC5jb250YWluZXIsXG4gICAgI21haW4tc2xpZGVyIC5jYXJvdXNlbC1pbm5lciAuaXRlbSAucm93LFxuICAgICNtYWluLXNsaWRlciAuY2Fyb3VzZWwtaW5uZXIgLml0ZW0gLnJvdyAuY29sLXNtLTEyIHtcbiAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgICAjcXVvdGUtY2Fyb3VzZWwgLmNhcm91c2VsLWluZGljYXRvcnMge1xuICAgICAgYm90dG9tOiAtMjBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAjcXVvdGUtY2Fyb3VzZWwgLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgIH1cbiAgICAjcXVvdGUtY2Fyb3VzZWwgLmNhcm91c2VsLWluZGljYXRvcnMgbGkuYWN0aXZlIHtcbiAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICB9XG4gIH1cblxuICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgQ09OVEFDVFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuICAjY29udGFjdGZvcm0gaW5wdXQjbmFtZSxcbiAgI2NvbnRhY3Rmb3JtIGlucHV0I2VtYWlsLFxuICAjY29udGFjdGZvcm0gaW5wdXQjd2Vic2l0ZSxcbiAgI2NvbnRhY3Rmb3JtIHRleHRhcmVhI2NvbW1lbnRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBjb2xvcjogIzIwMjAyMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cblxuICAjY29udGFjdGZvcm0gdGV4dGFyZWEjY29tbWVudHMge1xuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICB9XG5cbiAgI2NvbnRhY3QgaDMge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cblxuICAjbWFwd3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgfVxuXG4gIC5mb3JtLWhvcml6b250YWwgLmNvbnRyb2wtbGFiZWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjbWVzc2FnZSB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBjb2xvcjogIzIwMjAyMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuXG4gIC8qIFBSRUxPQURFUiAqL1xuXG4gICNwcmVsb2FkZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiA5OTk5OTk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIC8vIGJhY2tncm91bmQ6ICNmNWY1ZjUgdXJsKCcuLi9pbWFnZXMvbG9hZGluZy5naWYnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgfVxuXG4gIC5tYjAge1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zZWN0aW9uLWlubmVyIHtcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbiAgfVxuXG4gIC5zZWN0aW9uLWlubmVyLmdhcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm5hdmJhci1oZWFkZXIgaDEge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2IHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG5cbiAgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2ID4gbGkgPiBhIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTBweDtcbiAgICBjb2xvcjogI2Y1ZjVmNTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG5cbiAgLmJsb2cgLmJsb2ctaXRlbSAuYmxvZy1jb250ZW50IHtcbiAgICBwYWRkaW5nOiA2MHB4IDQwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZjBmMGYwO1xuICB9XG5cbiAgLmJ0biB7XG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB9XG5cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICB9XG5cbiAgLndpZGdldC10aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIH1cblxuICAucG9ydGZvbGlvLWl0ZW0gaDUge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgbWFyZ2luOiAwIDIwcHggMCAwO1xuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB9XG5cbiAgLnBvc3QgLnBvc3QtdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuXG4gIC5vdmVybGF5IC5idG4tb3V0bGluZWQuYnRuLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICB9XG5cbiAgLnBvc3QgLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDI1cHggMTVweDtcbiAgfVxuXG4gIC5wb3N0IC5hdXRob3Ige1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjNzM3MzczO1xuICAgIHBhZGRpbmc6IDEwcHggMCA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gIC5zZWN0aW9uLWhlYWRpbmcgaHIge1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIG1heC13aWR0aDogMzMwcHg7XG4gICAgb3BhY2l0eTogMC45O1xuICB9XG5cbiAgLm1haW4tdGl0bGUge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDZweDtcbiAgfVxuXG4gIC5zZWN0aW9uLWhlYWRpbmcgcCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuXG4gICNjb250ZW50LXdyYXBwZXIge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICAubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGEge1xuICAgIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4O1xuICAgIGNvbG9yOiAjZWVlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cblxuICAjc2luZ2xlLXBhZ2Utc2xpZGVyIHtcbiAgICBtaW4taGVpZ2h0OiAzMTBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgI21haW4tc2xpZGVyIC5jYXJvdXNlbCAuYnRuIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIHRleHQtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMCAxcHggMXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIH1cblxuICAuYmFja3N0cmV0Y2g6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIH1cblxuICAjdGFnV3JhcHBlciB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luOiA0MHB4IDA7XG4gIH1cblxuICAuYnRuLXNtLFxuICAuYnRuLXhzIHtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAuY29tbWVudHMtdGl0bGUge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIH1cblxuICAudGVhbS1tZW1iZXIgLmJ0biB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDM3cHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAudGVhbS1jb250ZW50IGg1IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIH1cblxuICAjdGVzdGltb25pYWxzLXNsaWRlciBwIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxuICAjdGVzdGltb25pYWxzLXNsaWRlciBoNCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLnNlYXJjaC10cmlnZ2VyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxuXG4gIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgI2NvbnRlbnQtd3JhcHBlciB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgICNmb290ZXItd3JhcHBlciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-scroll-to-el */ "./node_modules/ng2-scroll-to-el/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AppComponent = class AppComponent {
    constructor(scrollService, router) {
        this.scrollService = scrollService;
        this.router = router;
        this.title = 'bluexpress';
    }
    scrollToTop(element) {
        if (this.router.url === '/') {
            this.scrollService.scrollTo(element);
        }
        else {
            this.navigateTo('/');
            setTimeout(() => {
                console.log('ELEMENT', element, this.router.url);
                this.scrollService.scrollTo(element);
            }, 500);
        }
    }
    navigateTo(path) {
        this.router.navigateByUrl(path);
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_2__["ScrollToService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_sucursales_sucursales_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sucursales/sucursales.component */ "./src/app/components/sucursales/sucursales.component.ts");
/* harmony import */ var _components_servicios_servicios_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/servicios/servicios.component */ "./src/app/components/servicios/servicios.component.ts");
/* harmony import */ var _components_seguimiento_seguimiento_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/seguimiento/seguimiento.component */ "./src/app/components/seguimiento/seguimiento.component.ts");
/* harmony import */ var _components_info_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/info/info.component */ "./src/app/components/info/info.component.ts");
/* harmony import */ var _components_nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/nosotros/nosotros.component */ "./src/app/components/nosotros/nosotros.component.ts");
/* harmony import */ var _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/contacto/contacto.component */ "./src/app/components/contacto/contacto.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _components_maps_maps_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/maps/maps.component */ "./src/app/components/maps/maps.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/autocomplete.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_autocomplete__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng2-scroll-to-el */ "./node_modules/ng2-scroll-to-el/index.js");
/* harmony import */ var _components_servicios_envios_envios_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/_servicios/envios/envios.component */ "./src/app/components/_servicios/envios/envios.component.ts");
/* harmony import */ var _components_servicios_oficinas_oficinas_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/_servicios/oficinas/oficinas.component */ "./src/app/components/_servicios/oficinas/oficinas.component.ts");
/* harmony import */ var _components_servicios_courier_courier_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/_servicios/courier/courier.component */ "./src/app/components/_servicios/courier/courier.component.ts");
/* harmony import */ var _components_servicios_almacenaje_almacenaje_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/_servicios/almacenaje/almacenaje.component */ "./src/app/components/_servicios/almacenaje/almacenaje.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_nosotros_historia_historia_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/_nosotros/historia/historia.component */ "./src/app/components/_nosotros/historia/historia.component.ts");
/* harmony import */ var _components_nosotros_mision_mision_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/_nosotros/mision/mision.component */ "./src/app/components/_nosotros/mision/mision.component.ts");
/* harmony import */ var _components_nosotros_valores_valores_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/_nosotros/valores/valores.component */ "./src/app/components/_nosotros/valores/valores.component.ts");
/* harmony import */ var _components_nosotros_tecnologia_tecnologia_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/_nosotros/tecnologia/tecnologia.component */ "./src/app/components/_nosotros/tecnologia/tecnologia.component.ts");
/* harmony import */ var _components_nosotros_integracion_integracion_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/_nosotros/integracion/integracion.component */ "./src/app/components/_nosotros/integracion/integracion.component.ts");
/* harmony import */ var _components_nosotros_politica_politica_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/_nosotros/politica/politica.component */ "./src/app/components/_nosotros/politica/politica.component.ts");
/* harmony import */ var _components_contacto_ejecutivos_ejecutivos_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/_contacto/ejecutivos/ejecutivos.component */ "./src/app/components/_contacto/ejecutivos/ejecutivos.component.ts");
/* harmony import */ var _components_contacto_servicio_servicio_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/_contacto/servicio/servicio.component */ "./src/app/components/_contacto/servicio/servicio.component.ts");
/* harmony import */ var _components_contacto_cobertura_cobertura_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/_contacto/cobertura/cobertura.component */ "./src/app/components/_contacto/cobertura/cobertura.component.ts");
/* harmony import */ var _components_contacto_materiales_materiales_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/_contacto/materiales/materiales.component */ "./src/app/components/_contacto/materiales/materiales.component.ts");
/* harmony import */ var _components_contacto_trabaje_trabaje_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/_contacto/trabaje/trabaje.component */ "./src/app/components/_contacto/trabaje/trabaje.component.ts");
/* harmony import */ var _components_contacto_menu_menu_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/_contacto/menu/menu.component */ "./src/app/components/_contacto/menu/menu.component.ts");






































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_sucursales_sucursales_component__WEBPACK_IMPORTED_MODULE_6__["SucursalesComponent"],
            _components_servicios_servicios_component__WEBPACK_IMPORTED_MODULE_7__["ServiciosComponent"],
            _components_info_info_component__WEBPACK_IMPORTED_MODULE_9__["InfoComponent"],
            _components_nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_10__["NosotrosComponent"],
            _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_11__["ContactoComponent"],
            _components_maps_maps_component__WEBPACK_IMPORTED_MODULE_13__["MapsComponent"],
            _components_seguimiento_seguimiento_component__WEBPACK_IMPORTED_MODULE_8__["SeguimientoComponent"],
            _components_servicios_envios_envios_component__WEBPACK_IMPORTED_MODULE_21__["EnviosComponent"],
            _components_servicios_oficinas_oficinas_component__WEBPACK_IMPORTED_MODULE_22__["OficinasComponent"],
            _components_servicios_courier_courier_component__WEBPACK_IMPORTED_MODULE_23__["CourierComponent"],
            _components_servicios_almacenaje_almacenaje_component__WEBPACK_IMPORTED_MODULE_24__["AlmacenajeComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_25__["HomeComponent"],
            _components_nosotros_historia_historia_component__WEBPACK_IMPORTED_MODULE_26__["HistoriaComponent"],
            _components_nosotros_mision_mision_component__WEBPACK_IMPORTED_MODULE_27__["MisionComponent"],
            _components_nosotros_valores_valores_component__WEBPACK_IMPORTED_MODULE_28__["ValoresComponent"],
            _components_nosotros_tecnologia_tecnologia_component__WEBPACK_IMPORTED_MODULE_29__["TecnologiaComponent"],
            _components_nosotros_integracion_integracion_component__WEBPACK_IMPORTED_MODULE_30__["IntegracionComponent"],
            _components_nosotros_politica_politica_component__WEBPACK_IMPORTED_MODULE_31__["PoliticaComponent"],
            _components_contacto_ejecutivos_ejecutivos_component__WEBPACK_IMPORTED_MODULE_32__["EjecutivosComponent"],
            _components_contacto_servicio_servicio_component__WEBPACK_IMPORTED_MODULE_33__["ServicioComponent"],
            _components_contacto_cobertura_cobertura_component__WEBPACK_IMPORTED_MODULE_34__["CoberturaComponent"],
            _components_contacto_materiales_materiales_component__WEBPACK_IMPORTED_MODULE_35__["MaterialesComponent"],
            _components_contacto_trabaje_trabaje_component__WEBPACK_IMPORTED_MODULE_36__["TrabajeComponent"],
            _components_contacto_menu_menu_component__WEBPACK_IMPORTED_MODULE_37__["MenuComponent"]
        ],
        imports: [
            ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_20__["ScrollToModule"].forRoot(),
            primeng_dialog__WEBPACK_IMPORTED_MODULE_15__["DialogModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_16__["TableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_19__["DropdownModule"],
            primeng_autocomplete__WEBPACK_IMPORTED_MODULE_17__["AutoCompleteModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_12__["AgmCoreModule"].forRoot({
                // please get your own API key here:
                // https://developers.google.com/maps/documentation/javascript/get-api-key
                apiKey: ''
            })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/_contacto/cobertura/cobertura.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/_contacto/cobertura/cobertura.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvX2NvbnRhY3RvL2NvYmVydHVyYS9jb2JlcnR1cmEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/_contacto/cobertura/cobertura.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/_contacto/cobertura/cobertura.component.ts ***!
  \***********************************************************************/
/*! exports provided: CoberturaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoberturaComponent", function() { return CoberturaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CoberturaComponent = class CoberturaComponent {
    constructor() { }
    ngOnInit() {
    }
};
CoberturaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cobertura',
        template: __webpack_require__(/*! raw-loader!./cobertura.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/_contacto/cobertura/cobertura.component.html"),
        styles: [__webpack_require__(/*! ./cobertura.component.scss */ "./src/app/components/_contacto/cobertura/cobertura.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CoberturaComponent);



/***/ }),

/***/ "./src/app/components/_contacto/ejecutivos/ejecutivos.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/_contacto/ejecutivos/ejecutivos.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvX2NvbnRhY3RvL2VqZWN1dGl2b3MvZWplY3V0aXZvcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/_contacto/ejecutivos/ejecutivos.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/_contacto/ejecutivos/ejecutivos.component.ts ***!
  \*************************************************************************/
/*! exports provided: EjecutivosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EjecutivosComponent", function() { return EjecutivosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EjecutivosComponent = class EjecutivosComponent {
    constructor() { }
    ngOnInit() {
    }
};
EjecutivosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ejecutivos',
        template: __webpack_require__(/*! raw-loader!./ejecutivos.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/_contacto/ejecutivos/ejecutivos.component.html"),
        styles: [__webpack_require__(/*! ./ejecutivos.component.scss */ "./src/app/components/_contacto/ejecutivos/ejecutivos.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EjecutivosComponent);



/***/ }),

/***/ "./src/app/components/_contacto/materiales/materiales.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/_contacto/materiales/materiales.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvX2NvbnRhY3RvL21hdGVyaWFsZXMvbWF0ZXJpYWxlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/_contacto/materiales/materiales.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/_contacto/materiales/materiales.component.ts ***!
  \*************************************************************************/
/*! exports provided: MaterialesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialesComponent", function() { return MaterialesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MaterialesComponent = class MaterialesComponent {
    constructor() { }
    ngOnInit() {
    }
};
MaterialesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-materiales',
        template: __webpack_require__(/*! raw-loader!./materiales.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/_contacto/materiales/materiales.component.html"),
        styles: [__webpack_require__(/*! ./materiales.component.scss */ "./src/app/components/_contacto/materiales/materiales.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MaterialesComponent);



/***/ }),

/***/ "./src/app/components/_contacto/menu/menu.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/_contacto/menu/menu.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVqYW5kcm9wZXJlei9Eb2N1bWVudHMvc2ludGl0dWxvL2JsdWV4cHJlc3MvZ2l0L2JsdS9zcmMvYXBwL2NvbXBvbmVudHMvX2NvbnRhY3RvL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9fY29udGFjdG8vbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9fY29udGFjdG8vbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSIsImEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/_contacto/menu/menu.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/_contacto/menu/menu.component.ts ***!
  \*************************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../contacto/contacto.component */ "./src/app/components/contacto/contacto.component.ts");



let MenuComponent = class MenuComponent {
    constructor(con) {
        this.con = con;
    }
    ngOnInit() {
    }
    contactTo(to) {
        this.con.contacto = to;
    }
};
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/_contacto/menu/menu.component.html"),
        styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/components/_contacto/menu/menu.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_2__["ContactoComponent"]])
], MenuComponent);



/***/ }),

/***/ "./src/app/components/_contacto/servicio/servicio.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/_contacto/servicio/servicio.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvX2NvbnRhY3RvL3NlcnZpY2lvL3NlcnZpY2lvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/_contacto/servicio/servicio.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/_contacto/servicio/servicio.component.ts ***!
  \*********************************************************************/
/*! exports provided: ServicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioComponent", function() { return ServicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServicioComponent = class ServicioComponent {
    constructor() { }
    ngOnInit() {
    }
};
ServicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-servicio',
        template: __webpack_require__(/*! raw-loader!./servicio.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/_contacto/servicio/servicio.component.html"),
        styles: [__webpack_require__(/*! ./servicio.component.scss */ "./src/app/components/_contacto/servicio/servicio.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ServicioComponent);



/***/ }),

/***/ "./src/app/components/_contacto/trabaje/trabaje.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/_contacto/trabaje/trabaje.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvX2NvbnRhY3RvL3RyYWJhamUvdHJhYmFqZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/_contacto/trabaje/trabaje.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/_contacto/trabaje/trabaje.component.ts ***!
  \*******************************************************************/
/*! exports provided: TrabajeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrabajeComponent", function() { return TrabajeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TrabajeComponent = class TrabajeComponent {
    constructor() { }
    ngOnInit() {
    }
};
TrabajeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trabaje',
        template: __webpack_require__(/*! raw-loader!./trabaje.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/_contacto/trabaje/trabaje.component.html"),
        styles: [__webpack_require__(/*! ./trabaje.component.scss */ "./src/app/components/_contacto/trabaje/trabaje.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TrabajeComponent);



/***/ }),

/***/ "./src/app/components/_nosotros/historia/historia.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/_nosotros/historia/historia.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvX25vc290cm9zL2hpc3RvcmlhL2hpc3RvcmlhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/_nosotros/historia/historia.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/_nosotros/historia/historia.component.ts ***!
  \*********************************************************************/
/*! exports provided: HistoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriaComponent", function() { return HistoriaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HistoriaComponent = class HistoriaComponent {
    constructor() { }
    ngOnInit() {
    }
};
HistoriaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-historia',
        template: __webpack_require__(/*! raw-loader!./historia.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/_nosotros/historia/historia.component.html"),
        styles: [__webpack_require__(/*! ./historia.component.scss */ "./src/app/components/_nosotros/historia/historia.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HistoriaComponent);



/***/ }),

/***/ "./src/app/components/_nosotros/integracion/integracion.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/_nosotros/integracion/integracion.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvX25vc290cm9zL2ludGVncmFjaW9uL2ludGVncmFjaW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/_nosotros/integracion/integracion.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/_nosotros/integracion/integracion.component.ts ***!
  \***************************************************************************/
/*! exports provided: IntegracionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegracionComponent", function() { return IntegracionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IntegracionComponent = class IntegracionComponent {
    constructor() { }
    ngOnInit() {
    }
};
IntegracionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-integracion',
        template: __webpack_require__(/*! raw-loader!./integracion.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/_nosotros/integracion/integracion.component.html"),
        styles: [__webpack_require__(/*! ./integracion.component.scss */ "./src/app/components/_nosotros/integracion/integracion.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IntegracionComponent);



/***/ }),

/***/ "./src/app/components/_nosotros/mision/mision.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/_nosotros/mision/mision.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvX25vc290cm9zL21pc2lvbi9taXNpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/_nosotros/mision/mision.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/_nosotros/mision/mision.component.ts ***!
  \*****************************************************************/
/*! exports provided: MisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisionComponent", function() { return MisionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MisionComponent = class MisionComponent {
    constructor() { }
    ngOnInit() {
    }
};
MisionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mision',
        template: __webpack_require__(/*! raw-loader!./mision.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/_nosotros/mision/mision.component.html"),
        styles: [__webpack_require__(/*! ./mision.component.scss */ "./src/app/components/_nosotros/mision/mision.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MisionComponent);



/***/ }),

/***/ "./src/app/components/_nosotros/politica/politica.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/_nosotros/politica/politica.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvX25vc290cm9zL3BvbGl0aWNhL3BvbGl0aWNhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/_nosotros/politica/politica.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/_nosotros/politica/politica.component.ts ***!
  \*********************************************************************/
/*! exports provided: PoliticaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliticaComponent", function() { return PoliticaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PoliticaComponent = class PoliticaComponent {
    constructor() { }
    ngOnInit() {
    }
};
PoliticaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-politica',
        template: __webpack_require__(/*! raw-loader!./politica.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/_nosotros/politica/politica.component.html"),
        styles: [__webpack_require__(/*! ./politica.component.scss */ "./src/app/components/_nosotros/politica/politica.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PoliticaComponent);



/***/ }),

/***/ "./src/app/components/_nosotros/tecnologia/tecnologia.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/_nosotros/tecnologia/tecnologia.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvX25vc290cm9zL3RlY25vbG9naWEvdGVjbm9sb2dpYS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/_nosotros/tecnologia/tecnologia.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/_nosotros/tecnologia/tecnologia.component.ts ***!
  \*************************************************************************/
/*! exports provided: TecnologiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaComponent", function() { return TecnologiaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TecnologiaComponent = class TecnologiaComponent {
    constructor() { }
    ngOnInit() {
    }
};
TecnologiaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tecnologia',
        template: __webpack_require__(/*! raw-loader!./tecnologia.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/_nosotros/tecnologia/tecnologia.component.html"),
        styles: [__webpack_require__(/*! ./tecnologia.component.scss */ "./src/app/components/_nosotros/tecnologia/tecnologia.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TecnologiaComponent);



/***/ }),

/***/ "./src/app/components/_nosotros/valores/valores.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/_nosotros/valores/valores.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#valores {\n  min-height: 100vh;\n  padding-top: 140px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVqYW5kcm9wZXJlei9Eb2N1bWVudHMvc2ludGl0dWxvL2JsdWV4cHJlc3MvZ2l0L2JsdS9zcmMvYXBwL2NvbXBvbmVudHMvX25vc290cm9zL3ZhbG9yZXMvdmFsb3Jlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9fbm9zb3Ryb3MvdmFsb3Jlcy92YWxvcmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9fbm9zb3Ryb3MvdmFsb3Jlcy92YWxvcmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3ZhbG9yZXMge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmctdG9wOiAxNDBweDtcbn0iLCIjdmFsb3JlcyB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nLXRvcDogMTQwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/_nosotros/valores/valores.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/_nosotros/valores/valores.component.ts ***!
  \*******************************************************************/
/*! exports provided: ValoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValoresComponent", function() { return ValoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ValoresComponent = class ValoresComponent {
    constructor() { }
    ngOnInit() {
    }
};
ValoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-valores',
        template: __webpack_require__(/*! raw-loader!./valores.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/_nosotros/valores/valores.component.html"),
        styles: [__webpack_require__(/*! ./valores.component.scss */ "./src/app/components/_nosotros/valores/valores.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ValoresComponent);



/***/ }),

/***/ "./src/app/components/_servicios/almacenaje/almacenaje.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/_servicios/almacenaje/almacenaje.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 67px;\n  padding-top: 40px;\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVqYW5kcm9wZXJlei9Eb2N1bWVudHMvc2ludGl0dWxvL2JsdWV4cHJlc3MvZ2l0L2JsdS9zcmMvYXBwL2NvbXBvbmVudHMvX3NlcnZpY2lvcy9hbG1hY2VuYWplL2FsbWFjZW5hamUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvX3NlcnZpY2lvcy9hbG1hY2VuYWplL2FsbWFjZW5hamUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvX3NlcnZpY2lvcy9hbG1hY2VuYWplL2FsbWFjZW5hamUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA2N3B4O1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xufSIsIi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA2N3B4O1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/_servicios/almacenaje/almacenaje.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/_servicios/almacenaje/almacenaje.component.ts ***!
  \**************************************************************************/
/*! exports provided: AlmacenajeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlmacenajeComponent", function() { return AlmacenajeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AlmacenajeComponent = class AlmacenajeComponent {
    constructor() { }
    ngOnInit() {
    }
};
AlmacenajeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-almacenaje',
        template: __webpack_require__(/*! raw-loader!./almacenaje.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/_servicios/almacenaje/almacenaje.component.html"),
        styles: [__webpack_require__(/*! ./almacenaje.component.scss */ "./src/app/components/_servicios/almacenaje/almacenaje.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AlmacenajeComponent);



/***/ }),

/***/ "./src/app/components/_servicios/courier/courier.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/_servicios/courier/courier.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 67px;\n  padding-top: 40px;\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVqYW5kcm9wZXJlei9Eb2N1bWVudHMvc2ludGl0dWxvL2JsdWV4cHJlc3MvZ2l0L2JsdS9zcmMvYXBwL2NvbXBvbmVudHMvX3NlcnZpY2lvcy9jb3VyaWVyL2NvdXJpZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvX3NlcnZpY2lvcy9jb3VyaWVyL2NvdXJpZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvX3NlcnZpY2lvcy9jb3VyaWVyL2NvdXJpZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA2N3B4O1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xufSIsIi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA2N3B4O1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/_servicios/courier/courier.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/_servicios/courier/courier.component.ts ***!
  \********************************************************************/
/*! exports provided: CourierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourierComponent", function() { return CourierComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CourierComponent = class CourierComponent {
    constructor() { }
    ngOnInit() {
    }
};
CourierComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-courier',
        template: __webpack_require__(/*! raw-loader!./courier.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/_servicios/courier/courier.component.html"),
        styles: [__webpack_require__(/*! ./courier.component.scss */ "./src/app/components/_servicios/courier/courier.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CourierComponent);



/***/ }),

/***/ "./src/app/components/_servicios/envios/envios.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/_servicios/envios/envios.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 67px;\n  padding-top: 40px;\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVqYW5kcm9wZXJlei9Eb2N1bWVudHMvc2ludGl0dWxvL2JsdWV4cHJlc3MvZ2l0L2JsdS9zcmMvYXBwL2NvbXBvbmVudHMvX3NlcnZpY2lvcy9lbnZpb3MvZW52aW9zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL19zZXJ2aWNpb3MvZW52aW9zL2Vudmlvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9fc2VydmljaW9zL2Vudmlvcy9lbnZpb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA2N3B4O1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xufSIsIi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA2N3B4O1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/_servicios/envios/envios.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/_servicios/envios/envios.component.ts ***!
  \******************************************************************/
/*! exports provided: EnviosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnviosComponent", function() { return EnviosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EnviosComponent = class EnviosComponent {
    constructor() { }
    ngOnInit() {
    }
};
EnviosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-envios',
        template: __webpack_require__(/*! raw-loader!./envios.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/_servicios/envios/envios.component.html"),
        styles: [__webpack_require__(/*! ./envios.component.scss */ "./src/app/components/_servicios/envios/envios.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EnviosComponent);



/***/ }),

/***/ "./src/app/components/_servicios/oficinas/oficinas.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/_servicios/oficinas/oficinas.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 67px;\n  padding-top: 40px;\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVqYW5kcm9wZXJlei9Eb2N1bWVudHMvc2ludGl0dWxvL2JsdWV4cHJlc3MvZ2l0L2JsdS9zcmMvYXBwL2NvbXBvbmVudHMvX3NlcnZpY2lvcy9vZmljaW5hcy9vZmljaW5hcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9fc2VydmljaW9zL29maWNpbmFzL29maWNpbmFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL19zZXJ2aWNpb3Mvb2ZpY2luYXMvb2ZpY2luYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA2N3B4O1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xufSIsIi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA2N3B4O1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/_servicios/oficinas/oficinas.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/_servicios/oficinas/oficinas.component.ts ***!
  \**********************************************************************/
/*! exports provided: OficinasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OficinasComponent", function() { return OficinasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OficinasComponent = class OficinasComponent {
    constructor() { }
    ngOnInit() {
    }
};
OficinasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oficinas',
        template: __webpack_require__(/*! raw-loader!./oficinas.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/_servicios/oficinas/oficinas.component.html"),
        styles: [__webpack_require__(/*! ./oficinas.component.scss */ "./src/app/components/_servicios/oficinas/oficinas.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], OficinasComponent);



/***/ }),

/***/ "./src/app/components/contacto/contacto.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/contacto/contacto.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contacto {\n  min-height: 100vh;\n  z-index: 1;\n}\n\n.mensaje {\n  height: 140px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVqYW5kcm9wZXJlei9Eb2N1bWVudHMvc2ludGl0dWxvL2JsdWV4cHJlc3MvZ2l0L2JsdS9zcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdG8vY29udGFjdG8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdG8vY29udGFjdG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURDQTtFQUNFLGFBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdG8vY29udGFjdG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFjdG8ge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgei1pbmRleDogMTtcbn1cbi5tZW5zYWplIHtcbiAgaGVpZ2h0OiAxNDBweDtcbn1cbiIsIiNjb250YWN0byB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB6LWluZGV4OiAxO1xufVxuXG4ubWVuc2FqZSB7XG4gIGhlaWdodDogMTQwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/contacto/contacto.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/contacto/contacto.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoComponent", function() { return ContactoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactoComponent = class ContactoComponent {
    constructor() {
        this.contacto = 'ejecutivos';
    }
    ngOnInit() {
    }
};
ContactoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contacto',
        template: __webpack_require__(/*! raw-loader!./contacto.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/contacto/contacto.component.html"),
        styles: [__webpack_require__(/*! ./contacto.component.scss */ "./src/app/components/contacto/contacto.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ContactoComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/components/info/info.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/info/info.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#info {\n  min-height: 100vh;\n}\n\n.opciones div a {\n  display: block;\n  box-sizing: border-box;\n  padding: 6px 4px;\n  border-left: none;\n  border: 1px solid #353535;\n  background: white;\n  cursor: pointer;\n}\n\n.opciones div a:hover {\n  color: #444444;\n  background: #f5f5f5;\n}\n\n.opciones div a.active {\n  background: black;\n  color: white;\n}\n\n.opciones div a:first-child {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-left-width: 1px;\n}\n\n.opciones div a:last-child {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVqYW5kcm9wZXJlei9Eb2N1bWVudHMvc2ludGl0dWxvL2JsdWV4cHJlc3MvZ2l0L2JsdS9zcmMvYXBwL2NvbXBvbmVudHMvaW5mby9pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2luZm8vaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0Y7O0FETUk7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNITjs7QURLTTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ0hSOztBREtNO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDSFI7O0FETU07RUFDRSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7QUNKUjs7QURNTTtFQUNFLDRCQUFBO0VBQ0EsK0JBQUE7QUNKUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5mby9pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2luZm8ge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLm9wY2lvbmVzIHtcbiAgZGl2IHtcblxuXG4gICAgYSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBwYWRkaW5nOiA2cHggNHB4O1xuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzUzNTM1O1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzQ0NDQ0NDtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAgIH1cbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cblxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgICBib3JkZXItbGVmdC13aWR0aDogMXB4O1xuICAgICAgfVxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiNpbmZvIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5vcGNpb25lcyBkaXYgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiA2cHggNHB4O1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM1MzUzNTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5vcGNpb25lcyBkaXYgYTpob3ZlciB7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xufVxuLm9wY2lvbmVzIGRpdiBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG59XG4ub3BjaW9uZXMgZGl2IGE6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcbn1cbi5vcGNpb25lcyBkaXYgYTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/info/info.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/info/info.component.ts ***!
  \***************************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InfoComponent = class InfoComponent {
    constructor() {
        this.section = 0;
    }
    ngOnInit() {
        this.changeTab(1);
    }
    changeTab(tab) {
        this.section = tab;
    }
};
InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info',
        template: __webpack_require__(/*! raw-loader!./info.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/info/info.component.html"),
        styles: [__webpack_require__(/*! ./info.component.scss */ "./src/app/components/info/info.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InfoComponent);



/***/ }),

/***/ "./src/app/components/maps/maps.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/maps/maps.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFwcy9tYXBzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/maps/maps.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/maps/maps.component.ts ***!
  \***************************************************/
/*! exports provided: MapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsComponent", function() { return MapsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MapsComponent = class MapsComponent {
    constructor() {
        this.mapType = 'terrain';
        this.disableDefaultUI = true;
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MapsComponent.prototype, "latitude", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MapsComponent.prototype, "longitude", void 0);
MapsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-maps',
        template: __webpack_require__(/*! raw-loader!./maps.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/maps/maps.component.html"),
        template: `
    <agm-map [latitude]='latitude' [longitude]='longitude' 
      [mapTypeId]='mapType' [zoom]="16" [disableDefaultUI]="disableDefaultUI">
    </agm-map>
  `,
        styles: ["agm-map { height: 400px; /* height is required */ width: 100%; }", __webpack_require__(/*! ./maps.component.scss */ "./src/app/components/maps/maps.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MapsComponent);



/***/ }),

/***/ "./src/app/components/nosotros/nosotros.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/nosotros/nosotros.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#nosotros {\n  min-height: 100vh;\n}\n\n@media screen and (max-width: 768px) {\n  img {\n    max-height: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVqYW5kcm9wZXJlei9Eb2N1bWVudHMvc2ludGl0dWxvL2JsdWV4cHJlc3MvZ2l0L2JsdS9zcmMvYXBwL2NvbXBvbmVudHMvbm9zb3Ryb3Mvbm9zb3Ryb3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbm9zb3Ryb3Mvbm9zb3Ryb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBREVFO0VBREY7SUFFSSxnQkFBQTtFQ0VGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25vc290cm9zL25vc290cm9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25vc290cm9zIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5pbWcge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIG1heC1oZWlnaHQ6IDUwcHg7XG4gIH1cbn1cbiIsIiNub3NvdHJvcyB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDUwcHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/nosotros/nosotros.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/nosotros/nosotros.component.ts ***!
  \***********************************************************/
/*! exports provided: NosotrosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NosotrosComponent", function() { return NosotrosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NosotrosComponent = class NosotrosComponent {
    constructor() { }
    ngOnInit() {
    }
};
NosotrosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nosotros',
        template: __webpack_require__(/*! raw-loader!./nosotros.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/nosotros/nosotros.component.html"),
        styles: [__webpack_require__(/*! ./nosotros.component.scss */ "./src/app/components/nosotros/nosotros.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NosotrosComponent);



/***/ }),

/***/ "./src/app/components/seguimiento/seguimiento.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/seguimiento/seguimiento.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#seguimiento {\n  min-height: 100vh;\n  background: lightblue;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  max-height: 100vh;\n  overflow: hidden;\n}\n\n.slides {\n  height: 100vh;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.slides .slide {\n  background-image: url(http://ecmetrics.com/es/wp-content/uploads/2016/01/avion-volando.jpg);\n  background-size: cover;\n  background-position: center center;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVqYW5kcm9wZXJlei9Eb2N1bWVudHMvc2ludGl0dWxvL2JsdWV4cHJlc3MvZ2l0L2JsdS9zcmMvYXBwL2NvbXBvbmVudHMvc2VndWltaWVudG8vc2VndWltaWVudG8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2VndWltaWVudG8vc2VndWltaWVudG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ0VGOztBREFFO0VBQ0UsMkZBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlZ3VpbWllbnRvL3NlZ3VpbWllbnRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NlZ3VpbWllbnRvIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zbGlkZXMge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG5cbiAgLnNsaWRlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cDovL2VjbWV0cmljcy5jb20vZXMvd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDEvYXZpb24tdm9sYW5kby5qcGcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICB9XG59XG4iLCIjc2VndWltaWVudG8ge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuLnNsaWRlcyAuc2xpZGUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cDovL2VjbWV0cmljcy5jb20vZXMvd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDEvYXZpb24tdm9sYW5kby5qcGcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/seguimiento/seguimiento.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/seguimiento/seguimiento.component.ts ***!
  \*****************************************************************/
/*! exports provided: SeguimientoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeguimientoComponent", function() { return SeguimientoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SeguimientoComponent = class SeguimientoComponent {
    constructor() { }
    ngOnInit() {
    }
};
SeguimientoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-seguimiento',
        template: __webpack_require__(/*! raw-loader!./seguimiento.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/seguimiento/seguimiento.component.html"),
        styles: [__webpack_require__(/*! ./seguimiento.component.scss */ "./src/app/components/seguimiento/seguimiento.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SeguimientoComponent);



/***/ }),

/***/ "./src/app/components/servicios/servicios.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/servicios/servicios.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#servicios {\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVqYW5kcm9wZXJlei9Eb2N1bWVudHMvc2ludGl0dWxvL2JsdWV4cHJlc3MvZ2l0L2JsdS9zcmMvYXBwL2NvbXBvbmVudHMvc2VydmljaW9zL3NlcnZpY2lvcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNpb3Mvc2VydmljaW9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VydmljaW9zL3NlcnZpY2lvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZXJ2aWNpb3Mge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cbiIsIiNzZXJ2aWNpb3Mge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/servicios/servicios.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/servicios/servicios.component.ts ***!
  \*************************************************************/
/*! exports provided: ServiciosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosComponent", function() { return ServiciosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../app.component */ "./src/app/app.component.ts");



let ServiciosComponent = class ServiciosComponent {
    constructor(app) {
        this.app = app;
    }
    ngOnInit() {
    }
    navigateTo(path) {
        this.app.navigateTo(path);
    }
};
ServiciosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-servicios',
        template: __webpack_require__(/*! raw-loader!./servicios.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/servicios/servicios.component.html"),
        styles: [__webpack_require__(/*! ./servicios.component.scss */ "./src/app/components/servicios/servicios.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
], ServiciosComponent);



/***/ }),

/***/ "./src/app/components/sucursales/sucursales.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/sucursales/sucursales.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sucursales {\n  margin-top: 100vh;\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVqYW5kcm9wZXJlei9Eb2N1bWVudHMvc2ludGl0dWxvL2JsdWV4cHJlc3MvZ2l0L2JsdS9zcmMvYXBwL2NvbXBvbmVudHMvc3VjdXJzYWxlcy9zdWN1cnNhbGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3N1Y3Vyc2FsZXMvc3VjdXJzYWxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VjdXJzYWxlcy9zdWN1cnNhbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3N1Y3Vyc2FsZXMge1xuICBtYXJnaW4tdG9wOiAxMDB2aDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG4iLCIjc3VjdXJzYWxlcyB7XG4gIG1hcmdpbi10b3A6IDEwMHZoO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/sucursales/sucursales.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/sucursales/sucursales.component.ts ***!
  \***************************************************************/
/*! exports provided: SucursalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SucursalesComponent", function() { return SucursalesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_sucursales_sucursales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/sucursales/sucursales.service */ "./src/app/services/sucursales/sucursales.service.ts");



let SucursalesComponent = class SucursalesComponent {
    constructor(suc) {
        this.suc = suc;
        this.filteredCountries = [];
        this.filteredComunas = [];
        this.placeholder = true;
        this.display = false;
        this.scuursalesSize = 0;
    }
    ngOnInit() {
        this.loadRegiones();
    }
    loadRegiones() {
        this.suc.getRegiones("").subscribe((response) => {
            this.regiones = response;
        }, (error) => {
        });
    }
    loadComunas(data) {
        this.suc.getComunas(data).subscribe((response) => {
            this.comunas = response;
        }, (error) => {
        });
    }
    loadSucursales(event) {
        let data = {
            "pais": "CL",
            "comuna": "Antofagasta"
        };
        this.suc.getSucursales(data).subscribe((response) => {
            this.placeholder = false;
            this.sucursales = response.agencies;
            this.scuursalesSize = this.sucursales.length;
        }, (error) => {
        });
    }
    loadMap(i) {
        console.log(i, this.sucursales[i]);
        this.display = true;
        this.sucursal = null;
        this.sucursal = this.sucursales[i];
    }
    loadResults() {
        this.placeholder = false;
    }
    click() {
        this.display = true;
    }
    filterBrands(event) {
        this.filteredCountries = [];
        for (let i = 0; i < this.regiones.length; i++) {
            let brand = this.regiones[i];
            if (brand.nombreRegion.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                this.filteredCountries.push(brand.nombreRegion);
            }
        }
    }
    filterComunas(event) {
        this.filteredComunas = [];
        for (let i = 0; i < this.comunas.length; i++) {
            let comuna = this.comunas[i];
            if (comuna.nombreComuna.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                this.filteredComunas.push(comuna.nombreComuna);
            }
        }
    }
    refreshComunas(event) {
        this.filteredComunas = [];
        for (let i = 0; i < this.regiones.length; i++) {
            let comuna = event;
            if (comuna.toLowerCase().indexOf(event.toLowerCase()) == 0) {
                // console.log('REFRESH COMUNAS', comuna);
                let data = {
                    "comuna": comuna
                };
                this.loadComunas(data);
            }
        }
    }
};
SucursalesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sucursales',
        template: __webpack_require__(/*! raw-loader!./sucursales.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sucursales/sucursales.component.html"),
        providers: [_services_sucursales_sucursales_service__WEBPACK_IMPORTED_MODULE_2__["SucursalesService"]],
        styles: [__webpack_require__(/*! ./sucursales.component.scss */ "./src/app/components/sucursales/sucursales.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_sucursales_sucursales_service__WEBPACK_IMPORTED_MODULE_2__["SucursalesService"]])
], SucursalesComponent);



/***/ }),

/***/ "./src/app/services/sucursales/sucursales.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/sucursales/sucursales.service.ts ***!
  \***********************************************************/
/*! exports provided: SucursalesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SucursalesService", function() { return SucursalesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let SucursalesService = class SucursalesService {
    constructor(http) {
        this.http = http;
        this.apiURL = 'http://localhost:8080/sucursalBL';
        this.country = {
            "pais": "CL"
        };
    }
    // httpOptions = {
    //             headers: new HttpHeaders({
    //                 'Content-Type': 'application/json',
    //             })
    //         };
    getRegiones(data) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.http.post(this.apiURL + '/regiones', this.country).subscribe((response) => {
                observer.next(response);
            }, (error) => {
                console.log("eerro");
            });
        });
    }
    getComunas(data) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.http.post(this.apiURL + '/comunas', data).subscribe((response) => {
                observer.next(response);
            }, (error) => {
                console.log("eerro");
            });
        });
    }
    getSucursales(data) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.http.post(this.apiURL + '/sucursal', data, httpOptions).subscribe((response) => {
                observer.next(response);
            }, (error) => {
                console.log("eerro");
            });
        });
    }
};
SucursalesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], SucursalesService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0/sockjs-node ./src/main.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/alejandroperez/Documents/sintitulo/bluexpress/git/blu/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node");
module.exports = __webpack_require__(/*! /Users/alejandroperez/Documents/sintitulo/bluexpress/git/blu/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map