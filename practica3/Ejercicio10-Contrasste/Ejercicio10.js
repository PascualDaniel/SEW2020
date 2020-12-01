
// Obtener un archivo JSON con los datos de divisas

"use strict";
class  Monedas {
    constructor() {
        this.access_key = "22d07357e525a35ae48715adeb795bae";
        this.currencies = "USD,EUR,JPY,GBP,CHF";
        this.format = 1;
        this.url = this.getUrl();


        this.usd = 1.0;
        this.eur = 1.0;
        this.jpy = 1.0;
        this.gbp = 1.0;
        this.chf = 1.0;


    }


    accionBoton() {
        this.cargarDatos();
        var cantidad= $("#in").val();
        var desdeMoneda = $("#TipoMonedaEntrada").val();
        var aMoneda = $("#TipoMonedaSalida").val();


        var calculo = this.calcular(cantidad,this.getCoinValue(desdeMoneda),this.getCoinValue(aMoneda));
        $("#OutNum").val(calculo);
     


    }

    getCoinValue(code){
        switch(code){
            case 'USD':
                return parseFloat(this.usd);
            case 'EUR':
                return parseFloat(this.eur);
            case 'JPY':
                return parseFloat (this.jpy);
            case 'GBP':
                return parseFloat(this.gbp);
            case 'CHF':
                return parseFloat(this.chf);
            default:
                return 1;    
        }

    }

    // "live" endpoint - request the most recent exchange rate data
    //http://api.currencylayer.com/live
    //? access_key = YOUR_ACCESS_KEY
    //& currencies = USD,AUD,CAD,PLN,MXN
    //& format = 1
    // Daniel, click on the URL above to get the most recent exchange
    // rates for USD, AUD, CAD, PLN and MXN
    getUrl() {

        return "http://api.currencylayer.com/live?access_key=" + this.access_key + "&currencies=" + this.currencies + "&format=" + this.format;
    }

  
    cargarDatos() {

    
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function (datos) {
                monedas.usd =  parseFloat(datos.quotes.USDUSD);
                monedas.eur = parseFloat( datos.quotes.USDEUR);
                monedas.jpy = parseFloat( datos.quotes.USDJPY);
                monedas.gbp =  parseFloat(datos.quotes.USDGBP);
                monedas.chf = parseFloat( datos.quotes.USDCHF);
             
            },
            error: function () {
                $("#in").val("Error");
                $("#OutNum").val("Error");
            }
        });

        $("#prueba").val(this.gbp);
    }
    calcular(cantidad,aUSD,desdeUSD){
        return parseFloat( cantidad)/parseFloat(aUSD)*parseFloat(desdeUSD);
    }
}
var monedas = new Monedas();
