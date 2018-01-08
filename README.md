## aframe-observer-component

[![Version](http://img.shields.io/npm/v/aframe-observer-component.svg?style=flat-square)](https://npmjs.org/package/aframe-observer-component)
[![License](http://img.shields.io/npm/l/aframe-observer-component.svg?style=flat-square)](https://npmjs.org/package/aframe-observer-component)

An Observer component for a camera in an A-frame scene.

Attach a view from a camera to a canvas external of the A-frame scene.

Loosely based on [this](https://gist.github.com/derickson/334a48eb1f53f6891c59a2c137c180fa) example.

For [A-Frame](https://aframe.io).

![observer example](https://raw.githubusercontent.com/micataudella/aframe-observer-component/master/img/screenshot.png)

### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
| canvas   | selector of the HTML element where the canvas with the camera view is going to be attached | '' |
| fps      | desired FPS of observer display | 30.0 |

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
  <a-scene embedded>
    <a-sky color="#ECECEC"></a-sky>
    <a-box 
      position="-1 0.5 1" 
      rotation="0 45 0" 
      width="1" height="1" depth="1"  
      color="#4CC3D9"></a-box>
    <a-plane 
      rotation="-90 0 0" 
      width="4" height="4" 
      color="#7BC8A4"></a-plane>

    <a-entity
      id="mainCamera"
      position="0 0 3.8"
      camera
      active
      look-controls></a-entity>

    <a-entity
      id="observerCamera"
      position="2 1.8 4.8"
      rotation="-20 45 0"
      camera
      observer="canvas: #cameraObserver;"
      active="false"></a-entity>
  </a-scene>
  <div id="cameraObserver"></div>
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
