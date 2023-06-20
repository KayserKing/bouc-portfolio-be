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
module.exports = { createCardService };
