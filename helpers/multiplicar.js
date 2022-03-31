const fs = require('fs'); //requerimos el paquete filesystem
const colors = require('colors');

// const crearArchivo = ( base = 5 ) => {

//     return new Promise((resolve, reject) => {

//         console.log('===================');
//         console.log('   Tabla del: ', base);
//         console.log('===================');

//         let salida = '';

//         for(let i = 1; i <= 10; i++){
//             salida += `${base} x ${i} = ${base * i}\n`;
//         }
//         console.log(salida);

//         // fs.writeFile(`tabla-${ base }.txt`, salida, (err) => { //creamos el archivo y escribimos dentro de el
//         //     if (err) throw err;

//         //     console.log(`tabla-${ base }.txt creado!`);
//         // })


//         fs.writeFileSync(`tabla-${ base }.txt`, salida);//creamos el archivo y escribimos dentro de el, usamos su version asyncrona
            
//        resolve(`tabla-${ base }.txt`); 
//     })
    

// }

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {

        let salida = '';
        let consola = '';

        for(let i = 1; i <= hasta; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${ 'x'.green } ${i} ${'='.green} ${base * i}\n`;
        }

        if( listar ){
            console.log('==================='.green);
            console.log('   Tabla del: '.green , colors.blue(base));
            console.log('==================='.green);
            
            console.log(consola);
        }
        // fs.writeFile(`tabla-${ base }.txt`, salida, (err) => { //creamos el archivo y escribimos dentro de el
        //     if (err) throw err;

        //     console.log(`tabla-${ base }.txt creado!`);
        // })


        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);//creamos el archivo y escribimos dentro de el, usamos su version asyncrona
            
       return `tabla-${ base }.txt`; 

    } catch (error) {
        throw error;
        
    }
    

}

module.exports = {
    crearArchivo
}