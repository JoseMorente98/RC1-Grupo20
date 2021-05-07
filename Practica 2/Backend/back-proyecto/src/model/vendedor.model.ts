const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let vendedorSchema = new Schema({
    DPI: {
        type: String,
        required: [true, 'DPI is required.']
    },
    nombre: {
        type: String,
        required: [true, 'Nombre is required.']
    },
    apellido: {
        type: String,
        required: [true, 'Apellido is required.']
    },
    direccion: {
        type: String,
        required: [true, 'Direccion is required.']
    },
    telefono: {
        type: String,
        required: [true, 'Telefono is required.']
    }
});

module.exports = mongoose.model('Vendedores', vendedorSchema);
export {};