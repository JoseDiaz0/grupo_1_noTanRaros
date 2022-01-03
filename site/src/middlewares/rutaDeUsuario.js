const adminController = require('../controllers/adminController');
const logRegisMiddleware = require('../middlewares/logRegisMiddleware');


function rutaDeUsuario (req,res,next) {
 if (req.adminController != logRegisMiddleware){   
    res.redirect('/users/login')
 }else {
    next()
 }
}

module.exports = rutaDeUsuario;
