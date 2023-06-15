const { textUploadService } = require("../services/textService");

const uploadTextController = async(req, res) => {
    const textValue = req?.body?.text;
    try{
        const textContent = await textUploadService(textValue)
        res.send({
            status: 200,
            message: "Text uploaded successfully!",
            success: true,
            data: createUser,
          });
    } catch(err){
        res.send({ status: 400, success: false, message: err });
    }
}

module.exports = {uploadTextController}