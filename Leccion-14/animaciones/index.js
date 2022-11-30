const a = 4
const b = 4

const c = a*b
console.log("a*b", c)

const p = document.getElementById("parrafo");

console.log(p)

/**
 * Nota cuando agregamos el scritp en el header si intentamos acceder a un elemto html 
 * nos dara null porque aun no se ha redenrizado
 * si lo agrego en el body al final si podra accedeer a ellos 
 */