"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Context = _interopRequireDefault(require("./utils/Context"));

var _DomUtils = _interopRequireDefault(require("./utils/DomUtils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MixspaLoader =
/*#__PURE__*/
function () {
  function MixspaLoader() {
    _classCallCheck(this, MixspaLoader);
  }

  _createClass(MixspaLoader, null, [{
    key: "addAppInfo",
    value: function addAppInfo(appInfo) {
      _Context.default.addAppInfo(appInfo.name, appInfo);
    }
  }, {
    key: "loadApp",
    value: function loadApp(name, url) {
      return MixspaLoader.loadAppInfo(name, url).then(function (appInfo) {
        return MixspaLoader.loadResources(appInfo.scripts.concat(appInfo.styles)).then(function () {
          return Promise.resolve(appInfo);
        });
      });
    }
  }, {
    key: "loadSimpleApp",
    value: function loadSimpleApp(url) {
      return MixspaLoader.loadResource(url);
    }
  }, {
    key: "loadAppInfo",
    value: function loadAppInfo(name, url) {
      if (_Context.default.hasAppInfo(name)) {
        return Promise.resolve(_Context.default.getAppInfo(name));
      } else {
        return MixspaLoader.fetchAppInfo(url).then(function (appInfo) {
          return _Context.default.addAppInfo(appInfo.name, appInfo) || appInfo;
        });
      }
    }
  }, {
    key: "loadResources",
    value: function loadResources(urls) {
      return Promise.all(urls.map(MixspaLoader.loadResource));
    }
  }, {
    key: "loadResource",
    value: function loadResource(url) {
      if (_Context.default.includeUrl(url)) {
        return Promise.resolve(url);
      } else {
        return _DomUtils.default.loadResource(url).then(function () {
          return _Context.default.addUrl(url) || url;
        });
      }
    }
  }, {
    key: "fetchAppInfo",
    value: function fetchAppInfo(url) {
      return fetch(url).then(function (res) {
        return res.json();
      });
    }
  }]);

  return MixspaLoader;
}();

var _default = MixspaLoader;
exports.default = _default;