const express = require("express")
const router = express.Router()
const postRoutes = require("../routes/post_routes")
const categoryRoutes = require("../routes/category_routes")
const mediaCatRoutes = require("../routes/media_cat_routes")


// Homepage-get request
router.get("/", (req, res) => res.send({ info: "Media-Hub API" }));
router.use('/posts', postRoutes)
router.use('/categories', categoryRoutes)
router.use('/media', mediaCatRoutes)

module.exports = router