const storage = require('./storage')

function addCarrera(nombre, abreviatura, descripcion) {
    return new Promise((resolve, reject) => {
        let carrera = {
            nombre: nombre,
            abreviatura: abreviatura,
            descripcion: descripcion,
        }
        storage.add( carrera )
        resolve( carrera )
    })
}

function getCarreras( filtroCarrera ) {
    return new Promise( (resolve, reject) => {
        resolve( storage.get( filtroCarrera ) )
    } )
}

function updateCarrera(idCarrera, nombre, abreviatura, descripcion) {
    return new Promise( async (resolve, reject) => {
        let carrera = {
            nombre: nombre,
            abreviatura: abreviatura,
            descripcion: descripcion,
        }
        const result = await storage.update(idCarrera, carrera)
        resolve( result )
    })
}

function deleteCarrera(idCarrera) {
    return new Promise((resolve, reject) => {
        storage.delete( idCarrera )
            .then(() => { resolve() })
            .catch((error) => { reject( error ) })
    })
}

module.exports = {
    addCarrera,
    getCarreras,
    updateCarrera,
    deleteCarrera,
}