 
//Crea un archivo JS que contenga las siguientes líneas

//- Una cadena de texto con tu Nombre
let firtsname = "Yasmin"
//- Otra cadena de texto con tu Apellido
let lastName = "Molina"
//- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y
// tu Apellido con un espacio entre medias
let estudiante =  `${firtsname} ${lastName}`
console.log(`estudiante: ${estudiante} `)
//- Una cadena de texto que se llame "estudianteMayus" que contenga la 
//cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase()
console.log(`estudianteMayus: ${estudianteMayus} `)
//- Una cadena de texto que se llame "estudianteMinus" que contenga 
//la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase()
console.log(`estudianteMinus: ${estudianteMinus} `)
//- Una variable que contenga el número de letras de la cadena
// "estudiante" contando los espacios
let length = estudiante.length
console.log(`length: ${length} `)
//- Una variable que contenga la primera letra del Nombre
let firstLetter = firtsname[0]
console.log(`firstLetter: ${firstLetter}`)
//- Otra variable que contenga la última letra del Apellido
let lastLetter = lastName[lastName.length -1]
console.log(`lastLetter: ${lastLetter}`)
//- Una cadena de texto que elimine los espacios de la variable "estudiante"
let estudiantetrim = estudiante.replace(/ /g,"")
console.log(`estudiantetrim: ${estudiantetrim}`)
//- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let flag = estudiante.includes(firtsname)
console.log(`flag: ${flag} `)











