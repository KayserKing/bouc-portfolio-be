const express = require("express");
const { createUserController,findUserController } = require("../controllers/userController");
const { uploadTextController } = require("../controllers/uploadsController");

const router = express.Router();

router.post('/create', createUserController)
router.get('/users',findUserController)
router.post('/uploads/text', uploadTextController)
 


module.exports = router;