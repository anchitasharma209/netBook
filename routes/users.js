const express = require('express');

const router = express.Router();

const userController =require('../controllers/userController')
//console.log("Router loaded");
router.get('/profile',userController.profile)
router.get('/signup',userController.signUp)
router.get('/signin',userController.signIn)
router.post('/create',userController.createSession)

module.exports= router;
