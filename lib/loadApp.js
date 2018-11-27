"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _loadAppInfo = require("./utils/loadAppInfo");

var _loadResource = require("./utils/loadResource");

var loadApp = function loadApp(name, app) {
  return (0, _loadAppInfo.loadAppInfo)(name, app).then(function (appInfo) {
    return Promise.all([(0, _loadResource.loadStyles)(appInfo.styles), (0, _loadResource.loadScripts)(appInfo.scripts)]).then(function () {
      return Promise.resolve(appInfo.tagName);
    });
  });
};

var _default = loadApp;
exports.default = _default;