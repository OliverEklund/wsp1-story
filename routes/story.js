import express from "express"
import fs from "fs"
import { title } from "process"

const router = express.Router()
router.get("/story", (req, res) => {
    res.render("story.njk", {
        title: "Här börjar ditt soloäventyr",
        message: "Det kommer vara val i detta soloäventyr du gör genom att trycka på knappar."
    })
})


export default router