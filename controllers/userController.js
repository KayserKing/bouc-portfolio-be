const { createUserService, findUsersService } = require("../services/userService");
const Users = require("../models/users");

const createUserController = async (req, res) => {
    const {name, email, password} = req?.body;
    try{
        const createUser = await createUserService(name, email, password)
        console.log('createUser', createUser);
        res.send('Successfully created!');
        return 'Successfully created!';
    } catch (err){
        console.log('err==>', err);
        return err;
    }
}

const findUserController= async(req,res)=>{
    try{
        const findUsers=await findUsersService()
        res.send({status:200,data:findUsers});
        return  "Users fetched"
    }catch(err){
         return err;
    }

        
 
}
module.exports = { createUserController,findUserController }