//const films = require("./films.json")

module.exports = {
    list: () => async () => {
            var valor = await axios.get("http://database:8002/Film")
            return valor.data
        },
}