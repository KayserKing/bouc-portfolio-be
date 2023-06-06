const Users = require("../models/users");

const createUserService = async (name, email, password) => {
  try {
    const createUser = new Users({
      name: name,
      email: email,
      password: password,
    });
    await createUser.save();
    return createUser;
  } catch (err) {
    return err;
  }
};

const findUsersService = async () => {
  try {
    const users = await Users.find();
    return users;
  } catch (err) {
    return err;
  }
};

module.exports = { createUserService, findUsersService };
