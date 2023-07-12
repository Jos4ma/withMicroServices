const characters = require("../data")
const { response} = require("../utils/index")

module.exports = async (req, res) => {
    const personajes = await characters.list()
    //res.status(200).json(personajes);
    response(res, 200, personajes)
}