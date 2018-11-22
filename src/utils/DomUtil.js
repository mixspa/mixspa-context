class DomUtil {
  static createScript(src) {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'UTF-8'
    script.src = src;
    return script;
  }
}

export default DomUtil;
