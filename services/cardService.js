const Cards = require("../models/card");

const createCardService = async (
  title,
  subTitle,
  description,
  image,
  type,
  active
) => {
  try {
    const createCard = new Cards({
      title: title,
      subtitle: subTitle,
      description: description,
      image: image,
      type: type,
      active: active,
    });
    await createCard.save();
    return createCard;
  } catch (err) {
    return err;
  }
};

const updateCardService = async (req) => {
  try {
    const updateCards = await Cards.findByIdAndUpdate(req.params._id, {
      title: title,
      subtitle: req.body.subTitle,
      description: req.body.description,
      image: req.body.image,
      type: req.body.type,
      active: req.body.active,
    });
    return updateCards;
  } catch (err) {
    return err;
  }
};

const findCardsService = async () => {
  try {
    const findcards = await Cards.find();
    return findcards;
  } catch (err) {
    return err;
  }
};

const deletecardsServices = async (req) => {
  try {
    const deletecards = await Cards.deleteOne(req.params._id);
  } catch (err) {
    return err;
  }
};

module.exports = {
  createCardService,
  findCardsService,
  updateCardService,
  deletecardsServices,
};
