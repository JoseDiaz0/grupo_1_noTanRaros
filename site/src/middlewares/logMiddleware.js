const fs = require('fs')

function logMiddleware(req, res, next){
    fs.appendFileSync('log.txt', 'Se ingreso a la ruta ' + req.url)
    next();
}

module.exports = logMiddleware;