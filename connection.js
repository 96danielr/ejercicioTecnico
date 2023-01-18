const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017");

const bd = mongoose.connection;

bd.on("connected", () => {
    console.log("conexion correcta a mongo db");
});

module.exports = mongoose;
