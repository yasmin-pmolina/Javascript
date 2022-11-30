

//$("li").hide()


  /**
   * Encaustrando nuestro codigo dentro del 
   * $(document).ready( 
   *  lo que este aqui se ejecuta una vez se termine de cargar el docunento 
   * 
   * $(document).ready(() => { }) o la forma simpleficada
   * $(() => { })
   * 
   * 
   *  <li id ="li-1" class="show-li">Elemento 1</li>
      para referenciar a un elemento por el 
      type  $("li")
      id    $("#li-4")
      clase $(".how-li)
   */
  
$(document).ready(() => {

  $("h1").click(() => { 
    $("h1").css({color: "green"})
  })

  $("h1").dblclick(() => { 
    $("h1").css({color: "red"})
  })

  $("#li-4").click(() => { 
    $("#li-4").css({color: "green"})
  })

  $("#li-4").dblclick(() => { 
    $("#li-4").css({color: "red"})
  })

  $(".hide-btn").click(() => {
    $("h1").hide()
    console.log("Mostrando el titulo del document...o")
   
  })

  $(".show-btn").click(() => {
    $("h1").show()
    console.log("Ocultamdo el titulo del document...o")
  })

  $(".newelement").click(() => {
    $("ul").append("<li>Elemento n</li>")
  })

  $(".newLastelement").click(() => {
    $("ul").append("<li>Elemento n+1</li>")
  })

  $(".newBeforeelement").click(() => {
    $("ul").prepend("<li>Elemento n-1</li>")
  })
  
   $("li").mouseenter((elemento) => { 
    elemento.target.style.color = "blue"
    console.log("A entrado el raton")
  })

  $("li").mouseleave((elemento) => { 
    elemento.target.style.color = "black"
    console.log("saliendo el raton")
  })
})

 