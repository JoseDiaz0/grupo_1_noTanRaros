const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadProductFiles');
const productsController = require('../controllers/productsController');
const rutaDeUsuario = require('../middlewares/rutaDeUsuario')

/* GET ALL PRODUCTS */
router.get('/', productsController.index);

/* CREATE ONE PRODUCT */
router.get('/create/', rutaDeUsuario ,productsController.create);
router.post('/', upload.single('image'), productsController.store);

/* GET ONE PRODUCT DETAIL */
router.get('/detail/:id', productsController.detail);

/* GET CART VIEW */
router.get('/cart', rutaDeUsuario ,productsController.cart);

/* EDIT ONE PRODUCT */
router.get('/:id/edit', productsController.edit);
router.put('/:id', upload.single('image'), productsController.update);

/* Delete */
router.delete('/:id', rutaDeUsuario ,productsController.destroy)

/* GET - Gets search view */
router.get('/search', productsController.search);

module.exports = router;








































































