const fs = require('fs')

let listadoToDo = []

const guardarDB = () => {
    let data = JSON.stringify(listadoToDo)
        // el path no es el mismo que en cargar db por el path de donde se esta ejecutando la funcion
    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error(err)
        } else {
            return ('Tarea se guardo en DB correctamente')
        }
    });
}

const cargarDB = () => {
    try {
        listadoToDo = require('../db/data.json')
    } catch (error) {
        listadoToDo = []
    }
}

const crear = (descripcion) => {
    cargarDB()
    let toDo = {
        descripcion,
        completado: false
    }
    listadoToDo.push(toDo)
    guardarDB()
    return toDo
}

const getListado = () => {
    cargarDB()
    return listadoToDo
}

const actualizar = (descripcion, completado = true) => {
    cargarDB()
        // el find me da el elemento el findIndex me da el indice
    let index = listadoToDo.findIndex(tarea => tarea.descripcion === descripcion)
    if (index >= 0) {
        listadoToDo[index].completado = completado
        guardarDB()
        return true
    }
    return false
}

const borrar = (descripcion) => {
    cargarDB()
        // let index = listadoToDo.findIndex(tarea => tarea.descripcion === descripcion)
        // funcion filter() filtra un elemento de un arragle y regresa uno nuevo
    let nuevaLista = listadoToDo.filter(tarea => {
        return tarea.descripcion !== descripcion
    })

    if (nuevaLista.length == listadoToDo.length) {
        return false
    } else {
        listadoToDo = nuevaLista
        guardarDB()
        return true
    }
}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}