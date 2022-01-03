const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const rutaDeUsuario = require('../middlewares/rutaDeUsuario')

router.get('/',rutaDeUsuario,adminController.index);
router.get('/createProduct',rutaDeUsuario,adminController.create);
router.get('/editProduct',rutaDeUsuario,adminController.edit);
router.get('/productsList',rutaDeUsuario,adminController.list)
router.get('/usersList',rutaDeUsuario,adminController.usersList);


module.exports = router;