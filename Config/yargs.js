const argv = require('yargs')               // lo agrega en el 34 con yargs
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Es hasta donde quiero la tabla'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .check( (argv, options) => {
        if( isNaN( argv.b )) {
            throw 'La base debe ser un numero'
        }
        return true;
    })
    .argv;                      // lo baja en el 35


module.exports= argv;           // exporta todo el archivo para poder usarlo en app.js