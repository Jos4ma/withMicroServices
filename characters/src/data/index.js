const characters = require("./characters.json")
const axios = require("axios")

module.exports = {
    list: async () => {
        // var valor = await axios.get("http://database:8004/Character")
        var valor = await axios.get("http://localhost:8004/Character")
        return valor.data
        //return characters
    },
    create: () => {
        throw Error("Error al crear el personaje")
    }
}