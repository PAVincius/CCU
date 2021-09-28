const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MensagemSchema = new Schema({
    cpf: {
        type : String,
        required: true,
        min: 11,
    },
    senha: {
        type: String,
        required: true,
        min: 8,
    }
});

module.exports = mongoose.model('Mensagens', MensagemSchema);
