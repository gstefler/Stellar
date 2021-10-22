const reroutToSystems;
const getSystems;
const render;
const generateSystem;
const reroutToSystem;
const getSystem;
const generatePlanet;
const reroutToPlanet;
const delSystem;
const getPlanet;
const editPlanet;
const delPlanet;
const getStar;
const editStar;


module.exports = function(app){
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
}