
const {crearArchivo} = require( './helpers/multiplicar');    // devuelve el objeto crearArchivo del archivo multiplicar.js
const argv= require('./config/yargs');                      // importa desde yargs la cosntruccion dela tabla

// const colors = require('colors');                           // carga el paquete de colores
require('colors');                                              // asi tambien s epuede cargar el paquete

console.clear();            //limpia la consola cada vez que se ejecuta el app 



crearArchivo ( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log( nombreArchivo.rainbow, 'creado'))      // agrega.rainbow para darle color
    .catch ( err => console.log(err));
