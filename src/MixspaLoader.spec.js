import MixspaLoader from './MixspaLoader';

describe('MixspaLoader', () => {
  let appTestName = 'AppTest';
  let appTestUrl = 'http://app-test.com/app-test.json';
  let appTestInfo = {
    name: appTestName,
    tagName: 'app-test',
    styles: ['http://app-test.com/app-test.css'],
    scripts: ['http://app-test.com/app-test.js']
  };

  beforeEach(() => {
    window.__mixspa__context_apps = {};
    window.__mixspa__context_urls = [];

    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(appTestInfo)
    }));
    document.body.appendChild = jest.fn().mockImplementation(dom => dom.onload());
  });

  describe('loadApp with url', () => {
    it('should load app info & app resources', () => {
      return MixspaLoader.loadApp(appTestName, appTestUrl).then(appInfo => {
        expect(appInfo).toEqual(appTestInfo);
      });
    });

    it('should fetch app info', () => {
      return MixspaLoader.loadApp(appTestName, appTestUrl).then(() => {
        expect(global.fetch).toHaveBeenCalled();
      });
    });

    it('should fetch app resources', () => {
      return MixspaLoader.loadApp(appTestName, appTestUrl).then(() => {
        expect(document.body.appendChild).toHaveBeenCalled();
      });
    });

    it('should do not fetch when load second time', () => {
      return MixspaLoader.loadApp(appTestName, appTestUrl).then(() => {
        return MixspaLoader.loadApp(appTestInfo.name, '').then(() => {
          expect(global.fetch).toHaveBeenCalledTimes(1);
          expect(document.body.appendChild).toHaveBeenCalledTimes(2);
        });
      });
    });
  });

  describe('loadApp with name', () => {
    beforeEach(() => {
      MixspaLoader.addAppInfo(appTestInfo);
    });

    it('should load app info & app resources', () => {
      return MixspaLoader.loadApp(appTestName).then(appInfo => {
        expect(appInfo).toEqual(appTestInfo);
      });
    });

    it('should do not fetch app info', () => {
      return MixspaLoader.loadApp(appTestName).then(() => {
        expect(global.fetch).not.toHaveBeenCalled();
      });
    });

    it('should fetch app resources', () => {
      return MixspaLoader.loadApp(appTestName).then(() => {
        expect(document.body.appendChild).toHaveBeenCalled();
      });
    });

    it('should do not fetch when load second time', () => {
      return MixspaLoader.loadApp(appTestName).then(() => {
        return MixspaLoader.loadApp(appTestName).then(() => {
          expect(global.fetch).not.toHaveBeenCalled();
          expect(document.body.appendChild).toHaveBeenCalledTimes(2);
        });
      });
    });
  });

  describe('loadSimpleApp', () => {
    let appSimpleUrl = 'http://app-simple.com/app-simple.js';

    it('should load app resource', () => {
      return MixspaLoader.loadSimpleApp(appSimpleUrl).then(url => {
        expect(url).toBe(appSimpleUrl);
      });
    });

    it('should fetch app resource', () => {
      return MixspaLoader.loadSimpleApp(appSimpleUrl).then(() => {
        expect(document.body.appendChild).toHaveBeenCalled();
      });
    });

    it('should do not fetch app resource when load second time', () => {
      return MixspaLoader.loadSimpleApp(appSimpleUrl).then(() => {
        return MixspaLoader.loadSimpleApp(appSimpleUrl).then(() => {
          expect(document.body.appendChild).toHaveBeenCalledTimes(1);
        });
      });
    });
  });
});
