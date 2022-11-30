
let factorial = 10;
let acumulado = 1; 

console.log(`Calculo del factorial de: ${factorial}!, utilizando el bucle for`);

for (factorial = 10; factorial > 1 ; factorial--) {
  acumulado *= factorial;
}

console.log(`Resultado: ${acumulado}`);
