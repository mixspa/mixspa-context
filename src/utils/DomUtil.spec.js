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
});
