import { createScript, createStyle } from './domHelper';

window.__mixspa__loaded_styles = [];
window.__mixspa__loaded_scripts = [];

const loadDom = (dom) => {
  return new Promise((resolve, reject) => {
    dom.onload = resolve;
    dom.onerror = reject;
    document.body.appendChild(dom);
  });
};

export const loadStyles = (urls) => {
  return Promise.all(
    urls.filter(url => !(window.__mixspa__loaded_styles.includes(url)))
      .map(url => loadDom(createStyle(url)).then(() => window.__mixspa__loaded_styles.push(url)))
  );
};

export const loadScripts = (urls) => {
  return Promise.all(
    urls.filter(url => !(window.__mixspa__loaded_scripts.includes(url)))
      .map(url => loadDom(createScript(url)).then(() => window.__mixspa__loaded_scripts.push(url)))
  );
};
