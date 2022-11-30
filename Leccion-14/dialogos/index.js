

//todas estas son formas de obtener el mismo elemento 
//const btn = document.getElementsByClassName("btn")
//const btn = document.getElementById("btn1")
const btn = document.querySelector("#btn1")

console.log(btn)

btn.addEventListener("click", () => { 
   //alert("Se ha hecho click")
   //confirm("Esta deacuerdo") && alert("Gracias por confirmar")
   const resp = prompt("Cual es tu nombre", "Yasmin")
})