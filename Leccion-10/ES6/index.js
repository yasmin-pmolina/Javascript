/**
 * por defecto dentro de la configuracion la propiedad "type": "commonjs",
 * (Esta se encuentra en package.json si no esta especificada toma la por defecto)
 * pero si queremos exportar importar con ES6 debemos cambiar la configuracion 
 *  "type": "module",
 * 

 * (importo los elemntos dentro de {} que estan exportados)
 */

import {suma, PI} from "../ES6/modulos/matematicas.js"

console.log(suma(4,6)*PI);

/**
 * 
 * Si queremos exportar todo
 * (todos los exports del arquivo colores objeto color )
 */

import * as color from "../ES6/modulos/colores.js"

console.log(color.colorRGB());

/**
 * 
 * Exportar e importar por defecto (export default)
 */
import areaTriangulo from "./modulos/aritmetica.js";

console.log(areaTriangulo(1,3));
