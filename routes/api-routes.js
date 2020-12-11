const router = require("express").Router();

let tables = [];
let waitList = [];

router.post("/tables", (req, res) => {
    console.log(res.body)
    if(tables.length >= 5) {
        waitList.push(req.body)
        res.json(false)
    } else {
        tables.push(req.body)
        res.json(true)
    }
    
});

router.get("/tables", (req, res) => {
    res.json(tables)
})

router.get("/waitlist", (req, res) => {
    res.json(waitList)
})

router.post("/clear", (req, res) => {
    tables = []
    waitList = []
    res.send({ msg: "success!" })
})

module.exports = router;