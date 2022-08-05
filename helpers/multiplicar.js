const fs = require('fs');   //trae el paquete para el uso de File Systems
// const crearArchivo = ( base = 5 ) => {   // asi con Promesa
const colors = require('colors');                                       // carga paquete colores
const crearArchivo = async( base = 5, listar = false, hasta=10 ) => {             // base 5 es para inicializar pero usa lo de app . asi con asyn mas un try-catch 

    try {

        if ( listar ) {                                         // el if lo agrega en el 35
        
        console.log('====================='.green);                 // agrega color video 37
        console.log('  Tabla del:'.green, colors.blue(base  ));      // agrega color
        console.log('====================='.green);                 // agrega color
        
        }
        
        
        let salida = '';
        let consola = '';
        
        for (let i=1; i<=hasta; i++) {                          // agrega hasta para limite de la tabla video 38
        
            // let resultado = base*i;                          // ciclo for original
        
           // console.log (base + ' x ' + i + ' = ' + resultado);  // ciclo for original
        
           //   console.log(`${ base } x ${ i } = ${ base * i }`);   // nueva forma explicado en este curso video 29
             
           salida += `${ base } x ${ i } = ${ base * i }\n`;   // video 30 require. \n es para poner un salto de linea en cada iteracion
           consola += `${ base } ${'x'.green} ${ i } ${'='.green} ${ base * i }\n`;
        }
        
        if ( listar ) {
            console.log(consola); 
        }
        
          fs.writeFileSync( `./salida/tabla-${base}.txt`, salida );  //   Uso el FileSync es mas simple que el File cuando funciona bien pero mas dificil encontrar los errores
        
                 
          //console.log(`tabla-${base}.txt creado`)             // cambia comillas por back ticks
        
          //resolve (`tabla-${base}.txt `)                    // asi es con una promesa uso resolve en lugar del console.log
          return `tabla-${base}.txt `;                    // asi es con async, uso retun en lugar de resolve
 

    } catch (err) {
        throw err;
    }

    // return new Promise(  (resolve , reject) => {           // asi es con Promesa

               }

    


module.exports = {                  //usa module para exportar la funcion al app.js
    crearArchivo
}