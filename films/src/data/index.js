//const films = require("./films.json")
const axios = require("axios")

module.exports = {
    list: () => async () => {
            var valor = await axios.get("http://database:8002/Film")
            return valor.data
        },
    listOne: async (hola) => {
            var valor = await axios.get(`http://database:8002/Film/${hola}`)
            return valor.data
        },
}