import express, {Request, Response} from "express";
const router = express.Router();
import links from '../models/links'

router.get("/shrt/:id", async (req: express.Request, res: express.Response) => {
    const urlData = await links.findOne({urlId: req.params.id})
    res.status(200).redirect(urlData.endUrl)
})

router.post("/shrt/", async (req: express.Request, res: express.Response) => {
    const {email, urlId, endUrl} = req.body
    const hasAlreadyBeenRegistered = await links.findOne({urlId: urlId})
    if (hasAlreadyBeenRegistered) {
        return res.status(404).send("This url has already been registered")
    }
    const newLink = new links({
        ownerEmail: email,
        urlId: urlId,
        endUrl: endUrl
    })
    await newLink.save()
    .catch((error: any) => {
        console.error(error)
    })
    res.status(200).send(`Link created\nUse: social.dev/${urlId} to access it`)
})


export { router as mainRoute }