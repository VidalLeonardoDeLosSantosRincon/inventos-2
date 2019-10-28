let nombre = "Juan";
let apellido = "Perez";
let sueldo = 25000;
const usuario = new Set();
usuario.add(nombre);
usuario.add(apellido);
usuario.add(sueldo);

[...usuario].map((user)=>console.log(user));


let numeros = [1,2,3,4,5,1,2,3,4];
let nums = new Set(numeros);
console.log(nums);