
function getColor(){
    let color = Number(prompt(`Ingresa un color:
    1) Rojo
    2) Verde
    3) Azul
    4) Negro 
    5) Amarillo
    `));


    switch(color){
        case 1:
            console.log("Rojo");
            getColor();
            break;
        case 2:
            console.log("Verde");
            getColor();
            break;
        case 3:
            console.log("Azul");
            getColor();
            break;
        case 4:
            console.log("Negro");
            getColor();
            break;
        case 5:
            console.log("Amarillo");
            getColor();
            break;
        default:
            console.log("Opcion invalida");
            break;
    }

}