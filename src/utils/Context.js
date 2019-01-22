window.__mixspa__context_apps = window.__mixspa__context_apps || {};
window.__mixspa__context_urls = window.__mixspa__context_urls || [];

class Context {
  static addAppInfo(name, appInfo) {
    window.__mixspa__context_apps[name] = appInfo;
  }

  static getAppInfo(name) {
    return window.__mixspa__context_apps[name];
  }

  static hasAppInfo(name) {
    return window.__mixspa__context_apps.hasOwnProperty(name);
  }

  static withoutUrl(url) {
    return !window.__mixspa__context_urls.includes(url);
  }

  static addUrl(url) {
    window.__mixspa__context_urls.push(url);
  }
}

export default Context;
