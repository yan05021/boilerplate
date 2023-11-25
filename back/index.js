import express from "express";

import fs from "fs";

import getDraft from "./routes/getDraft.js";

import addContact from "./routes/addContact.js";

const hostname = "127.0.0.1";

//changement le port pour ne pas boucher
const port = 8000;

const app = express();

// pour parser le corps de la requête en JSON
app.use(express.json());

//Cet exemple illustre une fonction middleware sans chemin de montage. La fonction est exécutée à chaque fois que l’application reçoit une demande.
app.use(function (req, res, next) {
    // console.log(req.body)
    // console.log(req.body.lastName);
    const lastName = req.body.lastName;

    const date = new Date().toLocaleDateString("en-GB");

    const reqMethod = req.method;
    // console.log(reqMethod);
    const logContent = date + " - " + reqMethod;
    const logName = date + "-" + lastName + "-log.txt";
    console.log(logContent);
    console.log(logName);

    //création du ficher , mais ou ajoute le chemin pour y mettre?
    fs.appendFile("nouveauFichier.txt", "Mon contenu", function (err) {
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
