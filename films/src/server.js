const express = require("express")
const morgan = require("morgan")

const server = express()

server.use(express.json())
server.use(morgan("dev"))
server.use(require("./routes"))

server.use("*", (req,res,next) => {
    res.status(404).send("Is not an endpoint")
})

server.use((err, req, res, next) => {
    res.status(err.statusCode).send({
    error: true,
    message: err.message
})
})

module.exports = server




