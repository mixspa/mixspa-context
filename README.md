# mixspa-loader
Mixspa-Loader is a Loader for loader another spa in current application.

## Current Status:

[![NPM Version](https://img.shields.io/npm/v/@mixspa/loader.svg)](https://npmjs.org/package/@mixspa/loader)
[![NPM Downloads](https://img.shields.io/npm/dm/@mixspa/loader.svg)](https://npmjs.org/package/@mixspa/loader)
[![Build Status](https://circleci.com/gh/mixspa/mixspa-loader.svg?style=svg)](https://circleci.com/gh/mixspa/mixspa-loader)

[![NPM](https://nodei.co/npm/@mixspa/loader.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/@mixspa/loader/)

## How to use?

There are three ways to load a app.

### 1. Load app from remove site.

**First:** We assume you have a app in remote server, we can use a url to access it. e.g.: `https://www.app-demo.com`

**Second:** We assume you already create a app.json in remote server. e.g.: `https://www.app-demo.com/app.json`

The app.json looks like this:
```js
{
  name: 'AppDemo',
  tagName: 'app-demo',
  styles: ['https://www.app-demo.com/app.js'],
  scripts: ['https://www.app-demo.com/app.css']
}
```

**Third:** You can use MixspaLoader to load app like this:

```html
<html>
  <body>
    <div id="app-container"></div>
  </body>
</html>
```

```js
import MixspaLoader from '@mixspa/loader';

MixspaLoader.loadApp('AppDemo', 'https://www.app-demo.com/app.json').then(appInfo => {
  let el = document.createElement(appInfo.tagName);
  el.attributeOne = 'attribute one';
  document.getElementById('app-container').appendChild(el);
});
```

### 2. Load app from remove site without remote app.json.

You should add app info first when you load app like above

```js
import MixspaLoader from '@mixspa/loader';

MixspaLoader.addAppInfo({
  name: 'AppDemo',
  tagName: 'app-demo',
  styles: ['https://www.app-demo.com/app.js'],
  scripts: ['https://www.app-demo.com/app.css']
});

MixspaLoader.loadApp('AppDemo', 'https://www.app-demo.com/app.json').then(appInfo => {
  let el = document.createElement(appInfo.tagName);
  el.attributeOne = 'attribute one';
  document.getElementById('app-container').appendChild(el);
});
```

### 3. Load a very simple app from remote.

In here, we define the simple app is only have one `js` file.

```js
import MixspaLoader from '@mixspa/loader';

MixspaLoader.loadSimpleApp('https://www.app-simple-demo.com/app.js').then(() => {
  let el = document.createElement('app-simple-demo');
  el.attributeOne = 'attribute one';
  document.getElementById('app-container').appendChild(el);
});
```

NOTE: For simple app, you should provide the `tag name`.


## License

mixspa-loader is released under the [MIT license](https://github.com/mixspa/mixspa-loader/blob/master/LICENSE).
