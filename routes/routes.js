const render = require('../middleware/render');
const generateSystem = require('../middleware/system/generateSystem');
const getSystem = require('../middleware/system/getSystem');
const getSystems = require('../middleware/system/getSystems');
const delSystem = require('../middleware/system/delSystem');
const newPlanet = require('../middleware/planet/newPlanet');
const redToSys = require('../middleware/redToSys');
const reload = require('../middleware/system/reload');
const deletePlanet = require('../middleware/planet/deletePlanet');
const getEditData = require('../middleware/getEditData');
const editData = require('../middleware/editData');

const PlanetModel = require('../models/planet');
const StarModel = require('../models/star');

module.exports = function (app) {
    const starNames = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta', 'Iota', 'Kappa', 'Lambda', 'Mu', 'Nu', 'Xi', 'Omicron', 'Pi', 'Rho', 'Sigma', 'Tau', 'Upsilon', 'Phi', 'Chi', 'Psi', 'Omega', "Sirius", "Canopus", "Arcturus", "Alpha Centauri A", "Vega", "Rigel", "Procyon", "Achernar", "Betelgeuse", "Hadar", "Capella A", "Altair", "Aldebaran", "Capella B", "Spica", "Antares", "Pollux", "Fomalhaut", "Deneb", "Mimosa"]
    const planetNames = ["Achelous", "Oceanu", "Siren", "Acheron", "Achilles", "Actaeon", "Admetus", "Adoni", "Aeacus", "Aeëtes", "Aegisthus", "Aegyptus", "Aeneas", "Aeolus", "Asclepiu", "Agamemnon", "Aglaia", "Ajax", "Alcestis", "Alcyone", "Pleiades", "Furies", "Althaea", "Amazons", "Ero", "Amphion", "Amphitrite", "Amphitryon", "Anchises", "Andromache", "Andromeda", "Anteros", "Antigone", "Antinoüs", "Venus", "Apollo", "Aquilo", "Arachne", "Mars", "Argo", "Argus", "Ariadne", "Arion", "Artemis", "Asclepius", "Astarte", "Sterop", "Astraea", "Atalanta", "Minerva", "Atlas", "Atreus", "Atropos", "Fates", "Eo"]
    const objRepo = {
        PlanetModel,
        StarModel,
        starNames,
        planetNames
    };
    

    app.get('/system/edit/:id', getEditData(objRepo), render(objRepo, 'edit'));
    app.get('/system/edit/planet/:id/:planet', getEditData(objRepo), render(objRepo, 'edit'));

    app.use('/system/edit/planet/:id/:planet', editData(objRepo));
    app.use('/system/edit/:id', editData(objRepo));

    app.get('/system/:id/:planet/delete', deletePlanet(objRepo), reload(objRepo));
    app.get('/system/:id/new', newPlanet(objRepo), reload(objRepo));

    app.get('/system/:id/delete', delSystem(objRepo),  redToSys());

    app.get('/system/:id', getSystem(objRepo), render(objRepo, 'system'));

    app.get('/systems/new', generateSystem(objRepo), redToSys());
    
    app.get('/systems', getSystems(objRepo), render(objRepo, 'index'));

    app.get('/', redToSys());



    app.use((req, res) => {
        res.status(404).render('404', { url: req.url });
    });
};