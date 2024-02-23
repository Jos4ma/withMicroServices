//const planet = require("./planets.json")
const axios = require("axios")

module.exports = {
    list: async () => {
        var valor = await axios.get("http://localhost:8004/Planet")
        return valor.data
    },
}