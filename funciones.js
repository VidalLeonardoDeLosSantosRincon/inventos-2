//funciones estandar
function sumar(a,b){
    return a + b;
}
//console.log(sumar(1,3));

let otraSuma = function(a,b){
    return a**b;
}
//console.log(otraSuma(5,2));

//funciones dentro de otras
function resta(a){
  return function(b){
        return a-b;
    }
}
//console.log(resta(5)(2));

//funciones auto-invocadas
(function(){
    //console.log("Hola Mundo!");
})();

let multiplicacion = (function(a,b){
   return a*b;
})(2,2);

//console.log(multiplicacion);

//funciones constructoras
let pais = function(_nombre,_moneda){
 this.nombre = _nombre;
 this.moneda = _moneda;
}

let rd = new pais("Rep. Dom.","Peso");
//console.log(rd);

//apply() y call()
function add(a,b,c){
    return a+b+c;
}

let numeros = [2,3,4];
//usando call
let myAdd = add.call(undefined,numeros[0],numeros[1],numeros[2]);
//usando apply
let myAdd2 = add.apply(undefined,numeros);

console.log(myAdd);
console.log(myAdd2);