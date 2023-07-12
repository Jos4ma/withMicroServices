const films = require("../data")

module.exports = async (req, res) => {
    const perro = await films.list()
    res.status(200).json(perro)
}
