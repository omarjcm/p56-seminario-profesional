const model = require('./model')

function addDocente( objeto ) {
    const docente = new model( objeto )
    docente.save()
}

async function getDocentes( filtroDocente ) {
    let filtro = {}
    if (filtroDocente != null) {
        filtro = { nombre : filtroDocente }
    }
    const docenteList = await model.find( filtro )
    return docenteList
}

async function updateDocente( idDocente, objeto ) {
    const foundDocente = await model.findOne({ _id: idDocente })

    foundDocente.nombre = objeto.nombre
    foundDocente.apellido = objeto.apellido
    foundDocente.correo_electronico = objeto.correo_electronico

    const result = await foundDocente.save()
    return result
}

function deleteDocente(idDocente) {
    return model.deleteOne({ _id: idDocente })
}

module.exports = {
    add: addDocente,
    get: getDocentes,
    update: updateDocente,
    delete: deleteDocente,
}