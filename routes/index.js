import express from "express"
import fs from "fs"

const router = express.Router()
router.get("/", (req, res) => {
    res.render("index.njk", {
        title: "Välkommen till ett soloäventyr",
        message: "En Tristan & Isolde Remix! Detta är ett skolarbete"
    })
})

export default router