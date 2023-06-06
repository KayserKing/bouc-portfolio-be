const express = require("express");
const { createUserController,findUserController } = require("../controllers/userController");

const router = express.Router();

router.post('/create', createUserController)
router.get('/users',findUserController)
 


module.exports = router;