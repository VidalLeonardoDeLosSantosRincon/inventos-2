let text = "Que bueno es poder vivir tranquilo";
let text2="";

for(i=0; i<text.length; i++){
    
    if(text[i].toLocaleLowerCase()!="a" && text[i].toLocaleLowerCase()!="e" && text[i].toLocaleLowerCase()!="i"
     && text[i].toLocaleLowerCase()!="o" && text[i].toLocaleLowerCase()!="u"){
         if(text[i].trim()==""){   
           text2 += "_&&_";  
         }else{
            text2 += `${text[i]}`;
         }

    }else if(text[i].toLocaleLowerCase()=="a"){
        if(text[i]=="a" ){
            text2 += text[i].replace("a","1");
        }else{
            text2 += text[i].replace("A","1");
        } 
    }else if (text[i].toLocaleLowerCase()=="e"){
        if(text[i]=="e"){
            text2 += text[i].replace("e","2");
        }else{
            text2 += text[i].replace("E","2");
        }
    }else if (text[i].toLocaleLowerCase()=="i"){
        if(text[i]=="i"){
            text2 += text[i].replace("i","3");
        }else{
            text2 += text[i].replace("I","3");
        }
    }else if (text[i].toLocaleLowerCase()=="o"){
        if(text[i]=="o"){
            text2 += text[i].replace("o","4");
        }else{
            text2 += text[i].replace("O","4");
        }  
    }else if (text[i].toLocaleLowerCase()=="u"){
        if(text[i]=="u"){
            text2 += text[i].replace("u","5");
        }else{
            text2 += text[i].replace("U","5");
        }   
    }

   if((i+1)==text.length){
       console.log(text2);
   }
    
} 



































































/*let fn =  function hey(){
    return ()=>{
        console.log( 2+2);
    };
};*/

/*
console.log(btoa(fn));
console.log(atob(btoa(fn)));
eval(atob(btoa(fn)));
hey()();*/

/*
let texted = btoa("ZnVuY3Rpb24gaGV5KCl7DQogICAgcmV0dXJuKCk9PnsNCiAgICAgICAgY29uc29sZVsnbG9nJ10oMHgyKzB4Mik7DQogICAgfTsNCn0=");
console.log(texted);
console.log(atob(atob(texted)));
eval(atob(atob(texted)));
hey()();
*/
/*let cantidad=50;
var saludo ="The silence is golden";
for(i=0; i<cantidad;i++){

 saludo = btoa(saludo);
 console.log(saludo);

 if((i+1)==cantidad){

    for(j=0;j<cantidad;j++){
      saludo = atob(saludo);
      console.log(saludo);


    }

 }

}*/








