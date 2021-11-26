/**
 * Middleware for deleting a planet
 * @param {Object} objRepo - The object repository
 * @returns {Object} function - The middleware function
 */
module.exports = (objRepo) => {
    return (req, res, next) => {
        // get the planet id from the request
        const { planet, id } = req.params;
        // get the planet model from the object repository
        const { PlanetModel, StarModel } = objRepo

        const url = `/system/${id}/`;

        // delete the planet from the database
        PlanetModel.findByIdAndRemove(planet, (err, planet) => {
            if (err) {
                return next();
            } else {
                // delete the planet from the system
                StarModel.findById(id, (err, star) => {
                    if (err) {
                        return next();
                    } else {
                        star._planets.pull(planet._id);
                        star.save((err) => {
                            if (err) {
                                return next();
                            } else {
                                res.redirect(url);
                                return next();
                            }
                        });
                    }
                });
            }
        });
    };
}