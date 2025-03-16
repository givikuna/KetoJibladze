import express, { application } from "express";
import path from "path";
import routes from "./routes";

const app: application = express();
const PORT: number = 8080;

app.use(express.static(path.join(__dirname, "../public")));

app.use(routes);

app.listen(PORT, (): void => {
    console.log(`Server running at http://localhost:${PORT}`);
});
