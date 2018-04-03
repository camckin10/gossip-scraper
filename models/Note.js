//comment schema file

var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var NoteSchema = new schema({
    note: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("Headline", HeadlineSchema);