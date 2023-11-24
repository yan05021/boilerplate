import express from "express";

import getDraft from "./routes/getDraft.js";

const hostname = "127.0.0.1";
const port = 3000;

const app = express();

app.get("/form", getDraft);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
