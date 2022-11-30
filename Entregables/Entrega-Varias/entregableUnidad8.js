//Crea un archivo JS que contenga las siguientes líneas

//- Una función sin parámetros que devuelva siempre "true"
const  trueValue = () => { return true} 

//- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const mypro = new Promise((result, rejct) => {
 
  setTimeout(() => {
    console.log("Hola soy una promesa") ;
    result()
  }, 5000)
})

mypro.then()

//- Una función generadora de índices pares automáticos
function* generadora(){
  let id = 0;
  while(true){
    id+=2;
    if(id === 4) return id; 
    yield id; 

  }
}

const gen = generadora();
console.log(gen.next()) 
console.log(gen.next()) 
console.log(gen.next()) 
