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