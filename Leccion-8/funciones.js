/**
 * 
 * Los argumentos de las funciones:
 * si un dato nativo(number, string...) se pasa por valor, es decir no se modifica el original
 * si es un objeto se pasa por referencia, lo que quiere decir que si modificas el dato tambien se modifica 
 * el onjeto original
 */



let pedido = {
 drink : "Cafe",
 sugar: true,
 leche: "vaca",
 ice: false
}

//Argumento por valor
function addSugar(drink){
  drink = "chocolate";
  if(drink === "cafe")
  return true;
}

//Argumenmtos por referencia 
function addIce(obj){
  obj.drink = "gaseosa";
  if(obj.drink === "gaseosa")
  return true;
}

let withsugar = addSugar(pedido.drink);
console.log(pedido);


let withIce = addIce(pedido);
console.log(pedido);


//Argumenmtos por referencia 
function funcionparametroOpcional(comida  = "Pollo"){
  console.log(comida);
}

function suma(... parametros){
  let result = 0;
  parametros.forEach(  valor => {
    result += valor; 
    console.log(result);
  })
}

suma(1,3,4,4)

let array = [1,2,3,4,54,56,'v','v']
console.log('....................');
array.map(
  (... param) => {
   // console.log(`\n ------  `,  param);
  }
)

/**
 * 
 * En JavaScript, hoisting te permite usar funciones y variables 
 * antes de que se hayan declarado. En este post, aprenderemos 
 * qué es el hoisting y cómo funciona.
 *  
 * Echa un vistazo a este código y adivina qué sucede cuando se ejecuta
 * console.log(foo);
 *  var foo = 'foo';
 * 
 * Puede que te sorprenda saber que este código genera undefined y
 *  que no falla o genera un error – a pesar de que foo se asigna 
 * después de la línea console.log
 * 
 * IMPORTANTE: las funciones t
 * 
 * las variables var se inicializan por defecto con undefined si son llamadas antes
 * de su inicializacion, 
 * 
 * console.log(foo); // undefined
 *
 * var foo = 'bar';
 *
 * console.log(foo); // "bar"
 * 
 * ..........................................
 *  let y const
 * 
 * Las variables declaradas con let y const también 
 * reciben hoisting, pero no son inicializadas con un
 * valor por defecto. Acceder a una variable declarada
 * con let o const antes de que sea declarada resulta 
 * en un ReferenceError:
 * 
 * {
 *	// Comienzo de TDZ de foo
 * 	let bar = 'bar';
 *	console.log(bar); // "bar"
 *  console.log(foo); // ReferenceError porque estamos en la TDZ de foo
 *	let foo = 'foo';  // Final de TDZ de foo
 * }
 * ...........................................
 * Hoisting de funciones en JavaScript
 * 
 * Las declaraciones de funciones estan sometidas a hoisting, 
 * lo que significa que es fácil, demasiado fácil, hacer 
 * referencia a la función antes de que se defina en el archivo
 * 
 * En funciones declaradas de las siguiente maneja no hay problema 
 * reiniciarPuntos();
 * dibujarTablero();
 * poblarTablero();
 * comenzarJuego();
 *
 * function reiniciarPuntos() {
 * console.log("Reinicializando puntos");
 * }
 *
 * pero si declarmos la funcion :
 * 
 * foo(); // Uncaught TypeError: foo is not a function
 * var foo = function () { }
 * 
 * No dara un error , para las funciones tipo fecha o anomimas 
 * 
 * 
 */

 let arrayNum = [1,2,3,4,54,56]
 
 let dobleDeValior = (valor) =>{ 
  return valor*2
 }

 let arrayDoble = arrayNum.map(dobleDeValior)
 console.log(arrayDoble);