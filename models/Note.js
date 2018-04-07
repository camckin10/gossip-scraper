//comment schema file

var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var NoteSchema = new Schema({
    note: {
        type: String,
        required: true
    },
});

var Note = mongoose.model("Note", NoteSchema);

module.exports = "Note";