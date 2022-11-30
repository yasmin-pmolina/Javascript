
/**
 * localStorage
 * 
 * los valores aca guardados se ven todas pestañas del navegador
 * este valor es persistente, con una sola vez se guarda en el navegador
 */

localStorage.setItem("nombre","myprimerLocalstrore")

console.log(localStorage.getItem("nombre"))

//Si queremos guardar objetos los tenemos que serializar JSON.stringify
localStorage.setItem("Persona",JSON.stringify({persona: {nombre:"Yasmin",isDeveloper: true}}))

console.log(JSON.parse(localStorage.getItem("Persona")))

localStorage.removeItem("Persona")
localStorage.removeItem("nombre")

/**
 * 
 * sessionStorage
 * 
 * solo se ve en una pestaña del navegador . los comandos son tal cual como el localStorage
 */
sessionStorage.setItem("nombre","Yasmin")
sessionStorage.removeItem("nombre")

document.cookie = "nombre = yasminCookie" //caduca en la session 
document.cookie = "nombrecaducidad=nombre; expires=" + new Date(2022,12,31)