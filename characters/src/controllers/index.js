const {catchedAsync} = require("../utils/index")

// module.exports = {
//     getCharacters: catchedAsync(require("./getCharacters")),
//     createCharacters: catchedAsync(require("./createCharacters"))
// }

module.exports = {
    getCharacters: catchedAsync(require("./getCharacters")),
    createCharacters: catchedAsync(require("./createCharacters"))
}