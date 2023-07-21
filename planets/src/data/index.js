//const valor = require("./planets.json")
const axios = require("axios")

module.exports = {
    list: async () => {
        var valor = await axios.get("http://database:8003/Planet")
        return valor.data
    },
}