const { createCardService } = require("../services/cardService");

const createCardController = async (req, res) => {
  const { title, subTitle, description, image, type, active } = req?.body;
  try {
    const createCard = await createCardService(
      title,
      subTitle,
      description,
      image,
      type,
      active
    );
    console.log("createcard", createCard);
    res.send({
      status: 200,
      message: "card created successfully",
      data: createCard,
    });
  } catch (err) {
    res.send({ status: 400, message: err });
  }
  console.log(req.body);
};

module.exports = { createCardController };
