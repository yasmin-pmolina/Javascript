export class Persona{

  /**
   * PROPIEDADES O METODOS PRIVADOS:
   * SE UTILIZA EL IDENTIFICADOR #, debe ir en todo lugar que se invoque la variable
   * Y SOLO SE PUEDE ACCEDER DESDE DENTRO DE LA CLASE
   * 
   * PROPIEDADES O METODOS PROTEGIDOS:
   * SE UTILIZA EL IDENTIFICADOR _, SE PUEDE ACCEDER DESDE DENTRO 
   * DE LA CLASE Y DESDE CLASE DESCENDIENTES 
   * 
   */

  #nombre; //PRIVADOS
  #edad; //PRIVADOS
  isDeveloper;
  _genero;//PROTEGIDOS

  constructor(nombre, edad, isdeveloper, genero){
    this.#nombre = nombre;
    this.#edad = edad;
    this.isdeveloper = isdeveloper;
    this._genero = genero
  }

  saludo(){
    console.log("Hola ",this.nombre, "! desde la clase persona")
  }

  getEdad(){
  return this.#edad;
  }

  setEdad(edad){
     this.#edad = edad;
  }

  //metodo privados
  #calcular_Sueldo(){

  }

//metodo protegido
  _getMonedadePago(){

  }

}

//const nueva = new Persona("Yasmin", 33, true);
//nueva.saludo();

//console.log("Hola desde afuera",nueva.nombre, "!")
//console.log("desde afuera",nueva._genero, "!")

/**
 * 
 * intanceof pregunta si una clase es tipo claseXXX
 */

//console.log(nueva instanceof Persona)

/**
 * 
 * Getter -> nos permite obtener valores de atributos privados o protegidos
 * Setter -> nos permite acceder valores de atributos privados o protegidos
 */

 