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
let fecha = new Date(2010,0,1);
let oldMovies = movies.filter(value => value.fecha < fecha)
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