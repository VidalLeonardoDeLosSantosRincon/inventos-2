

const promesa = new Promise((resolve,reject)=>{
    setTimeout(()=> {
        reject("Todo mal");
    },2000);
}); 

promesa.then((resp)=>console.log(resp))
.catch((error)=>console.log(error));