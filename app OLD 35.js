// const fs = require('fs');   //trae el paquete para el uso de File Systems pero no es necesario aca
const {crearArchivo} = require( './helpers/multiplicar');    // devuelve el objeto crearArchivo del archivo multiplicar.js
const argv = require('yargs')               // lo agrega en el 34 con yargs
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false
                })
                .check( (argv, options) => {
                    if( isNaN( argv.b )) {
                        throw 'La base debe ser un numero'
                    }
                    return true;
                })
                .argv;                      // lo baja en el 35



console.clear();            //limpia la consola cada vez que se ejecuta el app 


// console.log( process.argv );        // proceso propio de node
console.log( argv );            // esto viene  de yargs

//console.log('base: yargs', argv.base);   lo saca en el 35


// const [ , , arg3 = 'base=5']= process.argv;   // NO recomienda hacerlo asi , lo saca en 34
// const [ , base ] = arg3.split ('=');          // NO recomienda hacerlo asi , lo saca en 34





// const base= 5;

crearArchivo ( argv.b, argv.l )
    .then( nombreArchivo => console.log( nombreArchivo, 'creado'))
    .catch ( err => console.log(err));
