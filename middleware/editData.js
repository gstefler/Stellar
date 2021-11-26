/**
 * Handles the edit data request
 * The data is from a post request
 * @param {Object} objRepo - The object repository
 * @returns {Object} function - The middleware function
 */
module.exports = (objRepo) => {
    return (req, res, next) => {
        const { PlanetModel, StarModel } = objRepo;
        const { id } = req.params;
        const { planet } = req.params;
        const { mass } = req.body;
        const { radius } = req.body;
        const { orbitalSpeed } = req.body;
        const { absoluteMagnitude } = req.body;

        if (planet) {
            PlanetModel.findById(planet, (err, planet) => {
                if (err) {
                    return next();
                } else {
                    planet.mass = mass;
                    planet.radius = radius;
                    planet.orbitalSpeed = orbitalSpeed;
                    planet.save((err) => {
                        if (err) {
                            return next();
                        } else {
                            res.redirect(`/system/${id}`);
                            return next();
                        }
                    });
                }
            });
        } else {
            StarModel.findById(id, (err, star) => {
                if (err) {
                    return next();
                } else {
                    star.mass = mass;
                    star.radius = radius;
                    star.absoluteMagnitude = absoluteMagnitude;
                    star.save((err) => {
                        if (err) {
                            return next();
                        } else {
                            res.redirect(`/system/${id}`);
                            return next();
                        }
                    });
                }
            });
        }
    };
}
