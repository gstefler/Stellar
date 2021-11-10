const PORT = 3000;

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// Statikus fileok kiszolgálására
app.use(express.static('static'));

// Routing, a routing txt-ben megírtak alapján
require('./route/routes')(app);


// non existent route
app.get('*', (req, res) => {
    res.status(404).render('not_found');
});

app.listen(PORT, () => {console.log("Listening on http://127.0.0.1:" + PORT)});