const express = require("express");
const app = express();
const path = require("path");

//reqPath is for the file paths
let reqPath = path.join(__dirname, '../');

// app.use is for loading static files like scripts
app.use(express.static(reqPath));

app.get("/", function (req, res) {
    res.sendFile(reqPath + "index.html");
});

app.get("/signup", function (req, res) {
    res.sendFile(reqPath + "signup.html");
});

app.listen(3000, function () {
    console.log("Server started at port 3000");
});