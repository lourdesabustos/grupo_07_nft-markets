const express = require('express');
const app = express();
const path = require("path");
const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));

app.get("/", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get("/login", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});

app.listen(3031, () =>{
    console.log("Servidor corriendo en el puerto 3031")
});