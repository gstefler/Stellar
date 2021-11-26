const { render } = require("ejs");

/**
 * Render a view
 * @param {object} objRepo The data to pass to the view
 * @param {string} view The view to render
 */
module.exports = (objRepo, view) => {
  return (req, res) => {
    res.render(view, objRepo);
  };
};
