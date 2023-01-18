const express = require("express");
const app = express();

// importar coneccion mongo DB
const db = require("./connection");

app.get("/", (req, res) => {
    res.end("bienvenidos al servidor de backend");
});

// congifurar servidor basico

app.listen(5000, function () {
    console.log("el seidor esta corriendo correctamente");
});
