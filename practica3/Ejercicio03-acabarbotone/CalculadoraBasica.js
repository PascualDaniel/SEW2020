"use strict";
class Calculadora {
    constructor(){
    	this.vPantalla = "0";//valor de la pantalla actual
    	this.memoria="0";
	}
    addElement(x) {
        if(this.vPantalla == "0"){
            this.vPantalla = x;
        }else{
         this.vPantalla += x;
        }
        document.getElementById('pantalla').innerHTML=this.vPantalla;
    }
    calc(){
         try{
            this.vPantalla = eval(this.vPantalla);
            document.getElementById('pantalla').innerHTML =this.vPantalla;
         }catch(err){
            this.vPantalla = "Error: "+err;
            document.getElementById('pantalla').innerHTML =this.vPantalla;
        }
    }
    limpiar(){
        try{    
            this.vPantalla = "0";
            document.getElementById('pantalla').innerHTML =this.vPantalla;
        }catch(err){
            this.vPantalla = "Error: "+err;
            document.getElementById('pantalla').innerHTML =this.vPantalla;
        }
    }
    //M+
    sumarMemoria(){
        try{    
            this.memoria = eval(this.memoria+" + "+ this.vPantalla);

        }catch(err){
            this.vPantalla = "Error: "+err;
            document.getElementById('pantalla').innerHTML =this.vPantalla;
        }
    }
    //M-
    restarMemoria(){
        try{    
            this.memoria = eval(this.memoria+" - "+ this.vPantalla);

        }catch(err){
            this.vPantalla = "Error: "+err;
            document.getElementById('pantalla').innerHTML =this.vPantalla;
        }
    }
    //MRC
    sacarMemoria(){

        this.vPantalla = ""+ this.memoria;
        document.getElementById('pantalla').innerHTML =this.vPantalla;
         
    }
}

var calculadora = new Calculadora();