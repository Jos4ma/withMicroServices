const characters = require("../data")
const {response} = require("../utils/index")

module.exports = async (req, res) => {
    //throw Error("se fue a la mierda")
    const personajes = await characters.create()
    //res.status(200).json(personajes);
    response(res, 200, personajes)
}