const PORT = 3000;

const express = require('express');
const app = express();

// Statikus fileok kiszolgálására
app.use(express.static('static'));

app.set('view engine', 'ejs');

// Routing, a routing txt-ben megírtak alapján
require('./route/routes')(app);

app.listen(PORT, () => {console.log("Listening on http://127.0.0.1:" + PORT)});