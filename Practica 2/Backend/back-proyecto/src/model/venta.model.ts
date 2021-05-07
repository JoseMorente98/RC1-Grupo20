const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ventaSchema = new Schema({
    fecha: {
        type: Date,
        required: [true, 'Fecha is required.']
    },
    vendedor: {
        type: Schema.Types.ObjectId,
        ref: 'Vendedores',
        required: [true, 'Vendedor is required.']
    },
    libro: {
        type: Schema.Types.ObjectId,
        ref: 'Libros',
        required: [true, 'Libro is required.']
    }
});

module.exports = mongoose.model('Ventas', ventaSchema);
export {};