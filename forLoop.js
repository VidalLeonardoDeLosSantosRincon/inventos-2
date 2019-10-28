
const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

for(let i=0; i<12;i++) console.log(`${i+1}) ${meses[i]}`);
let count =0;
for(let m of meses) console.log(`${count+=1}) ${m}`);
for(let m in meses) console.log(`${Number(m)+1}) ${meses[m]}`);
count=0;
meses.forEach((mes) => console.log(`${count+=1}) ${mes}`));
count=0;
meses.map((mes)=>console.log(`${count+=1}) ${mes}`));
