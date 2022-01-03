const express = require('express');
const router = express.Router();
const usersController = require ('../controllers/usersController');
const logRegisMiddleware = require('../middlewares/logRegisMiddleware')

router.get('/login', usersController.login);
router.post('/login', logRegisMiddleware , usersController.stor)

router.get('/register',usersController.register);
router.post('/register', logRegisMiddleware ,usersController.stor);

router.get('/profile',usersController.profile);

/* router.get('/editProfile', usersController.edit); */








module.exports = router;