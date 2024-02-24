const films = require("../data")
const {response} = require("../utils/index")

module.exports = async (req, res) => {
    var {_id} = req.params
    if (!_id)   var movie = await films.list()
    //throw Error("se fue a la mierda")
    else    var movie = await films.listOne(_id)
    //res.status(200).json(film)
    response( res, 200, movie)
}
