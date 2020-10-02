const mongoose = require('mongoose')
const schema = mongoose.Schema

const mySchema = new schema({
    carrera: {
        type: schema.ObjectId,
        ref: 'Carrera',
        required: true,
    },
    tutor: {
        type: schema.ObjectId,
        ref: 'Docente',
        required: true,
    },
    revisor: {
        type: schema.ObjectId,
        ref: 'Docente',
        required: true,
    },
    estudiantes: [{
        type: schema.ObjectId,
        ref: 'Estudiante',
        required: true,
    }],
    tipo_titulacion: {
        type: String,
        required: true,
    },
    archivo: String,
    fecha_archivo: Date,
    estado: {
        type: String,
        required: true,
    },
})

const model = mongoose.model( 'Titulacion', mySchema )
module.exports = model