
import { loadAppInfo } from './loadAppInfo';

describe('loadAppInfo', () => {
  let appPromise;

  describe('load from parameter', () => {
    let appOneInfo = {
      name: 'AppOne',
      tagName: 'app-one',
      scripts: ['http://app-one.mixspa.com/app.js'],
      styles: ['http://app-one.mixspa.com/app.css']
    };

    beforeEach(() => {
      appPromise = loadAppInfo('AppOne', appOneInfo);
    });

    it('should have the same app info', () => {
      return appPromise.then(appInfo => {
        expect(appInfo).toEqual(appOneInfo);
      });
    });

    it('should return same app info when load again', () => {
      return loadAppInfo('AppOne', {}).then(appInfo => {
        expect(appInfo).toEqual(appOneInfo);
      });
    });
  });

  describe('load from remote', () => {
    let appTwoInfo = {
      name: 'AppTwo',
      tagName: 'app-two',
      scripts: ['http://app-two.mixspa.com/app.js'],
      styles: ['http://app-two.mixspa.com/app.css']
    };

    beforeEach(() => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(appTwoInfo)
      }));
      appPromise = loadAppInfo('AppTwo', 'http://app-two.mixspa.com/app.json');
    });

    it('should have the same app info', () => {
      return appPromise.then(appInfo => {
        expect(appInfo).toEqual(appTwoInfo);
      });
    });
  });
});
