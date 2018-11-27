import { loadStyles, loadScripts } from './loadResource';

describe('loadResource', () => {
  describe('loadStyles', () => {
    beforeAll(() => {
      window.__mixspa__loaded_styles = [];
    });

    beforeEach(() => {
      document.body.appendChild = jest.fn().mockImplementation(dom => dom.onload());
    });

    it('should append twice for load styles', () => {
      return loadStyles(['http://app-one.mixspa.com/1.css', 'http://app-one.mixspa.com/2.css']).then(() => {
        expect(document.body.appendChild).toHaveBeenCalledTimes(2);
      });
    });

    it('should append once when one already loaded ', () => {
      return loadStyles(['http://app-one.mixspa.com/2.css', 'http://app-one.mixspa.com/3.css']).then(() => {
        expect(document.body.appendChild).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('loadScripts', () => {
    beforeAll(() => {
      window.__mixspa__loaded_scripts = [];
    });

    beforeEach(() => {
      document.body.appendChild = jest.fn().mockImplementation(dom => dom.onload());
    });

    it('should append twice for load scripts', () => {
      return loadScripts(['http://app-one.mixspa.com/1.js', 'http://app-one.mixspa.com/2.js']).then(() => {
        expect(document.body.appendChild).toHaveBeenCalledTimes(2);
      });
    });

    it('should append once when one already loaded ', () => {
      return loadScripts(['http://app-one.mixspa.com/2.js', 'http://app-one.mixspa.com/3.js']).then(() => {
        expect(document.body.appendChild).toHaveBeenCalledTimes(1);
      });
    });
  });

});
