const { crearArchivo } = require('./helpers/multiplicar'); //requerimos el archivo multiplicar.js

console.clear();

console.log(process.argv);//argumentos que vienen de la consola
const [,,arg3 = 'base=5'] = process.argv; //destructuracion de argumentos
const [, base = 5] = arg3.split('='); //separamos el argumento base=5 por el =
console.log(base);

// const base = 3;

crearArchivo(base)
    .then( nombreArchivo => console.log(`Archivo creado: ${ nombreArchivo }`))
    .catch(err => console.log(err));