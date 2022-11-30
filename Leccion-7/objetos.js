//Crea un archivo llamado objetos.js que contenga las siguientes líneas

//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
let me = {
  nombre: "Yasmin", 
  apellido: "Molina", 
  edad: 33, 
  altura: 1.55, 
  eresDesarrollador: true
}
//- Una variable que obtenga tu edad a partir del objeto anterior
const edad = me.edad;
//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
let meAndFriend = [
    new Object(me)
   ,
  {
    nombre: "Edy", 
    apellido: "Gonzales", 
    edad: 32, 
    altura: 1.57, 
    eresDesarrollador: false
  },
  {
    nombre: "Daniela", 
    apellido: "Ramirez", 
    edad: 34, 
    altura: 1.54, 
    eresDesarrollador: false
  }
];

console.log(`\n meAndFriend`, meAndFriend); 
//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

meAndFriend.sort( (a,b) => { return  b.edad - a.edad });
console.log(`\n meAndFriend sort`, meAndFriend); 
