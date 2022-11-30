console.log("start ...");

/* 

Datos primitivos: 

Javascript es un lenguaje de tipado inferido, es decir el valor guardo es el
que asigna el tipo a la variable, por lo cual si cambia el tipo de dato de la variable
puede cambiar tambien el tipo. 

Booleanos: true, false 
Sin asignacion de memoria: undefined
Con asignacion de memoria pero vacio: null 

null, undefined, false, 0 => todos son falsy, es decir que
if(!null) if(!undefined) if(!0) if(!false), todos son tipos diferentes 
de datos pero todos son falsos

string: "cadenas de caracteres"
boleanos: true
numerico: 0,1,2,3,4,5,6

Se consideran verdaderos menos el valor 0 numerico

para saber el tipo de dato inferido en javascript usamos la palabra reservada 
typeof

*/

console.log(typeof "Hola mundo")//string
console.log(typeof 123)//number
console.log(typeof false) //boolean
console.log(typeof null) //Objeto
console.log(typeof undefined)//undefined

let obj = {
  name: "Yasmin",

}
console.log(typeof obj)//function

const fun = () => { console.log("hola") }
console.log(typeof fun)//function
/*
  
   NOTACION:

   ; delimitar el final de una linea
   . se utiliza en los objetos, para acceder a los atributos 
   [] indican listas, arreglos o arrays
   {} objetos, funciones y structuras de control
   () funciones
   

*/

/*
  Listas arrays o arreglos
*/
const lista1 = ["uno", "dos", "tres", "cuatro"]
const lista2 = new Array(...lista1, "cinco", "seis");
lista2.push("siete")

const lista3 = new Array(10)

let listas = {
  Lista_uno: lista1,
  lista_dos: lista2,
  lista_tres: lista3
}

console.table(listas)

console.log(lista1)
console.log(lista2)
console.log(lista3)


/**
 * 
 *   Objetos
 * 
 * 
 * 
 */

let movil = {
  measure: {
    height: 8,
    wide: 15,
    depth: 0.5
  },
  brand: "samsung",
  capacidad:{
    ram: 3,
    rom: 120
  },
  contactos: ["Maria", "Edymar", "Janeth", "Oso"]
}

movil.contactos.push("Jessie")
movil.contactos.push("Alejandra")
movil.mynumber = 1124082020;
movil["new-atributo"] = "Nuevo atributo"
let addAtributo = "New-forma";

console.log(movil)


/**
 *  Fechas
 * 
 *  existen librerias de apoyo moment.js es una de ellas
 * 
 * 
 */

let fecha = new Date();
console.info(`Fecha actual ${fecha}`);

const fecha_2 = new Date(1989, 10, 03, 10)
console.info(`Fecha actual ${fecha_2}`);

/**
 * 
 * Bifurcaciones
 *  
 * if()
 * switch(number){
 * case 1:
 *  break;
 * case 2:
 *  break;
 * }
 * 
 */


/**
 *  Comparaciones
 *  
 * 
 * == "Igualdad leve" === igualdad fuerte
 * la diferencia es == compara solo el valor 
 * === compara valor y tipo de variable 
 */

let a = 5;
let b = '5'

if(a === b) console.log("son iguales en valor y tipo")
else if( a == b) console.log("son iguales en valor")

if(a !== b) console.log("son diferentes en valor y/o tipo")
else if( a != b) console.log("son diferentes en valor")

/**
 * 
 *  Bucles
 * 
 * 
 * 
 * 
 */
  
for (let index = 0; index < lista1.length; index++) {
  const element = lista1[index];
  console.log(`Lista iterada con el for: ${element}`)
}
console.log(`\n Lista iterada con el for-of:`)
for (const object of lista2) {
  console.log(`${object}`)
}
console.log(`\n Lista iterada con el for'in:`)
for (const key in movil) {
  if (Object.hasOwnProperty.call(movil, key)) {
    const element = movil[key];
    console.log(`key: ${key}     Valor: ${JSON.stringify(element)}`)
  }
}
console.log(`\n Lista iterada con el forEach:`)
lista2.forEach(element => {
  console.log(`${element}`)
});

/**
 *  while y do while
 * 
 * 
 */

let condition = true;

while (condition) {
  condition = false;
}

do {
  
} while (condition);

/**
 *  Formas de controlar un ciclo
 *  breack y continue
 *  etiquetas no es la mejor practica pero puede ser util en algun momento
 * 
 */
let unidades = 0; 
let decenas  = 0; 
let flag = true;


buclewhilDecenas: while(true && flag){
 buclewhileUnidades: while(true && flag){
  console.log(`El numero actual unidades: ${unidades} decenas :${decenas}`)
  unidades++;
  if(unidades === 10){
    unidades = 0;
    break buclewhileUnidades;
  }
  if(decenas === 2){
    unidades = 0;
    break buclewhilDecenas;
  }
 } 
 decenas++;

 if(decenas == 3) flag = false;
}

 /**
  * 
  * En los string cuando usamos `` permite saltos de linea
  * directamente del editor de texto y permite usar variables
  * por loq ue usa mucho en plantillas HTML
  * 
  * 
  */
 
 const Titulo = "mi primero plantilla html con javascritp"
 let parrafo = `Este parrafo nos sirve de ejemplo para poder probar expresiones regulares 
 y aprender como manejar las cadenas de texto. los metodos disponibles y los posibles atajos
 `;
 let html = `<html>
  <h1>Pagina web ${Titulo}</h1>
  <h2>Ejemplo de uso de (\`) o quotation</h2>
  <p>${parrafo} <p>
</html>`;

console.log(`${html} string de longitud ${html.length} `);

/**
 *  manejo de strings
 * 
 */
//Obtener trozos
 console.log(` slice de string  ${html.slice(10, 20)} `);

 console.log(` substring de string  ${html.substring(10, 20)} `);

 //reemplazar
 let newHtml = html.replace("h1", "h2");
  newHtml = newHtml.replace("h1", "h2");

///si no usamos expresiones regualtes solo reemplaza la primera instancia 
///por eso lo invocamos dos veces
///Las expresiones regulares nos permiten hacer busquedas avanzadas dentro del texto


 console.log(`\n Cambio h1 por h2 ${newHtml} `);

 newHtml = newHtml.replace(/h2/g, "h3");

 console.log(`\n Cambio h2 por h3 con exxpresion regular ${newHtml} `);


 console.log(`\n Buscamos el fragmento los en el texto ${newHtml.match(/los/g)} `);
 console.log(`\n Buscamos el fragmento h3 en el texto ${newHtml.match(/h3/g)} `);

//Retorna true o false si esta por lo menos una vez
 console.log(`\n Buscamos el fragmento h3 en el texto ${newHtml.includes("h3")} `);

///NOTA: toma en cuenta los espacios en blanco, mayusculas...
 console.log(`\n El texto inica con  <html> ${newHtml.startsWith("<html>")} `);
///NOTA: toma en cuenta los espacios en blanco, mayusculas...
 console.log(`\n  El texto termina con </html>" ${newHtml.endsWith("</html>")}`);


 /**
  *  Operaciones numericas 
  * 
  *  por defecto las variables numericas usan todos los decimales disponibles 
  *  para indicar una precision se debe usar la libreria Math round para elegir
  *  la precision 
  */

 let numa = 3.1;
 let numb = 4.1;
 let sum = numa + numb;
 let sumMath = Math.round((sum)*100)/100;
 //como no cuadran los bytes nos da el maximo de numeros decimales del sistema
 console.log(`\n Precision por defecto: `, sum,'Type:',typeof sum );
 console.log(` Precision con Math: `, sumMath, 'Type:',typeof sumMath);// se mantiene como num

let numFixed = sum.toFixed(4);//lo transforma a un estring y nos redondea los decimales
 console.log(` Precision con Math: `, numFixed, 'Type:' ,typeof numFixed);

 nume = 1245645.234743;
 let numPrecision = nume.toPrecision(4);//1.246e+6 Type: string
 console.log(` Precision toPrecision4 : `, numPrecision, 'Type:' ,typeof numPrecision);
 numPrecision = nume.toPrecision(10);//1245645.235 Type: string
 console.log(` Precision toPrecision 10 : `, numPrecision, 'Type:' ,typeof numPrecision);
 numPrecision = nume.toPrecision(1);//1e+6 Type: string
 console.log(` Precision toPrecision 1 : `, numPrecision, 'Type:' ,typeof numPrecision);
 numPrecision = nume.toPrecision(12);// 1245645.23474 Type: string
 console.log(` Precision toPrecision 12: `, numPrecision, 'Type:' ,typeof numPrecision);

 /**
  *  Operador .valueof
  *  NaN - infinity
  *  numeros exadecimales
  * Convertir string a valores numericos Number,ParseInt y ParseFloat
  * Obtener valores maximos y minimos en javascritp
  */

 let value_a = 2;
 let value_b = 10;
suma = value_a.valueOf() + value_b.valueOf();

 console.log(`Suma con valueOf: ${suma} type: ${typeof suma}`)// Suma con valueOf: 12 type: number


 value_a = new String("\'Data\'") ;

 console.log(`value_a: ${value_a} type: ${typeof value_a}`)// value_a con valueOf: Nuevo valor en la variable type: string
 console.log(`value_a: ${value_a.valueOf()} type: ${typeof value_a.valueOf()}`)// value_a con valueOf: Nuevo valor en la variable type: string


 //NaN,  

 let error = new Number("h")
 console.log(`error: ${error} type: ${typeof error}`)// value_a con valueOf: Nuevo valor en la variable type: string
 console.log(`error: ${error} isNaN: ${isNaN(error)}`)// value_a con valueOf: Nuevo valor en la variable type: string


 //
 value_a = 1;
 value_b = 0;
 console.log(`error: ${value_a/value_b}`);//Infinity

// Precision para pasar de un valor a otro
 console.log(`EPSILON: ${Number.EPSILON}`);
// numero de menor que se puede representar 
 console.log(`MIN_VALUE: ${Number.MIN_VALUE}`); 
 // NUmero menor que se puede trabajar dentro de javascript
 console.log(`MAX_VALUE: ${Number.MAX_VALUE}`);

 console.log(`MAX_VALUE es 2 elevado 1023: ${ 2 ** 1023}`);

 //Crea un archivo JS que contenga las siguientes líneas

//- Una variable que contenga tu altura en centímetros (entero)
let heightCm = 158;
//- Una variable que contenga tu altura en metros (número de coma flotante)
let heightMs = 1.554;
//- Una variable que contenga tu peso en kilogramos (número de coma flotante)
let weight = 50.61;
//- Una variable que contenga tu altura en metros redondeada hacia arriba
let heightMsRound = Math.ceil(heightMs)
console.log(`heightMsRound : ${heightMsRound }`);
//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let weightRound =  Math.floor(weight )
console.log(`weightRound : ${weightRound }`);
//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let max = Number.MAX_VALUE, max1 = Number.MAX_VALUE + 1;
let same = max === max1 ;
console.log(`same :${same} max:${max} max1:${max1}`);

/**
 *  Metodos para el menejo de arrays
 *  .unshift => mutan el array agrega el valor al inicio del array
 *  .push => mutan el array agrega el/los al final del array
 * 
 */

let arrayPrueba = ["0", 1, "3", 4, "cinco", "seis"];

arrayPrueba.push(7,"Navidad"); //Al final de array
arrayPrueba.unshift("Año Nuevo"); //Al inicio del aray
console.log(`\n arrayPrueba :${arrayPrueba}`);

/**
 * 
 *  Metodos para eliminar valores de arrays
 *  shift  => mutan el array elimina el primer elemento de la lista 
 *  pop => mutan el array elimina el ultimo elemento de la lista
 * 
 */

 arrayPrueba.shift();
 arrayPrueba.pop();
 console.log(`\n arrayPrueba :${arrayPrueba}`);


 /**
  * 
  *  
  *  splice , puede modificar, agregar eliminar valores 
  */
//Elimino los primeros 3 valores
  const newArray = arrayPrueba.splice(0,3);
   console.log(`\n newArray :${newArray} arrayPrueba: ${arrayPrueba}   `);
 
   //Agrega nuevos valores lo indico que los agregue al inico del array 
   arrayPrueba.splice(0,0, "uno","dos","tres", "valor de mas");
   console.log(`\n arrayPrueba: ${arrayPrueba}   `);

    //Modifico  valores, indico que el valor intermedio lo cambio por lufy XD
    arrayPrueba.splice(3,1, "Lufy");
    console.log(`\n arrayPrueba: ${arrayPrueba}   `);
 

    /**
     * 
     *  Concatenación y obtención de fragmentos de listas
     */
    let arrayPrueba2 =  [8,9,10,"once"];
    let arrayPrueba3 = ["doce", 13];
    arrayPrueba = arrayPrueba.concat(arrayPrueba2);
    console.log(`\n concat: ${arrayPrueba}   `);


arrayPrueba = [...arrayPrueba, ...arrayPrueba3];
console.log(`\n concat con ...: ${arrayPrueba}   `);


//slice
//pido que retorne los 2 primeros valores 
console.log(`\n slice: ${arrayPrueba.slice(0, 2)}`);
//pido todo menos el ultimo digito
console.log(`\n slice: ${arrayPrueba.slice(0, -1)}`);



/**
 *  Iterar listas
 *  para ES6
 */

 arrayPrueba.forEach(element => {
  console.log(`forEach en array: ${element}`);
 });


 console.log(`find: ${ arrayPrueba.find(valor => valor === "once" ) }`);
 console.log(`find: ${ arrayPrueba.find(valor => valor === "Noesta" ) }`);

 let classamtes = [
   {name: "Yasmin", ega: 20 } ,
   {name: "Janeth", ega: 21 } ,
   {name: "Edymar", ega: 19 } ,
   {name: "Anyela", ega: 10 } ,
   {name: "Rozana", ega: 22 } ,
   {name: "Daniel", ega: '22' } 
 ]

 let classamtes2 = [
  {name: "Yasmin", ega: 20 } ,
  {name: "Janeth", ega: 21 } ,
  {name: "Edymar", ega: 19 } ,
  {name: "Anyela", ega: 10 } ,
  {name: "Rozana", ega: 22 } ,
  {name: "Daniel", ega: 22 } 
]

 console.log(`classamtes find:`, JSON.stringify(classamtes.find(o => o.name === "Yasmin")), '\n ');

 /**
  *  Ordenar y Comparacion de listas 
  *  nn es menor retorna un -1
  *  m es menor retorna un 1
  *  si son iguales reotrna un 0
  */
  classamtes.sort((nn,m) => {
     return nn.ega - m.ega
 })

 console.log(`classamtes sort:`, classamtes);

 classamtes.sort((nn,m) => {
  return nn.ega - m.ega
})

console.log(`classamtes sort:`, classamtes);

// Comparar listas con every
// me da false porque un campo es numero en string 
console.log(`classamtes.ega every:`, classamtes.every(value => typeof value.ega.valueOf() == "number"));

const comperArray = (aray1, array2) => {
   if(aray1.length !== array2.length) return false; 
   const rest = aray1.every((value, i) => value === array2[i])
   return rest;
}
console.log(comperArray(classamtes, classamtes2));

//.some vemos si pior lo menos un valor cumple la norma 
console.log(`classamtes.ega some:`, classamtes.some(value => typeof value.ega.valueOf() === "null"));
console.log(`classamtes.ega some:`, classamtes.some(value => value.name.valueOf() === "Edymar"));


//Crea un archivo JS que contenga las siguientes líneas

//- Una variable que contenga la lista de la compra (mínimo 5 elementos)
let compra = ["Leche", "Pan","Queso","Jamon","Mantequilla","Carne","Pollo"];
console.log(`\n compra original:                     ${compra}`);
//- Modifica la lista de la compra y añádele "Aceite de Girasol"
compra.push("Aceite de Girasol");
console.log(`\n compra add "Aceite de Girasol":      ${compra}`);
//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
compra.pop();
console.log(`\n compra without  "Aceite de Girasol": ${compra}`);

//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
let movies = [
  {titulo:"El viaje de Chihiro "  ,                  director:"Hayao Miyazaki " , fecha: new  Date(2001,5,20) },
  {titulo:"El castillo ambulante ",                  director:"Hayao Miyazaki " , fecha: new  Date(2004,8,20) },
  {titulo:"Harry Potter y el misterio del principe ",director:"David Yates "    , fecha: new  Date(2009,5,7)  }
];

console.log(`\n movies: ${JSON.stringify(movies)}`);

//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
let today = new Date(2010,0,1);
let oldMovies = movies.filter(value => value.fecha < today)
console.log(`\n old movies: ${JSON.stringify(oldMovies)}`);
//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
let directores = movies.map(value => {return value.director}) 
console.log(`\n directores: ${directores}`);
//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
let titulos = movies.map(value => {return value.titulo}) 
console.log(`\n titulos: ${titulos}`);
//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
let NewList = directores.concat(titulos);
console.log(`\n NewList con concat: ${NewList}`);
//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
let NewListSpread = [...directores, ...titulos];
console.log(`\n NewList con ...: ${NewList}`);

/**
 * 
 *   OItros tipos de objetos 
 *  Objetos 'SET' O CONJUNTOS SOLO AGREGA VALORES UNICOSSSSSSSSSSS 
 * NOTA: la referencia de objetos como en el caso a continuacion es deferente para cada { id: 5 }
 */

const playWithSet = [1,2,3,4,5,6,7,8,9,1,2,3, {id:5},{id:5}];
const mySet = new Set(playWithSet);
console.log(`\n playWithSet   ${playWithSet}`);
console.log(`\n mySet`, mySet);// { 1, 2, 3, 4, 5, 6, 7, 8, 9, { id: 5 }, { id: 5 } }

 console.log(`\n No son el mismo objeto `, {id:5} === {id:5});

 mySet.add(100);
 console.log(`\n mySet`, mySet);// { 1, 2, 3, 4, 5, 6, 7, 8, 9, { id: 5 }, { id: 5 } }
 mySet.delete(9);
 console.log(`\n mySet`, mySet);// { 1, 2, 3, 4, 5, 6, 7, 8, { id: 5 }, { id: 5 } }

 //mySet.clear();
 //console.log(`\n mySet`, mySet); //mySet Set(0) {}


 console.log(`\n mySet`, mySet.has(5));//  true
 console.log(`\n mySet`, mySet.has(500));//  false

 console.log(`\n mySet`, mySet.size);//  11 ojo valores unicos  
  

 mySet.forEach(value => { console.log(`\n mySet.forEach`, value); } )

 //Para pasar el set a un array 
 const valuesUnicos = mySet.values();
 console.log(`\n valuesUnicos`, valuesUnicos); //typeod [Set Iterator]
 const ar_set = [...valuesUnicos];
 console.log(`\n ar_set`, ar_set); // array  [ 1, 2, 3, 4, 5, 6, 7, 8, { id: 5 }, { id: 5 }, 100 ]



 /**
  * 
  *  OBJETOS 
  * La key puede ir en comillas ("" '' o sin ellas), se ponen cuando el
  * nombre de la key tiene - u es medio raro, el tema con esto es que no
  * se puede acceder por el operador . , sino que se debe acceder con ["key"]
  */

  let gente = [
    {"name": "Yasmin", 'ega': 20  , "4-juegos": false} ,
    {name: "Janeth", ega: 21  , "4-juegos": false} ,
    {name: "Edymar",   ega: 19  , "4-juegos": false} ,
    {name: "Anyela",   ega: 10  , "4-juegos": false} ,
    {name: "Rozana",   ega: 22  , "4-juegos": false} ,
    {name: "Daniel",   ega: '22', "4-juegos": false} 
  ]
  
  console.log(`\n gente.name`, gente[0].name); // 
  console.log(`\n gente["4-juegos"]`, gente[0]["4-juegos"]); // 

  /**
   * INPORTANTE: Cuando asignamos un objeto a una variable es asignacion por referencia
   * mientras que con valores primitivos si se copia el objeto 
   * 
   */

  const obj1= {
    pais: "Brasil",
    year: 2014
  }

  const obj2 = obj1;
  obj2.continente = "America";
  console.log(`\n obj1`, obj1); //El valor de obj1 se modifico por referencia 

  /**
   * Para realmente hacer una copia del objeto podemos hacer new o utilizar el operador soread (...)
   * 
   * 
   */

  //Fechas 

  const fecha1 = new Date();//Fechas actual
  const fecha3 = new Date(1989,10,3);//fecha especifica
  const fecha4 = new Date(0);// por medio de los milisegundos  1 de enero de 1970 se fijo la referencia para las fechas . los milesegundo negativos son fechas inferiores a la referencia 
  const fecha5  = new Date("Octubre 12, 1974 12:16:16"); 

  if(fecha1 < fecha3 ) console.log(`\n fecha1 es menor`);

  //con las fechas no se puede usar === 
  // si las queremos comparar las tenemos que converir a milisegundos
  // con getTime

  if(fecha1.getTime() === fecha3.getTime() ) console.log(`\n fecha1  y fecha3 son iguales`);

  fecha1.getDay();
  fecha1.getMonth() + 1; //recordar que el mes incia en 0 
  fecha1.getFullYear();
  //mostrar fecha en string
  fecha1.toLocaleDateString('en-US')// se pasa el formato local


  
  //Funcion que podemos usar en la consola del navegador para pedor datos al usuario
  //let edad = prompt("Cual es tu edad?"); ojo el dato se convierte en string 