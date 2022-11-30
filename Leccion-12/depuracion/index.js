// Crea un nuevo fichero JS que contenga las siguientes líneas
//
//- Una función que admita un parámetro "num", y devuelva una lista con
// esa cantidad de números de la secuencia de Fibonacci 
// (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
//
//- Ejecuta la depuración de VSCode para visualizar la ejecución de la función


/**
 * Encuentra la ecuencia de Fibonacci 
 * num = 0    fn(x) = 0
 * num = 1    fn(x) = 1
 * num >= 2   fn(x) = xF(n-1) + F(n-2)(x)
 * 
 * @param {
 * } num 
 */
function list_fibonacci(num) {
  let list = [1, 1];

  if (num === 1) return list.pop();
  if (num === 2) return list;
  
  for (let i = 2; i < num; i++) {
      list.push(list[i - 1] + list[i - 2])
  }
  return list
}

console.log(list_fibonacci(6));//[ 1, 1, 2, 3, 5, 8 ]