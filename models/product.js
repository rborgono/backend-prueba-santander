const { Schema, model } = require('mongoose');

const ProductSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    mail: {
        type: String,
        required: false,
    },
    fecha: {
        type: String,
        required: false,
    },
}, {collection: 'product'});

module.exports = model('Product', ProductSchema);