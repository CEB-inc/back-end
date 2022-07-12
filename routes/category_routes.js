const express = require("express");
const router = express.Router();

const categories = ["Review", "Blog"];

// Categories-page get request. The response is the categories array
router.get("/", (req, res) => res.send(categories));

module.exports = router;
