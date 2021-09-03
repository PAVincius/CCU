const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AcaoSchema = new Schema({
    title: {
        type : String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Acoes', AcaoSchema);
