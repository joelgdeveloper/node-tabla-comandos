const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption : true,
        describe: 'Es la base de la tabla de multiplicar'

    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default : 10,
        describe: 'Es el hasta de la tabla de multiplicar'

    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Lista las tablas de multiplicar'
    })
    .check( (argv, options) => {
        if( isNaN( argv.b ) ){
            throw 'La base tiene que ser un numero';
        }
        return true
    })
    .argv; 

    module.exports = argv;