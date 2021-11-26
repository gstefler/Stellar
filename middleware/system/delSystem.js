/**
 * Middleware to delete a system from the database.
 * @param {Object} objRepo - The object repository
 * @returns {Object} function - The middleware function
 */
module.exports = (objRepo) => {
    return (req, res, next) => {
        // get the system id from the request
        const { id } = req.params;
        // get the system model from the object repository
        const { StarModel, PlanetModel } = objRepo;
        // delete the system and its planets from the database
        StarModel.findByIdAndRemove(id, (err, system) => {
            if (err) {
                return next();
            } else {
                // delete the planets
                system._planets.forEach(planet => {
                    PlanetModel.findByIdAndRemove(planet, (err) => {
                        if (err) {
                            return next();
                        }
                    });
                });
                return next();
            }
        });
    };
};