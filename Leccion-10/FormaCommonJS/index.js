/**
 * 
 *  Formas de importar y exportar modulos 
 * 
 *  commonJS - require
 *  import ES6 - import
 * 
 * NOTA: todos los archivos por defecto tienen un objeto
 * module y es un objeto global de cada archivo
 */

//console.log(module)

/**
 * Imprime =>
Module {
  id: '.',
  path: 'C:\\Users\\lopez\\OneDrive\\Escritorio\\Practica Software\\Javascript\\Leccion-10',
  exports: {},
  filename: 'C:\\Users\\lopez\\OneDrive\\Escritorio\\Practica Software\\Javascript\\Leccion-10\\Index.js',
  loaded: false,
  children: [],
  paths: [
    'C:\\Users\\lopez\\OneDrive\\Escritorio\\Practica Software\\Javascript\\Leccion-10\\node_modules',
    'C:\\Users\\lopez\\OneDrive\\Escritorio\\Practica Software\\Javascript\\node_modules',
    'C:\\Users\\lopez\\OneDrive\\Escritorio\\Practica Software\\node_modules',
    'C:\\Users\\lopez\\OneDrive\\Escritorio\\node_modules',
    'C:\\Users\\lopez\\OneDrive\\node_modules',
    'C:\\Users\\lopez\\node_modules',
    'C:\\Users\\node_modules',
    'C:\\node_modules'
  ]
}
 * Vemos que dentro de las propiedades esta exports
 * 
 */


const moduloMatematicas = require("./matematicas")

console.log(moduloMatematicas.suma(1,2,3,4,5,6));

const multiplica = moduloMatematicas.multiplica;
console.log(multiplica(1.5,2));
 
/**
 * 
 * con la reconstruccion de los objetos 
 */

const {colorRGB} = require("./colores")
console.log(colorRGB());