const { render } = require("ejs");

/**
 * Kirendereli a viewName paraméterben kapott HTML oldalt
 * @param {*} objRepo object repo
 * @param {*} viewName HTML oldal neve
 * @returns 
 */
module.exports = function(objRepo, viewName){
    return function(req, res){
        res.render(viewName);
        return next();
    }
}