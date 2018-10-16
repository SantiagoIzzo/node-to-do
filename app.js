const argv = require('./config/yargs').argv
const toDo = require('./to-do/to-do')
const colors = require('colors')

console.log(argv)

let comando = argv._[0]

switch (comando) {
    case 'crear':
        let tarea = toDo.crear(argv.descripcion)
        console.log(tarea)
        break

    case 'listar':
        let listado = toDo.getListado()
        for (let tarea of listado) {
            console.log('-------------------------'.red)
            console.log('Por hacer:'.green)
            console.log(tarea.descripcion)
            console.log('Estado:'.green, tarea.completado)
            console.log('-------------------------'.red)
        }
        break

    case 'actualizar':
        let actualizado = toDo.actualizar(argv.descripcion, argv.completado)
        if (actualizado) {
            console.log('La tarea a sido actualizada correctamente'.green)
        } else {
            console.log('La tarea no a sido actualizada correctamente'.red)
        }
        break
    case 'borrar':
        let borrado = toDo.borrar(argv.descripcion)
        if (borrado) {
            console.log('La tarea a sido borrada correctamente'.green)
        } else {
            console.log('No se a podido borrar la tarea'.red)
        }
        break
    default:
        console.log('Comando no es reconocido')
}