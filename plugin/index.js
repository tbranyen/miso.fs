// Core Node.js dependencies
var fs = require("fs");
var path = require("path");
// Underscore utility
var _ = require("underscore");
// Miso library
var Miso = require("miso.dataset");

/*
 * The Filesystem importer is responsible for fetching file contents from a
 * path.
 *
 * Parameters:
 *   options
 *     path - File path to load
 */
Miso.Importers.Filesystem = function(options) {
  options = options || {};

  // Ensure the filepath is absolute
  this.path = path.resolve(options.path);
};

_.extend(Miso.Importers.Filesystem.prototype, {
  fetch: function(options) {
    fs.readFile(this.path, function(err, contents) {
      if (err) {
        return options.error(err);
      }

      return options.success(contents.toString());
    });
  }
});
