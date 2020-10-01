const mongoose = require('mongoose')
const schema = mongoose.Schema

const mySchema = new schema({
    cedula: {
        type: String,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
})

const model = mongoose.model( 'Estudiante', mySchema )
module.exports = model