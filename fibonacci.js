
let value = 10,
num = value,
num2 = num + 1,
num3,
num4,
fibo = [num,num2],
limit = num + 5;

for(let n = num; n<limit;n++){
    num3 = num + num2;
    num4 = num3+ num2;
    fibo.push(num3,num4);
    num = num3;
    num2 = num4;
}

console.log(fibo);
