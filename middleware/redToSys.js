/**
 * Middleware to redirect to /systems
*/
module.exports = (objRepo) => {
    return (req, res, next) => {
        res.redirect('/systems');
    };
}