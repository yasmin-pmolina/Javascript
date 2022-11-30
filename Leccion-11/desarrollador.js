import {Persona} from "./persona.js"

class Desarrollador extends Persona{

  lenguaje; 

 constructor(nombre,edad, isdesarrollador, lenguaje){
  
  super(nombre,edad,isdesarrollador)
  this.lenguaje = lenguaje
 }

 saludo(){
  console.log("Sobre escribimos el metodo saludo de la clase persona")
 }


}
//Como no tenemos el c9onstructor de  Desarrollador toma el de persona 
const nuveDesarrollador = new Desarrollador("Yasmin", 33, true,"c")

nuveDesarrollador.saludo()