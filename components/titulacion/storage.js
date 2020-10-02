const model = require('./model')

function getTitulacion() {

}

function addTitulacion( objeto ) {
    const titulacion = new model( objeto )
    titulacion.save()
}

function updateTitulacion() {

}

function deleteTitulacion() {

}

module.exports = {
    add: addTitulacion,
    get: getTitulacion,
    update: updateTitulacion,
    delete: deleteTitulacion,
}