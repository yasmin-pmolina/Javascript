//Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

//- Un nuevo Set con los nombres de tu familia
 
const newSet = new Set(["Anyela", "Jesus", "Keila","Yasmin"])
console.log(`\n newSet`, newSet); 
//- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
newSet.add("Jesus");
console.log(`\n newSet`, newSet); 
//- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
newSet.add("Javascript");
console.log(`\n newSet`, newSet); 