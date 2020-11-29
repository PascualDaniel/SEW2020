"use strict";


class Peliculas {
    constructor() {
        this.nFilas = 0;
    }
    Ocultar() {
        $("#ocultable").hide();
    }
    Mostrar() {
        $("#ocultable").show();
    }
    accionModificar() {
        var text = $("#Cambiartext").val();
        this.modificar(text);

    }
    modificar(texto) {
        $("#textoModificable").text(texto);
    }
    accionAñadir() {
        var punt1 = $("#Num1").val();
        var punt2 = $("#Num2").val();
        var punt3 = $("#Num3").val();
        this.addATabla(punt1, punt2, punt3, this.nFilas);
        this.nFilas++;

    }
    addATabla(punt1, punt2, punt3, id) {
        $("#tabla").append("<tr id =\"" + id + "\"><th>" + id + "</th> <td class=\"sum\">" + punt1 + "</td> <td class=\"sum\">" + punt2 + "</td> <td class=\"sum\">" + punt3 + "</td> <td class=\"total\">0</td>  </tr> ");

    }
    sumarAction() {

        
        $('tbody tr').each(function () {
            var suma = 0
            $(this).find('.sum').each(function () {
                var n = $(this).text();
                if (!isNaN(n) && n.length !== 0) {
                    suma += parseFloat(n);
                }
            });
            //set the value of currents rows sum to the total-combat element in the current row
            $('.total', this).text(suma);
        });

        $('table thead th').each(function (i) {
            var total = 0;
            $('table tbody tr').each(function () {
                var value = parseInt($('td', this).eq(i).text());
                if (!isNaN(value)) {
                    total += value;
                }
            });
            $('table tfoot td').eq(i).text(total);

        });


        
    }







    removeAction() {
        this.remove("tabla")

    }
    remove(string) {
        $("#" + string).children().remove();

    }

    recorrerDocumento() {

        $("*", document.body).each(function () {
            var etiquetaPadre = $(this).parent().get(0).tagName;
            $(this).prepend(document.createTextNode("Etiqueta padre : <" + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName + "> valor: "));
        });
    }
}

var pe = new Peliculas();


