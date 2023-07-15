const {filmError} = require("../utils/errors")

module.exports = (req, res, next) => {
    const {existe} = req.body
    console.log(existe)
    if(existe) return next()
    else throw new filmError("err.message", 401)
}