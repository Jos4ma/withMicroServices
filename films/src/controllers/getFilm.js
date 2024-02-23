const films = require("../data")

module.exports = async (req, res) => {
    var {_id} = req.params
    if (!_id)   var film = await films.list()
    //throw Error("se fue a la mierda")
    else    var film = await films.listOne(_id)
    res.status(200).json(film)
}
