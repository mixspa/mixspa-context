import DomUtil from './DomUtil';

describe('DomUtil', () => {
  describe('#create script', () => {
    let script = DomUtil.createScript('http://test-url/');

    it('should set src attribute', () => {
      expect(script.src).toBe('http://test-url/');
    });

    it('should set type attribute', () => {
      expect(script.type).toBe('text/javascript');
    });

    it('should set charset attribute', () => {
      expect(script.charset).toBe('UTF-8');
    });
  });

  describe('#create style', () => {
    let style = DomUtil.createStyle('http://test-url/');

    it('should set href attribute', () => {
      expect(style.href).toBe('http://test-url/');
    });

    it('should set type attribute', () => {
      expect(style.type).toBe('text/css');
    });

    it('should set rel attribute', () => {
      expect(style.rel).toBe('stylesheet');
    });
  });

  describe('#create iframe', () => {
    let iframe = DomUtil.createIFrame('http://test-url/');

    it('should set src attribute', () => {
      expect(iframe.src).toBe('http://test-url/');
    });
  });
});
