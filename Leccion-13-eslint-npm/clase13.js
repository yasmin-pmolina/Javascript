


/** La libreria eslint verifica los comentario 
*   eslint lee el  / eslint-disable /  para desactivar todas las reglas
*   la vuelve activar cuando encuentra eslint-enable
*/



/* eslint-disable */ 
let nombre = 'En esta linea quiero comillas simples'

/* eslint-enable */

/**  
*    
*    Puede indicar si solo quiero una regla especifica en una linea especifica
*/

let apellido = 'En esta linea quiero comillas simples' // eslint-disable-line quotes 

/* eslint-disable-next-line indent */
 let identacion = "variable mal identada"


/**
  * 
  * En la seccion de scritp de package.json 
  * "lint": "eslint ."
  * 
  *  con el . le indicamos que revise todos los archivos 
  * si especificamos el archivo solo verificara el archivo por ejemplo 
  *  "lint": "eslint index.js"
  * 
  */


//genero errores para revisar coon el script

let comillas = "variable mal identada"