
function sayHello(name,callback){
    callback(name);
}

function greeting(name){
    console.log(`Hello ${name}`);
}

sayHello("Leonardo",greeting);

