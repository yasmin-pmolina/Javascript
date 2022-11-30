
/**
 *  Este archivo debe calcular el factorial de 10 utilizando un bucle while, 
 *  una bifurcación if y una sentencia break
 */
 let factorial = 10;
 let acumulado = 1; 
 
 console.log(`Calculo del factorial de: ${factorial}!, utilizando el bucle while, if y el break`);
 
 while(factorial){
   acumulado *= factorial;
   factorial--;

   if(!factorial) break;
 }
 console.log(`Resultado: ${acumulado}`);
 