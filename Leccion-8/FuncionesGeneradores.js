
/**
 * Cada vez que llamo a esta funcion se jecuta una vez el while y se detiene
 * en el yield y me retorna el id, cada vez que la llamo aumenta el id 
 * @returns 
 * 
 */

function* generaId(){

  let id = 0;
  while(true){
    id++;
    yield id; //queda aca esperando hasta que se vuelva a llamar
    if(id === 10) //ojo con esta validacion debe ser especifica para que retorne el true en la propiedad next de la funcion generadora 
    return; 
  }

}

const gen = generaId();
///gen es un objeto del tipo Object [Generator] {} y estos tiene las propiedades
/// next 
console.log(gen.next()) 
console.log(gen.next()) 
console.log(gen.next()) 
console.log(gen.next()) 
console.log(gen.next()) 
console.log(gen.next()) 
console.log(gen.next()) 
console.log(gen.next()) 
console.log(gen.next()) 
console.log(gen.next()) 
console.log(gen.next()) 
/**
 * 
 * Retornoos de  la funcion next me retorna 
 { value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: 4, done: false }
{ value: 5, done: false }
{ value: 6, done: false }
{ value: 7, done: false }
{ value: 8, done: false }
{ value: 9, done: false }
{ value: 10, done: false }
{ value: 11, done: false }
 * 
 */