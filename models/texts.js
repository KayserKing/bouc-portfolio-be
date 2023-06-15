const mongoose = require("mongoose");

const textSchema = new mongoose.Schema({
    text: String,
});

const Texts = mongoose.model('Texts', textSchema);

module.exports = Texts;