/**
 * Middleware
 * Genereates a new random stellar system
 * @param {Object} objRepo - The object repository
 * @returns {Object} function - The middleware function
 */
module.exports = (objRepo) => {
    return (req, res, next) => {
        // list of random star names
        const { starNames, planetNames } = objRepo;

        const { StarModel, PlanetModel } = objRepo;
        let ids = [];

        // generate random planets between 1 and 5
        const numberOfPlanets = Math.floor(Math.random() * 5) + 1;
        for (let i = 0; i < numberOfPlanets; i++) {
            const planet = new PlanetModel();
            planet.name = planetNames[Math.floor(Math.random() * planetNames.length)];
            // random planet mass
            planet.mass = Math.floor(Math.random() * 1000) + 1;
            // random planet radius
            planet.radius = Math.floor(Math.random() * 1000) + 1;

            planet.orbitalSpeed = Math.floor(Math.random() * 10000) + 1;

            ids.push(planet._id);
            
            planet.save((err) => {
                if (err) {
                    return next();
                } else {
                    return next();
                }
            });
        }

        // generate random star
        const star = new StarModel();
        star.name = starNames[Math.floor(Math.random() * starNames.length)];
        // random star mass
        star.mass = Math.floor(Math.random() * 1000) + 1;
        // random star radius
        star.radius = Math.floor(Math.random() * 1000) + 1;
        // random absolute magnitude between -30 and 10
        star.absoluteMagnitude = Math.floor(Math.random() * 30) - 30;

        // add the planet ids to the star
        star._planets = ids;

        star.save((err) => {
            if (err) {
                return next();
            } else {
                return next();
            }
        }
        );
    };
}