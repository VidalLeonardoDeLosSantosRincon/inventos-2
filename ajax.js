let btnEmpleado = document.querySelector("#show-empleado");
let btnEmpleados = document.querySelector("#show-empleados");

//traer empleado
function traerEmplado(id){
 let xhr;
 window.XMLHttpRequest? xhr = new XMLHttpRequest()
 : xhr = new ActiveXObject("Microsoft.XMLHTTP");
 xhr.onreadystatechange = () =>{
     if(xhr.readyState==4 && xhr.status==200){
         let resp = JSON.parse(xhr.responseText);
     }
 };
 let empleado = {
     id
 };
 xhr.open("POST","Empleados.json",true);
 xhr.send();
}

//traer empleados
function traerEmplados(){
    let xhr;
    window.XMLHttpRequest? xhr = new XMLHttpRequest()
    : xhr = new ActiveXObject("Microsoft.XMLHTTP");
    xhr.onreadystatechange = () =>{
        if(xhr.readyState==4 && xhr.status==200){
            let resp = JSON.parse(xhr.responseText);
            console.log(resp);
        }
    };
    
    xhr.open("GET","Empleados.json",true);
    xhr.send();
   }

btnEmpleado.addEventListener("click",()=>{
    
});

btnEmpleados.addEventListener("click",traerEmplados);