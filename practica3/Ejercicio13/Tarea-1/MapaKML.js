
// Obtener un archivo JSON con los datos de divisas

"use strict";



class Mapa {
    constructor() {
        this.info;
        this.map;
        this.rutas;
    }

    initialize() {

       var centro = {lat: 43.3672, lng: -5.8502} ;
       var mapOptions = {
           zoom:10,
           napTypeId: 'terrain',
           center:centro
       };
       this.map = new google.maps.Map(document.getElementById('mapa'), mapOptions);

       
   }


    cargar(file) {
        var archivo = file[0];
       
        var lector = new FileReader();

        
        lector.onload = function (evento) {
          
        }
        lector.readAsText(archivo);
        var mapaLocal = this.map;
        lector.onloadend = function () {
            var jsonData = $(lector.result).find("Document");
            var placeMarks = $(jsonData).find("placemark");

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
                    map:mapaLocal

                });
                lineas.setMap(mapaLocal)
            }


        };
    


    }
}
var mapaLoader = new Mapa();






