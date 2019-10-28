let me = {
    name:"Vidal",
    surname:"De Los Santos",
    age:22,
    birthday:1996,
    Hobbies: ["play guitar","video games","programming","watch movies"]
};
//agregando propiedad a un objeto
me.address = "7 street";
//quitando propiedad a un objeto
delete me.name;

console.log(me);
console.log('age' in me);
console.log(me.hasOwnProperty("surname"));

//copiando un objeto
let user = {
    email:"Pepe@gmail.com",
    password:"******"
}
//creando copia de objeto
let user2 = Object.assign({},user);
console.log(user2);
