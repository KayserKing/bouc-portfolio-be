const {
  createCardService,
  findCardsService,
  updateCardService,
  deletecardsServices,
} = require("../services/cardService");

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

const updateCardController = async (req, res) => {
  console.log(req);
  try {
    const updatecard = await updateCardService(req);
    console.log("createcard", updatecard);
    res.send({
      status: 200,
      message: "card updated successfully",
      data: updatecard,
    });
  } catch (err) {
    res.send({ status: 400, message: err });
  }
};

const findcardController = async (req, res) => {
  try {
    const findcards = await findCardsService();
    console.log(findcards);
    res.send({
      status: 200,
      message: "Users fetched successfully!",
      data: findcards,
    });
  } catch (err) {
    res.send({ status: 400, message: err });
  }
};

const deleteCardController = async (req, res) => {
  try {
    const deletecards = await deletecardsServices(req);
    res.send({
      status: 200,
      message: "user deleted Successfully",
    });
  } catch (err) {
    res.send({ status: 400, message: err });
  }
};
module.exports = {
  createCardController,
  findcardController,
  updateCardController,
  deleteCardController,
};
