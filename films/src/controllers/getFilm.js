const films = require("../data")

module.exports = async (req, res) => {
    var perro = await films.list()
    //throw Error("se fue a la mierda")
    res.status(200).json(perro)
}
