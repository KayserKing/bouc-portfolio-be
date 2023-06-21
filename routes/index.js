const express = require("express");
const { createUserController,findUserController } = require("../controllers/userController");
const { uploadTextController } = require("../controllers/uploadsController");
const { createCardController, findcardController } = require("../controllers/cardsController");

const router = express.Router();

router.post('/create', createUserController)
router.get('/users',findUserController)
router.post('/uploads/text', uploadTextController)
router.post('/create-card',createCardController),
router.put('/update-card/:id',createCardController),
router.get('/find-card',findcardController)
 


module.exports = router;