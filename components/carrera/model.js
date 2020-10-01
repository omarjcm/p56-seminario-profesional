const mongoose = require('mongoose')
const schema = mongoose.Schema

const mySchema = new schema({
    nombre: {
        type: String,
        required: true,
    },
    abreviatura: {
        type: String,
    },
    descripcion: String,
})

const model = mongoose.model( 'Carrera', mySchema )
module.exports = model