// SEE: https://stackoverflow.com/questions/5178334/folder-structure-for-a-node-js-project

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('src'));

app.get("/", (req, res) => {
     res.sendFile(path.join(__dirname, '/src/pages/index.html'));
});

app.listen(port, () => {
     console.log("Server is running on port " + port);
});