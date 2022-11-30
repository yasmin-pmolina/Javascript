/**
 * 
 * 
 * Funciones Factory
 * Nos sirven para crear objetos de forma automatizada y no de froma manual uno auno 
 */

///Ejemplo una funcion Factory
const crearPersona = (nombre, edad, isDeveloper)  => {
   return {
    nombre,
    edad,
    isDeveloper,
    saludo : ()=>{
      console.log("Hola!")
    }
   }
}

const nuevaPersona = crearPersona("Juan",34,true);

nuevaPersona.saludo();
console.log(nuevaPersona.edad)