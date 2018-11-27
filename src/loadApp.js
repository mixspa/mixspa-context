import { loadAppInfo } from './utils/loadAppInfo';
import { loadStyles, loadScripts } from './utils/loadResource';

const loadApp = (name, app) => {
  return loadAppInfo(name, app).then(appInfo => {
    return Promise.all([loadStyles(appInfo.styles), loadScripts(appInfo.scripts)])
      .then(() => Promise.resolve(appInfo.tagName))
  });
};

export default loadApp;
