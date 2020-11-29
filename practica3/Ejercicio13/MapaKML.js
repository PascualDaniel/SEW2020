
// Obtener un archivo JSON con los datos de divisas

"use strict";


var mapaDinamicoGoogle = new Object();

function initMap(){
    var centro = {lat: 43.3672, lng: -5.8502}
    var mapaGeoposicionado = new google.maps.Map(document.getElementById("mapa"),{
        zoom:10,
        napTypeId: 'terrain',
        center:centro
    });
    mapaDinamicoGoogle.mapa = mapaGeoposicionado;
}

mapaDinamicoGoogle.initMap =initMap;

class Mapa {
    constructor() {

    }

   


    cargar(file) {
        var archivo = file[0];
        var imagenMapa = document.getElementById("captura");
        var lector = new FileReader();

        lector.onload = function (evento) {
            imagenMapa.innerText = lector.result;
        }
        lector.readAsText(archivo);
        lector.onloadend = function () {
            var kmlData = $(lector.result).find("Document");
            var placeMarks = $(kmlData).find("placemark");

            for (var i = 0; i < placeMarks.length; i++) {
                var coordenadas = $(placeMarks).find("coordinates")[i];
                var CoordenadasParseadas = $(coordenadas).text().replace(/\t/g, '').split('\n');
                const CoordenadasLinea = [];

                for (var j = 0; j < CoordenadasParseadas.length; j++) {
                    if (!(CoordenadasParseadas[j] === "")) {
                        var punto = new Object();
                        punto.lat = parseFloat(CoordenadasParseadas[j].split(',')[1]);
                        punto.lng = parseFloat(CoordenadasParseadas[j].split(',')[0]);
                        
                        CoordenadasLinea.push(punto);
                       
                    }
                   
                }
                const lineas = new google.maps.Polyline({
                    path: CoordenadasLinea,
                    geodesic: true,
                    strokeColor: "#FF0000",
                    strokeOpacity: 1.0,
                    strokeWheight: 2,

                });
                lineas.setMap(mapaDinamicoGoogle.mapa)
            }


        };



    }
}
var mapa = new Mapa();






