const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por crear'
}
const completado = {
    default: true,
    alias: 'c',
    desc: 'Maraca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .command('listar', 'Lista las tareas')
    .help()
    .argv

module.exports = {
    argv
}