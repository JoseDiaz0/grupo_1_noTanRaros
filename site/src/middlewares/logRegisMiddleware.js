const fs = require('fs')

function logRegisMiddleware (req, res, next){
    fs.appendFileSync('logRegis.txt', ' Se creo un registro al ingresar a la ruta ' + req.url)
    next();
}

module.exports = logRegisMiddleware;