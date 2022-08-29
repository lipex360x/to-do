/* eslint-disable */
const components = require("./components");
const forms = require("./forms");
const pages = require("./pages");

module.exports = function (plop) {
  plop.setGenerator("Component", components);
  plop.setGenerator("Form", forms);
  plop.setGenerator("Page", pages);
};
