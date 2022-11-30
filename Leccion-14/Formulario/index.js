const f = document.getElementById("formulario")

/* Aqui cada vez que ocurra un evento  submit lo redigimos aca y ahora solo nos muestra por consoa*/
f.addEventListener("submit", (element) => {
   console.log(element)
   element.preventDefault()//evitamos el comportamiento por defecto, para que no nos redirija la ruta 
} )