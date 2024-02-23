const {Router} = require("express")
const controllers = require("../controllers")

const router = Router()

router.get("/films", controllers.getFilms )

router.get("/films/:_id", controllers.getFilms )

module.exports = router