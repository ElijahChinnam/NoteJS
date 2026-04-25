const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    note: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

const Note = mongoose.model('note', noteSchema);

module.exports = Note;