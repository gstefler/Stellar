/**
 * Gets the data from the url to edit a planet or star.
 * @param {Object} objRepo - The object repository
 * @returns {Object} function - The middleware function
 */
module.exports = (objRepo) => {
    return (req, res, next) => {
        const { PlanetModel, StarModel } = objRepo;
        const { id } = req.params;
        const { planet } = req.params;

        if (planet) {
            PlanetModel.findById(planet, (err, planet) => {
                if (err) {
                    return next();
                } else {
                    res.locals.planet = planet;
                    res.locals.id = id;
                    return next();
                }
            });
        } else {
            StarModel.findById(id, (err, star) => {
                if (err) {
                    return next();
                } else {
                    res.locals.star = star;
                    return next();
                }
            });
        }
    };
}