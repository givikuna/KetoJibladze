import { Router, request, response } from "express";
import path from "path";

const router = Router();

router.get("/", (req: request, res: response): void => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/:page", (req: request, res: response): void => {
    const page = req.params.page;
    const allowedPages = ["about", "pricing"];

    if (allowedPages.includes(page)) {
        res.sendFile(path.join(__dirname, `../public/${page}.html`));
    } else {
        res.status(404).send("Page Not Found");
    }
});

router.get("/albums/:album/:session", (req: request, res: response): void => {
    const { album, session }: { album: string; session: string } = req.params;

    res.send(/* HTML */ `<h1>Viewing session: ${session} in Album: ${album}</h1>`);
});

export default router;
