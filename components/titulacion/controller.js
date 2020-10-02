const storage = require('./storage')
const config = require('../../config')

function addTitulacion( carrera, tutor, revisor, estudiantes, tipo_titulacion, archivo, estado ) {
    return new Promise((resolve, reject) => {
        if (!carrera || !tutor || !revisor || !estudiantes || !tipo_titulacion || !estado) {
            let error = 'No existe uno de los parámetros.'
            console.error( error )
            return reject( error )
        }
        let fileUrl = ''
        if (archivo) {
            fileUrl = config.host + ':' + config.port + config.publicRoute + config.filesRoute + archivo.filename
        }
        const titulacion = {
            carrera: carrera,
            tutor: tutor,
            revisor: revisor,
            estudiantes: estudiantes,
            tipo_titulacion: tipo_titulacion,
            archivo: fileUrl,
            fecha_archivo: new Date(),
            estado: estado,
        }
        storage.add( titulacion )
        resolve( titulacion )
    })
}

function getTitulacion() {

}

function updateTitulacion() {

}

function deleteTitulacion() {

}

module.exports = {
    addTitulacion,
    getTitulacion,
    updateTitulacion,
    deleteTitulacion,
}