export function suma(...propiedads){
  let suma = 0;
  propiedads.forEach( valor => { return suma += valor })
  return suma;
}

export function multiplica(...propiedads){
  let resul = 1;
  propiedads.forEach( valor => { return resul *= valor })
  return resul;
}

export function factorial(factorial){
  let acumulado = 1; 

  while(factorial){
    acumulado *= factorial;
    factorial--;
 
    if(!factorial) break;
  }
  return acumulado;
}

 export const PI = 3.141592;