/**
 * Genereates a new planet for the system.
 * @param {Object} objRepo - The object repository
 * @returns {Object} function - The middleware function
 */
module.exports = (objRepo) => {
    return(req, res, next) => {
        const { StarModel, PlanetModel } = objRepo;
        const { id } = req.params;
        const { planetNames } = objRepo;

        const planet = new PlanetModel();
        planet.name = planetNames[Math.floor(Math.random() * planetNames.length)];
        planet.mass = Math.floor(Math.random() * 1000) + 1;
        planet.radius = Math.floor(Math.random() * 1000) + 1;
        planet.orbitalSpeed = Math.floor(Math.random() * 10000) + 1;

        planet.save();

        StarModel.findById(id, (err, star) => {
            if (err) {
                return next();
            } else {
                star._planets.push(planet._id);
                star.save((err) => {
                    if (err) {
                        return next();
                    } else {
                        return next();
                    }
                });
            }
        });
    };
};
