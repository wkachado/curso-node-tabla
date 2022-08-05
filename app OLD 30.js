const fs = require('fs');   //trae el paquete para el uso de File Systems


console.clear();            //limpia la consola cada vez que se ejecuta el app 

// imprimir la tabla del 5

const base= 3;

// limite de la table =10

const  limite=10;
let salida= '';         //lo agrega para video 30 require

console.log('=====================');
console.log(`  Tabla del ${base}  `);
console.log('=====================');



for (let i=1; i<=limite; i++) {

    // let resultado = base*i;                          // ciclo for original

   // console.log (base + ' x ' + i + ' = ' + resultado);  // ciclo for original

   //   console.log(`${ base } x ${ i } = ${ base * i }`);   // nueva forma explicado en este curso video 29
     
   salida += `${ base } x ${ i } = ${ base * i }\n`;   // video 30 require. \n es para poner un salto de linea en cada iteracion

}


//console.log(salida); verifico que todo funciona ok


//fs.writeFile( 'tabla-5.txt', salida, (err) => {     // si no pongo el path lo pone en el mismo directorio
//    if (err) throw err;
//
//    console.log(salida);
//    console.log('tabla-5.txt creado')
    
    //fs.writeFile( `tabla-${base}.txt`, salida, (err) => {     // reemplazo el 5 fijo por la base variable
        //if (err) throw err;
    
    fs.writeFileSync( `tabla-${base}.txt`, salida );  //   Uso el FileSync es mas simple cuando funciona bien pero mas dificil encontrar los errores


        console.log(salida);        
        console.log(`tabla-${base}.txt creado`)             // cambia comillas por back ticks

//})           // no usado en el Sync
