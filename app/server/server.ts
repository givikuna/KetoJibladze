import * as express from "express";
import * as path from "path";

const app: express.Application = express();
const PORT: number = 8080;

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req: express.Request, res: express.Response): void => {
    req.query;
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(PORT, (): void => {
    console.log(`Server running at http://localhost:${PORT}`);
});
