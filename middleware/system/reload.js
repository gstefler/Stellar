/**
 * Middleware to reload the page
 */
module.exports = (objRepo) => {
    return (req, res, next) => {
        const page_url = req.originalUrl;
        const url = page_url.replace('/new', '');
        res.redirect(url);
    };
}