import express from "express";

import fs from "fs";

import getDraft from "./routes/getDraft.js";

import addContact from "./routes/addContact.js";

const hostname = "127.0.0.1";

//changement le port pour ne pas boucher
const port = 8000;

const app = express();

//Cet exemple illustre une fonction middleware sans chemin de montage. La fonction est exécutée à chaque fois que l’application reçoit une demande.
app.use(function (req, res, next) {
    // console.log(req.body)

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1; // Les mois commencent à 0, ajoute 1
    const year = today.getFullYear();

    const formattedDate = `${year}-${month}-${day}`;

    const reqMethod = req.method;
    // console.log(reqMethod);
    const logContent = formattedDate + " - " + reqMethod;
    const logName = formattedDate + "-api-log.txt";
    console.log(logContent);
    console.log(logName);

    //création du ficher
    fs.appendFile(`logs/${logName}`, logContent, function (err) {
        if (err) throw err;
        console.log("Fichier créé !");
    });
    next();
});

app.get("/form", getDraft);

app.post("/form", addContact);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
