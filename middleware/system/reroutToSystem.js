/**
 * Átirányít egy csillagrendszerhez
 * @param {*} objectrepository 
 * @returns 
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};