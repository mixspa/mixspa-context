"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStyle = exports.createScript = void 0;

var createScript = function createScript(src) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.charset = 'UTF-8';
  script.src = src;
  return script;
};

exports.createScript = createScript;

var createStyle = function createStyle(href) {
  var style = document.createElement('link');
  style.type = 'text/css';
  style.rel = 'stylesheet';
  style.href = href;
  return style;
};

exports.createStyle = createStyle;