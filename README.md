miso-fs
=======

A Miso Dataset FileSystem Importer for Node.js environments.

## Installation ##

To install the importer extension, simply use NPM to install locally **or**
globally, depending on your needs.  It is recommended to install local to your
project.

``` bash
npm install miso.fs
```

To load the plugin into Miso.Dataset, simply use the `load` function as soon
as you have access to the `Miso` object.

``` javascript
// Require the Miso Dataset package.
var Miso = require("miso.dataset");

// Load in the Miso FS importer.
Miso.load("miso.fs");
```

## Configuration ##

To load in data from the filesystem simply make a `Dataset` and specify the
importer and `path` location.

``` javascript
var ds = new Miso.Dataset({
  // Paths can be relative or absolute.
  path: "/some/path/here",

  // Make sure you specify the filesystem importer.
  importer: Miso.Importers.Filesystem
});
```
