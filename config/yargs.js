const descripcion = {
    demand: true,
    alias: 'd'

};


//////importacion con nombre constante con DESTRUCTURACION////
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado: {
            alias: 'c',
            default: true
        }
    })
    .command('borrar', 'borra una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
};