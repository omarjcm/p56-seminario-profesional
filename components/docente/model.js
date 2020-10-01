const mongoose = require('mongoose')
const schema = mongoose.Schema

const mySchema = new schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    correo_electronico: {
        type: String,
        required: true,
    },
})

const model = mongoose.model( 'Docente', mySchema )
module.exports = model