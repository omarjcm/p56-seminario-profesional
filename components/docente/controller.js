const storage = require('./storage')

function addDocente(nombre, apellido, correo_electronico) {
    return new Promise((resolve, reject) => {
        let docente = {
            nombre: nombre,
            apellido: apellido,
            correo_electronico: correo_electronico,
        }
        storage.add( docente )
        resolve( docente )
    })
}

function getDocentes( filtroDocente ) {
    return new Promise( (resolve, reject) => {
        resolve( storage.get( filtroDocente ) )
    } )
}

function updateDocente(idDocente, nombre, apellido, correo_electronico) {
    return new Promise( async (resolve, reject) => {
        let docente = {
            nombre: nombre,
            apellido: apellido,
            correo_electronico: correo_electronico,
        }
        const result = await storage.update(idDocente, docente)
        resolve( result )
    })
}

function deleteDocente(idDocente) {
    return new Promise((resolve, reject) => {
        storage.delete( idDocente )
            .then(() => { resolve() })
            .catch((error) => { reject( error ) })
    })
}

module.exports = {
    addDocente,
    getDocentes,
    updateDocente,
    deleteDocente,
}