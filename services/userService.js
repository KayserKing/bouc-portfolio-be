const Users = require("../models/users");

const createUserService = async (name, email, password) => {
    const createUser = new Users({
        name: name,
        email: email,
        password: password
    });
    await createUser.save();
    return createUser
}

const findUsersService=async ()=>{
    const users =  await Users.find();
     return users;
}
module.exports = { createUserService ,findUsersService}