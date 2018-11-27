"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadScripts = exports.loadStyles = void 0;

var _domHelper = require("./domHelper");

window.__mixspa__loaded_styles = [];
window.__mixspa__loaded_scripts = [];

var loadDom = function loadDom(dom) {
  return new Promise(function (resolve, reject) {
    dom.onload = resolve;
    dom.onerror = reject;
    document.body.appendChild(dom);
  });
};

var loadStyles = function loadStyles(urls) {
  return Promise.all(urls.filter(function (url) {
    return !window.__mixspa__loaded_styles.includes(url);
  }).map(function (url) {
    return loadDom((0, _domHelper.createStyle)(url)).then(function () {
      return window.__mixspa__loaded_styles.push(url);
    });
  }));
};

exports.loadStyles = loadStyles;

var loadScripts = function loadScripts(urls) {
  return Promise.all(urls.filter(function (url) {
    return !window.__mixspa__loaded_scripts.includes(url);
  }).map(function (url) {
    return loadDom((0, _domHelper.createScript)(url)).then(function () {
      return window.__mixspa__loaded_scripts.push(url);
    });
  }));
};

exports.loadScripts = loadScripts;