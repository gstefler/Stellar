/**
 * Middleware to put one system in the request
 * @param {Object} objRepo The object repository
 * @returns {Object} function - The middleware function
 */
module.exports = (objRepo) => {
    return (req, res, next) => {
        // get the system id from the request
        const { id } = req.params;
        // get the system model from the object repository
        const { StarModel, PlanetModel } = objRepo;
        // get the system and its planets from the database
        StarModel.findById(id).populate('_planets').exec((err, system) => {
            if (err) {
                return next();
            } else {
                // put the system in the request
                res.locals.system = system;
                // put the planets in the request
                res.locals.system.planets = system._planets;
                return next();
            }
        }
        );
    }
}