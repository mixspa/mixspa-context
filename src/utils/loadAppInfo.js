window.__mixspa__loaded_apps = {};

export const loadAppInfo = (name, app) => {
  if (window.__mixspa__loaded_apps.hasOwnProperty(name)) {
    return Promise.resolve(window.__mixspa__loaded_apps[name]);
  } else {
    let p = (typeof app === 'string') ? fetch(app).then(res => res.json()) : Promise.resolve(app);
    return p.then(info => {
      window.__mixspa__loaded_apps[name] = info;
      return Promise.resolve(info);
    });
  }
};
