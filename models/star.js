const Schema = require('mongoose').Schema;
let db = require('../config/db');

// Egy bolygó egy csillaghoz tartozik
// Egy csillagnak lehet több bolygója
// A csillag neve a csillagrendszer neve

const Star = db.model('Star', {
    name: String,
    radius: Number,
    mass: Number,
    absoluteMagnitude: Number,
    _planets: [{ type: Schema.Types.ObjectId, ref: 'Planet' }]
});

module.exports = Star;