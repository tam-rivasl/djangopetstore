/* funcion seguimiento */
function buscarSeguimiento() {
    debugger;
    var toastElList = [].slice.call(document.querySelectorAll('.toast'));
    var toastList = toastElList.map(function(toastEl) {
        return new bootstrap.Toast(toastEl)
    });
    toastList.forEach(toast => toast.show());
}

/* evento que pone negro en el formulario  */
$(".form-control").on("keypress", function() {
    $(this).css("background-color", "#111111");
    $(this).css("color", "#ffffff");
});



/* evento ventana -no funciona-*/
$(".card.btn.").on("click", function(e) {
    e.preventDefault();
    var w = window.open("", "popupWindow", "width=600, height=400, scrollbars=yes");
    var $w = $(w.document.body);
    $w.html("Producto agregado al carrito");
});



/* api de regiones */

//ESTO SE EJECUTA AL INICIAR LA PAGINA
$("#SelectComunas").hide(); //OCULTA EL SELECT DE COMUNAS
$("#LblComunas").hide(); //OCULTA EL LABEL DE COMUNAS
//ESTAN OCULTOS PARA QUE NO SE VEAN SIN DATOS, YA QUE AUN NO SE SELECCIONA UNA REGION
//LUEGO SE EJECUTA UN AJAX, SIRVE PARA EJECUTAR FUNCIONES EXTERNAS
//GUARDAR DATOS, EDITAR DATOS, BORRAR DATOS, BUSCAR DATOS, BUSCAR ALGUN DATO ESPEFICICO, ETC ETC. ESO DEPENDE DE LA API
$.ajax({ //AQUI SE INICIA LA FUNCION PARA LISTAR REGIONES, EN EL FUTURO SI TE DA ERROR CON EL $ EN ALGUN PROYECTO, ES PORQUE NO ESTAS LLAMANDO JQUERY
    url: 'https://apis.digital.gob.cl/dpa/regiones', //ESTA ES LA URL DE LA API
    dataType: 'json', //AQUI VA EL TIPO DE DATO QUE ESPERAS RECIBIR
    type: 'GET', //AQUI VA EL METODO DE LA API, PUEDE SER POST, PUT, GET O DELETE , DEPENDE DE LO QUE NECESITES, EN ESTE CASO ES UN GET PORQUE TRAIGO DATOS
    success: function(response) { // EL SUCCESS INDICA QUE SE REALIZO CORRECTAMENTE LA PETICION, LOS RESULTADOS VIENEN EN EL RESPONSE
        //EL RESPONSE VARIA DEPENDIENDO DE LA API, EN ESTE CASO ES UN ARREGLO CON LAS REGIONES
        response.forEach(function(valor_actual) { //RECORRO EL ARREGLO CON UN FOREACH
            var nombre_region = valor_actual.nombre; //OBTENGO EL NOMBRE
            var codigo_region = valor_actual.codigo; //OBTENGO EL CODIGO
            $("#SelectRegiones").append("<option value=" + codigo_region + ">" + nombre_region + "</option>"); // AGREGO LAS OPCIONES AL SELECT
        });
    }
});


//EN ESTA PARTE SE CREA LA FUNCION PERO NO SE EJECUTA YA QUE NO SE ESTA LLAMANDO
//SE EJECUTARA CUANDO SE CAMBIE EL VALOR DEL SELECT DE REGIONES
function cambiar_comunas(region) { // region ES EL SELECT COMPLETO

    var id_region = region.value; //AQUI SOLO OBTENGO EL VALOR SELECCIONADO
    if (id_region !== null && id_region !== "") { //REVISO POR PRECAUCION QUE NO VENGA VACIO
        var selectobject = document.getElementById("SelectComunas"); //SELECCIONO EL SELECT DE COMUNAS
        $("#SelectComunas").show(); //MUESTRO EL SELECT DE COMUNAS
        $("#LblComunas").show(); //MUESTRO EL LABEL DE COMUNAS
        //EN ESTA FUNCION ELIMINO LAS OPCIONES ANTERIORES PERO DEJO LA OPCION POR DEFAULT
        var i, L = selectobject.options.length - 1;
        for (i = L; i >= 1; i--) {
            selectobject.remove(i);
        }
        //Y VUELVO A EJECUTAR UNA API
        $.ajax({
            url: 'https://apis.digital.gob.cl/dpa/regiones/' + id_region + '/comunas', //EN ESTE CASO ENVIO EL CODIGO DE REGION, PARA QUE ME TRAIGA LAS COMUNAS DE ESA REGION
            dataType: 'json',
            type: 'GET',
            success: function(response) {
                //AQUI SE HACE LO MISMO QUE EN EL DE REGIONES, SE CARGAN LAS COMUNAS CON SU NOMBRE Y CODIGO
                response.forEach(function(valor_actual) {
                    var nombre_comuna = valor_actual.nombre;
                    var codigo_comuna = valor_actual.codigo;
                    $("#SelectComunas").append("<option value=" + codigo_comuna + ">" + nombre_comuna + "</option>");
                });
                //FINALMENTE SE SELECCIONA LA OPCION POR DEFECTO PARA QUE NO QUEDE FEO
                $('#SelectComunas option').prop('selected', function() {
                    return this.defaultSelected;
                });
            }
        });
    }
}

/* ligthbox de donaciones */

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
/* baguetteBox.run('.tz-gallery'); */