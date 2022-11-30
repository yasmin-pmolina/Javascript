const logger = require("./logger")

//Crea un nuevo proyecto de Node
//listo
//- Instala la dependencia Winston
//listo
//- En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

function permissionless(age){
   if(age < 18) throw "No puede ir a la fiesta"
}

//- Registra el error en un archivo a través de un try...catch
 
try{

  permissionless(15)

}catch(err){

  logger.error(`Identificador: ${err}`);

}
