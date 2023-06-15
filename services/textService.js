const Texts = require("../models/texts");

const textUploadService = async(text) => {
    const createText = new Texts({
        text: text
    });
    await createText.save();
    return createText;
}

module.exports = { textUploadService }