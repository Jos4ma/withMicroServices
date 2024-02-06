const characters = require("../data")
const { response} = require("../utils/index")

module.exports = async (req, res) => {
        const { _id } = req.params;
        if (!_id)
            var personajes = await characters.list()
        else
            var personajes = await characters.listOne(_id)
        //res.status(200).json(personajes);
    response(res, 200, personajes)
}