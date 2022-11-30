
let factorial = 10;
let acumulado = 1; 

console.log(`Calculo del factorial de: ${factorial}!, utilizando el bucle while`);

while(factorial > 1){
  acumulado *= factorial;
  factorial--;
}
console.log(`Resultado: ${acumulado}`);
