const htext = document.getElementById("h-text");

console.log(htext)

htext.addEventListener("cambioTexto", (evento) => {
  console.log(evento.detail)
  htext.innerText = evento.detail.texto
  htext.style.color = evento.detail.color
})

function cambioTexto(texto, color){

  const evento = new CustomEvent("cambioTexto",{
    detail:{
      texto: texto,
      color
    }
  })

  htext.dispatchEvent(evento)
  
}
  cambioTexto("Este llamado a la funcion dse puede probar desde la consola del navegador", "green")