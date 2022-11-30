
/**
 * 
 * 
 * 
 * 
 */

function myasinc(){
  //Esta funcion puede ser para consultar una base de datos y puede tardar n tiempo
  console.log("Consulta sql");
}


const mypromesa = new Promise((resolve, reject) => {


    const i = Math.floor(Math.random()*2);
    if(i != 0){
      resolve(); 
    }else{
      reject()
    }
})

mypromesa
.then(() => { console.log("Se ejecuto de forma correcta mi promesa")})
.catch(() => { console.log("Error")})
.finally(() => { console.log("Yo me ejecuto siempre")})