
// Obtener un archivo JSON con los datos de divisas

"use strict";
class  Cargador {
    constructor() {
        this.cargar();


    }


    cargar(){
        if (window.File && window.FileReader && window.FileList && window.Blob) 
        {  
            document.write("<p>Este navegador soporta el API File </p>");
        }
           else document.write("<p>¡¡¡ Este navegador NO soporta el API File y este programa puede no funcionar correctamente !!!</p>");
       

    }

    metodo(files){

    var archivo = files[0];
    $("#name").text("Nombre del archivo: " + archivo.name );
    $("#size").text("Tamaño del archivo: " + archivo.size );
    $("#type").text("Tipo del archivo: " + archivo.type );
    $("#date").text("Fecha de la última modificación: " + archivo.lastModifiedDate );
    $("#content").text("Contenido del archivo de texto:");

    //Solamente admite archivos de tipo texto
    var tipoTexto1 = 'text/plain';
    var tipoTexto2 = 'text/json';
    var tipoTexto3 = 'text/xml';
    alert(archivo.type);
    if (archivo.type.match(tipoTexto1) || archivo.type.match(tipoTexto2)||archivo.type.match(tipoTexto3)) 
       {
        var lector = new FileReader();
        lector.onload = function (evento) {
          //El evento "onload" se lleva a cabo cada vez que se completa con éxito una operación de lectura
          //La propiedad "result" es donde se almacena el contenido del archivo
          //Esta propiedad solamente es válida cuando se termina la operación de lectura
          $("#contenido").text( lector.result)
          }      
        lector.readAsText(archivo);
        }
    else {
        $("#contenido").text( "Error:  Archivo no válido");
        }   

        
    }

    
}
var car = new Cargador();

