

function ejecutarAjax(){

 var request;    
 window.XMLHttpRequest ? request = new XMLHttpRequest() : request = new ActiveXObject("Microsoft.XMLHTTP");

 request.onreadystatechange = function(){

   if(request.readyState==4 &&  request.status==200){
    let datos = JSON.parse(request.responseText);
    console.log(datos);
   }  

 }

 request.open("GET","datos.json",true);
 request.send();

}


