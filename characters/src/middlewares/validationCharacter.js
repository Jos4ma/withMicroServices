const {characterError} = require("../utils/errors")

module.exports = (req, res, next) => {
    const {valido} = req.body
    console.log(valido)
    if(valido) return next()
    else throw new characterError("err.message", 401)
}

//