## aframe-observer-component

[![Version](http://img.shields.io/npm/v/aframe-observer-component.svg?style=flat-square)](https://npmjs.org/package/aframe-observer-component)
[![License](http://img.shields.io/npm/l/aframe-observer-component.svg?style=flat-square)](https://npmjs.org/package/aframe-observer-component)

An Observer component for a camera in an A-frame scene

For [A-Frame](https://aframe.io).

### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
|          |             |               |

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.6.0/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-observer-component/dist/aframe-observer-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity observer="foo: bar"></a-entity>
  </a-scene>
</body>
```

#### npm

Install via npm:

```bash
npm install aframe-observer-component
```

Then require and use.

```js
require('aframe');
require('aframe-observer-component');
```
