let alife = true;
let count =0;
while(alife){
    count++;
    console.log(`Loop: ${count}`);
    if(count===100){
        alife = false;
    }
}

let dead = true,
cnt =0;
do{
    cnt++;
    console.log(`Loop: ${cnt}`);
    if(cnt===100){
        dead=false;
    }
  
}while(dead);