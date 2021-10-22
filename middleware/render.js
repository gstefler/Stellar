/**
 * Kirendereli a viewName paraméterben kapott HTML oldalt
 * @param {*} objRepo object repo
 * @param {*} viewName HTML oldal
 * @returns 
 */
module.exports = function(objRepo, viewName){
    return function(req, res){
        console.log("rendering " + viewName)
        return next();
    }
}