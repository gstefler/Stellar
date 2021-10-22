const PORT = 3000;

const express = require('express');
const app = express();

app.listen(PORT, () => {console.log("Listening on http://127.0.0.1:" + PORT)});

app.use(express.static('static'));