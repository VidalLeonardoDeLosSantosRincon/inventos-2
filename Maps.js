
const cliente = new Map();
cliente.set("nombre","Vidal");
cliente.set("apellido","De Los Santos");
cliente.set("pago",30000);

[...cliente].map((client)=>console.log(client));

