const reroutToSystems = require('../middleware/system/reroutToSystems');
const getSystems = require('../middleware/system/getSystems');
const render = require('../middleware/render');
const generateSystem = require('../middleware/system/generateSystem');
const reroutToSystem = require('../middleware/system/reroutToSystem');
const getSystem = require('../middleware/system/getSystem');
const generatePlanet = require('../middleware/planet/generatePlanet');
const reroutToPlanet = require('../middleware/planet/reroutToPlanet');
const delSystem = require('../middleware/system/delSystem');
const getPlanet = require('../middleware/planet/getPlanet');
const editPlanet = require('../middleware/planet/editPlanet');
const delPlanet = require('../middleware/planet/delPlanet');
const getStar = require('../middleware/star/getStar');
const editStar = require('../middleware/star/editStar');
const returnToStar = require('../middleware/star/returnToStar');


export default function(app){
    const objRepo = {};
    app.use('/', reroutToSystems(objRepo));
    app.get('/systems', getSystems(objRepo), render(objRepo, 'index'));
    app.get('/systems/new', generateSystem(objRepo), reroutToSystems());
    app.get('/systems/:systemid', getSystem(objRepo), render(objRepo, 'system'));
    app.get('/systems/new/:systemid/planet', generatePlanet(objRepo), reroutToPlanet(objRepo));
    app.get('/systems/del/:systemid', delSystem(objRepo), reroutToSystems(objRepo));
    app.get('/systems/:systemid/:planetid', getPlanet(objRepo), render(objRepo, 'planet'));
    app.get('/systems/edit/:systemid/:planetid', getPlanet(objRepo), render(objRepo, 'planet_edit'));
    app.use('/systems/edit/:systemid/:planetid', editPlanet(objRepo), reroutToPlanet(objRepo));
    app.use('systems/del/:systemid/:planetid', delPlanet(objRepo), reroutToSystem);
    app.get('/systems/:systemid/:starid', getStar(objRepo), render(objRepo, 'star'));
    app.get('/systems/edit/:systemid/:starid', getPlanet(objRepo), render(objRepo, 'star_edit'));
    app.use('/systems/edit/:systemid/:starid', editStar(objRepo), returnToStar(objRepo));
    app.use((req, res) => {res.status(404).render('not_found', { url: req.url })});
};