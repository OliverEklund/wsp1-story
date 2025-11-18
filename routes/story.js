import express from "express"
import fs from "fs"
const router = express.Router()
const storyData = JSON.parse(fs.readFileSync("./story/story.json", "utf-8"))
const findPage = (id) => {
    return storyData.find(page => page.id == id)
}

router.get("/", (req, res) => {
    res.render("story.njk", {
        title: "Här börjar ditt soloäventyr",
        message: "Det kommer vara val i detta soloäventyr du gör genom att trycka på knappar."
    })
})

router.get("/:id", (req, res) => {
    const id = req.params.id
    const page = findPage(id)
    console.log(page)
    res.render("storypage.njk", {
        page
    })
})


export default router