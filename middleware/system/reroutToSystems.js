/**
 * Átirányít a kezdőoldalra, ahol az összes csillagrendszer van
 * @param {*} objectrepository 
 * @returns 
 */
module.exports = function (objectrepository) {
    return function (req, res) {
        res.redirect('/systems');
    };
};