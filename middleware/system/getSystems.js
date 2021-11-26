/**
 * Middleware to get all the solar systems from the database.
 * @param {Object} objRepo - The object repository
 * @returns {Object} function - The middleware function
 */
module.exports = (objRepo) => {
    return (req, res, next) => {
        const { StarModel } = objRepo;

        // get the stars name and id from mongodb
        StarModel.find({}, 'name id', (err, stars) => {
            if (err) {
                return next();
            } else {
                res.locals.stars = stars;
                return next();
            }
        });
    };
}