class Cliente{
    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
    imprimirSaldo(){
        return `Hola ${this.nombre} tu saldo es ${this.saldo}`;
    }
}
const cliente1 = new Cliente("Pedro",15000);
console.log(cliente1.imprimirSaldo());

class Empresa extends Cliente{
    constructor(nombre,saldo,telefono){
        super(nombre,saldo);
        this.telefono = telefono;
    }
}

const empresa1 = new Empresa("Altice",50000000,"8491254565");
console.log(empresa1.imprimirSaldo());