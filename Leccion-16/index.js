const parrafos = document.querySelectorAll(".parrafo")
parrafos.forEach(parrafo => {
  parrafo.addEventListener("dragstart", (evento) => {
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
    event.dataTransfer.dropEffect = "move"
  })
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
    event.dataTransfer.dropEffect = "move"
  })

   element.addEventListener("drop", (event) => {
    const id_parrafo =  event.dataTransfer.getData("id")
    const parrafo = document.getElementById(id_parrafo)
    console.log(parrafo.parentElement)
    parrafo.parentElement.removeChild(parrafo)
  })
})