


class Puzzle {
    constructor() {


    }

    metodoBoton(files) {
        this.cargar(files);

    }
    invert() {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var img = document.getElementById("imagenCargada");
        canvas.width=document.getElementById("imagenCargada").width;
        canvas.height=document.getElementById("imagenCargada").height;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        for (var i = 0; i < data.length; i += 4) {
            data[i]     = 255 - data[i];     // red
            data[i + 1] = 255 - data[i + 1]; // green
            data[i + 2] = 255 - data[i + 2]; // blue
        }
        ctx.putImageData(imageData, 0, 0);
    }
    original() {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var img = document.getElementById("imagenCargada");
        canvas.width=document.getElementById("imagenCargada").width;
        canvas.height=document.getElementById("imagenCargada").height;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    grayscale() {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var img = document.getElementById("imagenCargada");
        canvas.width=document.getElementById("imagenCargada").width;
        canvas.height=document.getElementById("imagenCargada").height;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        for (var i = 0; i < data.length; i += 4) {
            var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
            data[i]     = avg; // red
            data[i + 1] = avg; // green
            data[i + 2] = avg; // blue
        }
        ctx.putImageData(imageData, 0, 0);
    };

    fullScreen(){
        var elem = document.getElementById("canvas");
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
    }


    cargar(files){
        document.getElementById("imagenDiv").innerHTML="<img src=\"\" alt=\"Imagen sin cargar\" id=\"imagenCargada\"></img>";
        this.cargarImagen(files);
    }



    cargarImagen(files) {


        var archivo = files[0];

        var tipo = 'image.*';

        if (archivo.type.match(tipo)) {

            var reader = new FileReader();
            reader.onload = function () {
               
                document.getElementById("imagenCargada").src = reader.result;

            

                }
            
             reader.readAsDataURL(archivo);

        }
        else {
            $("#contenido").text("Error:  Archivo no válido");

        }
    }
}




var puzzle = new Puzzle();


