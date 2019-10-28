//creando objeto cliente
function Cliente(_nombre,_saldo){
    this.nombre = _nombre;
    this.saldo = _saldo;
}
//creando nuevas instancias
const cliente1 = new Cliente("Vidal",4000);
const cliente2 = new Cliente("Jancer",50000);
const cliente3 = new Cliente("Javier",25000);

//sacando por consola
console.log(cliente1);
console.log(cliente2);
console.log(cliente3);

//agregando metodo al prototipo
Cliente.prototype.retirarSaldo = function(_retiro){
   return this.saldo -= _retiro;
}
console.log(cliente1.retirarSaldo(200));


//heredar prototipo
function Empresa(_nombre,_saldo,_telefono){
	this.nombre = _nombre;
	this.saldo = _saldo;
	this.telefono  = _telefono;
}
//heredando un prototipo
Empresa.protoype = Object.create(Cliente.prototype);
//nuevo objeto de tipo empresa
const empresa1 = new Empresa("Altice",30000000,"8294521232");

//retirando saldo con prototipo heredado
empresa1.retirarSaldo(1000000);

console.log(empresa1);