"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadAppInfo = void 0;
window.__mixspa__loaded_apps = {};

var loadAppInfo = function loadAppInfo(name, app) {
  if (window.__mixspa__loaded_apps.hasOwnProperty(name)) {
    return Promise.resolve(window.__mixspa__loaded_apps[name]);
  } else {
    var p = typeof app === 'string' ? fetch(app).then(function (res) {
      return res.json();
    }) : Promise.resolve(app);
    return p.then(function (info) {
      window.__mixspa__loaded_apps[name] = info;
      return Promise.resolve(info);
    });
  }
};

exports.loadAppInfo = loadAppInfo;