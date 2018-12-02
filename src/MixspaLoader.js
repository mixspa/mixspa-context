import Context from './utils/Context';
import DomUtils from './utils/DomUtils';

class MixspaLoader {
  static addAppInfo(appInfo) {
    Context.addAppInfo(appInfo.name, appInfo);
  }

  static loadApp(name, url) {
    return MixspaLoader.loadAppInfo(name, url).then(appInfo => {
      return MixspaLoader.loadResources(appInfo.scripts.concat(appInfo.styles)).then(() => {
        return Promise.resolve(appInfo);
      });
    });
  }

  static loadSimpleApp(url) {
    return MixspaLoader.loadResource(url);
  }

  static loadAppInfo(name, url) {
    if (Context.hasAppInfo(name)) {
      return Promise.resolve(Context.getAppInfo(name));
    } else {
      return MixspaLoader.fetchAppInfo(url).then(appInfo => Context.addAppInfo(appInfo.name, appInfo) || appInfo);
    }
  }

  static loadResources(urls) {
    return Promise.all(urls.map(MixspaLoader.loadResource));
  }

  static loadResource(url) {
    if (Context.includeUrl(url)) {
      return Promise.resolve(url);
    } else {
      return DomUtils.loadResource(url).then(() => Context.addUrl(url) || url);
    }
  }

  static fetchAppInfo(url) {
    return fetch(url).then(res => res.json());
  }
}

export default MixspaLoader;
