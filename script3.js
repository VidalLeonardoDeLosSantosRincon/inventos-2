/*let user = ['""','""','""','""',];
let user1 = ['""','""','""','"',];
let user2 = ['asas','saas',"","asas",];
let user3 = ["asasas","sasas","asas","asas",];
let user4 = ['""',"asas",'""','""',];

let info = user2;
    if(info[0]!='""' && info[1]!='""' && info[2]!='""' && info[3]!='""' 
    || info[0]!='""' && info[1]!= '""' && info[2]=='""' && info[3]!='""'){
        console.log(`${info}`);
    }else{
        console.log("datos faltantes", info);
    }*/

let promesa = new Promise((resolve, reject)=>{

    let num = 10;
    
    if(num > 5) return resolve("Operacion exitosa!")
    else return reject("Ha ocurrido un error!");
});


promesa.then((res)=>console.log(res)).catch((error)=>console.log("Error",error));