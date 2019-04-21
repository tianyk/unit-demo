let debug = function () { };

if (process.env.NODE_ENV !== "production") {
  debug = require("debug");
}

module.exports = debug;