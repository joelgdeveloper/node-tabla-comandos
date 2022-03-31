const { crearArchivo } = require('./helpers/multiplicar'); //requerimos el archivo multiplicar.js
const colors = require('colors');
const argv = require('./config/yargs.js'); //requerimos el archivo yargs.js

console.clear();

// const base = 3;

crearArchivo(argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(`Archivo creado: ${ nombreArchivo.rainbow }`))
    .catch(err => console.log(err));