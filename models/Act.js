const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    time: {
        type: Date,
        required: true
    }
});

module.exports = Act = mongoose.model('act', ActSchema);