const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/routes.js')(app);

app.listen(3000, () => {
    console.log('app listening on http://127.0.0.1:3000');
});