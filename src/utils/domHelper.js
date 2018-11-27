export const createScript = (src) => {
  let script = document.createElement('script');
  script.type = 'text/javascript';
  script.charset = 'UTF-8'
  script.src = src;
  return script;
};

export const createStyle = (href) => {
  let style = document.createElement('link');
  style.type = 'text/css';
  style.rel = 'stylesheet';
  style.href = href;
  return style;
}
