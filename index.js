const express = require("express");
const path = require("path");

const app = express()
const PORT = 5000;

//for geting data form 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(__dirname));

app.get("/", (req, res) => {

    const filePath = (__dirname, "index.html");
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error("Error sending the file:", err.message);
            res.status(500).send("Error sending the file");
        }
    });
});



//server
app.listen(PORT, () => {
    console.log(`app is listening to PORT ${PORT}`)
})