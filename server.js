const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get("/", (req, res) => {
     res.sendFile(path.join(__dirname, '/public/pages/index.html'));
});

app.get("/test", (req, res) => {
     res.sendFile(path.join(__dirname, '/public/pages/index2.html'));
});

app.listen(port, () => {
     console.log("Server is running on port " + port);
});