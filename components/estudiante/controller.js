const storage = require('./storage')

function addEstudiante(cedula, nombre, apellido) {
    return new Promise((resolve, reject) => {
        let estudiante = {
            cedula: cedula,
            nombre: nombre,
            apellido: apellido,
        }
        storage.add( estudiante )
        resolve( estudiante )
    })
}

function getEstudiantes( filtroEstudiante ) {
    return new Promise( (resolve, reject) => {
        resolve( storage.get( filtroEstudiante ) )
    } )
}

function updateEstudiante(idEstudiante, cedula, nombre, apellido) {
    return new Promise( async (resolve, reject) => {
        let estudiante = {
            cedula: cedula,
            nombre: nombre,
            apellido: apellido,
        }
        const result = await storage.update(idEstudiante, estudiante)
        resolve( result )
    })
}

function deleteEstudiante(idEstudiante) {
    return new Promise((resolve, reject) => {
        storage.delete( idEstudiante )
            .then(() => { resolve() })
            .catch((error) => { reject( error ) })
    })
}

module.exports = {
    addEstudiante,
    getEstudiantes,
    updateEstudiante,
    deleteEstudiante,
}