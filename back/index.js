import express from "express";

import getDraft from "./routes/getDraft.js";

import addContact from "./routes/addContact.js";

const hostname = "127.0.0.1";

//changement le port pour ne pas boucher
const port = 8000;

const app = express();

app.get("/form", getDraft);

app.post("/form", addContact);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
