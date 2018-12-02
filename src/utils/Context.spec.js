import Context from './Context';

describe('Context', () => {
  describe('appInfo', () => {
    let appInfo = {
      name: 'test',
      tagName: 'test'
    };
    beforeEach(() => {
      window.__mixspa__context_apps = {};
      Context.addAppInfo('test', appInfo);
    });

    it('should have appInfo into global', () => {
      expect(Context.hasAppInfo('test')).toBeTruthy();
    });

    it('should save appInfo into global', () => {
      expect(Context.getAppInfo('test')).toEqual(appInfo);
    });
  });

  describe('url', () => {
    let url = 'http://test.com/test.js';

    it('should include url into global', () => {
      Context.addUrl(url);
      expect(Context.includeUrl(url)).toBeTruthy();
    });
  });
});
