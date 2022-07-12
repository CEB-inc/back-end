const express = require("express")
const router = express.Router()

const media = ["Music", "Games", "Movies"];

router.get("/", (req, res) => res.send(media));

module.exports = router