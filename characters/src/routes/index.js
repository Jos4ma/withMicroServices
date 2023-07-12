const {Router} = require("express");
const controllers = require("../controllers")
const middlewares = require("../middlewares/index")


const router = Router();

router.get("/characters", controllers.getCharacters )

router.post("/characters", middlewares.validationCharacter, controllers.createCharacters)

module.exports = router;