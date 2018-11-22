class DomUtil {
  static createScript(src) {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'UTF-8'
    script.src = src;
    return script;
  }

  static createStyle(href) {
    let style = document.createElement('link');
    style.type = 'text/css';
    style.rel = 'stylesheet';
    style.href = href;
    return style;
  }

  static createIFrame(src) {
    let iframe = document.createElement('iframe');
    iframe.src = src;
    return iframe;
  }
}

export default DomUtil;
