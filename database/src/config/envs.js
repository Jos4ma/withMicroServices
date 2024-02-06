//require("dotenv").config({path:'../../.env'})
require("dotenv").config({path:'.env'})
//require("dotenv").config()
//console.log(process.env)

module.exports = {
    MONGO_URI: process.env.MONGO_URI,
}