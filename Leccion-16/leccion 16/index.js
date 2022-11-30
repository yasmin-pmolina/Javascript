const parrafos = document.querySelectorAll(".parrafo")

parrafos.forEach(parrafo => {
  
  parrafo.addEventListener("dragstart", (evento) => {
   console.log("Inicio del arrestre")
   parrafo.classList.add("draggin")
   evento.dataTransfer.setData("id",parrafo.id)


  })
  parrafo.addEventListener("dragend", () => {
    console.log("Final del arrestre")
    parrafo.classList.remove("draggin")
   })

});

const secciones = document.querySelectorAll(".seccion") 
secciones.forEach(seccion => {
  seccion.addEventListener("dragover", (event) => {
    event.preventDefault()
    //define el icono en el puntero cuando se arrastra el objeto
    seccion.dataTransfer.dropEffect = "copy";
  })
  /**
   * Cuando se hace un drag over no se puede gestionar el evento del drop,
   * para poder gestionarlo , declaramos la linea de prevenir el comportamiento por 
   * defecto  event.preventDefault()
   */
  seccion.addEventListener("drop", (event) => {
    const id_parrafo =  event.dataTransfer.getData("id")
    const parrafo = document.getElementById(id_parrafo)
    seccion.appendChild(parrafo)
  })
})

const deleteElement = document.querySelectorAll(".delete-element") 

deleteElement.forEach(element => {

  element.addEventListener("dragover", (event) => {
    event.preventDefault()
    element.dataTransfer.dropEffect = "move";
  })
  /**
   * Cuando se hace un drag over no se puede gestionar el evento del drop,
   * para poder gestionarlo , declaramos la linea de prevenir el comportamiento por 
   * defecto  event.preventDefault()
   */
   element.addEventListener("drop", (event) => {
    const id_parrafo =  event.dataTransfer.getData("id")
    const parrafo = document.getElementById(id_parrafo)
    element.deleteElement(parrafo)
  })
})