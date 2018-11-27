import loadApp from './loadApp';

describe('loadApp', () => {
  let appOneInfo = {
    name: 'AppOne',
    tagName: 'app-one',
    scripts: [],
    styles: []
  };

  it('should load app info and return tag name', () => {
    return loadApp('AppOne', appOneInfo).then(tagName => {
      expect(tagName).toBe('app-one');
    });
  });
});
