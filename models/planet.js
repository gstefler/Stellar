const Schema = require('mongoose').Schema;
let db = require('../config/db');

const Planet = db.model('Planet', {
    name: String,
    orbitalSpeed: Number,
    mass: Number,
    radius: Number,
});

module.exports = Planet;