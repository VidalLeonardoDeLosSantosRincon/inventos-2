/*2. Pide una nota (número). Muestra la calificación según la nota:
0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente*/
function darNota(){
    let nota = prompt("Ingrese una nota");
    if(nota === null){
        console.log("Saliste de calificaciones");
    }
    else if (nota.trim()!==""){
        if(nota <3){
            alert("Nota insuficiente");
        }else if(nota <5){
            alert("Insuficiente");
        }else if(nota <6){
            alert("Suficiente");
        }else if(nota <7){
            alert("Bien");
        }else if(nota <9){
            alert("Notable");
        }else if(nota <10){
            alert("Sobresaliente");
        }else if(nota>10 || nota<0){
            alert("La nota debe estar entre 0 y 10");
        }
        else{
            alert("Nota invalida ingrese otra nota");
        }
    }else{
        alert("Debes ingresar una nota");
        darNota();
    }
}
darNota();

