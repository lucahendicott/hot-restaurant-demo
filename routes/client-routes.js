const router = require("express").Router();
const path = require("path")

router.get("/", (req, res) => {
    res.sendFile(path.join( __dirname, "../client/index.html"))
})

router.get("/tables", (req, res) => {
    res.sendFile(path.join( __dirname, "../client/tables.html"))
})

router.get("/reserve", (req, res) => {
    res.sendFile(path.join( __dirname, "../client/reserve.html"))
})

module.exports = router