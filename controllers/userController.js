const {
  createUserService,
  findUsersService,
} = require("../services/userService");

const createUserController = async (req, res) => {
  const { name, email, password } = req?.body;
  try {
    const createUser = await createUserService(name, email, password);
    res.send({
      status: 200,
      message: "User created successfully!",
      data: createUser,
    });
  } catch (err) {
    res.send({ status: 400, message: err });
  }
};

const findUserController = async (req, res) => {
  try {
    const findUsers = await findUsersService();
    res.send({
      status: 200,
      message: "Users fetched successfully!",
      data: findUsers,
    });
  } catch (err) {
    res.send({ status: 400, message: err });
  }
};

module.exports = { createUserController, findUserController };
