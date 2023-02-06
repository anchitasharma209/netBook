const express = require('express');

const router = express.Router();

const userController =require('../controllers/userController')
//console.log("Router loaded");
router.get('/',userController.profile)
module.exports= router;
