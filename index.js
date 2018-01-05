/* global AFRAME */

if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

/**
 * Observer component for A-Frame.
 */
AFRAME.registerComponent('observer', {
  schema: {
    // selector of the HTML element where the canvas with the camera view is going to be attached
    canvas: {
      type: 'string',
      default: ''
    },
    // desired FPS of observer display
    fps: {
      type: 'number',
      default: '30.0'
    }
  },

  /**
   * Set if component needs multiple instancing.
   */
  multiple: false,

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function () {
    var targetEl = document.querySelector(this.data.canvas);
    this.counter = 0;
    this.renderer = new THREE.WebGLRenderer( { antialias: true } );
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( targetEl.offsetWidth, targetEl.offsetHeight );
    // creates canvas
    targetEl.appendChild(this.renderer.domElement)
  },

  /**
   * Called when component is attached and when component data changes.
   * Generally modifies the entity based on the data.
   */
  update: function (oldData) { },

  /**
   * Called when a component is removed (e.g., via removeAttribute).
   * Generally undoes all modifications to the entity.
   */
  remove: function () { },

  /**
   * Called on each scene tick.
   */
  tick: function (t, delta) {
    var loopFPS = 1000.0 / delta;
    var hmdIsXFasterThanDesiredFPS = loopFPS / this.data.fps;
    var renderEveryNthFrame = Math.round(hmdIsXFasterThanDesiredFPS);
    if (this.counter % renderEveryNthFrame === 0) {
      this.render(delta);
    }
    this.counter += 1;
  },

  render: function() {
    this.renderer.render( this.el.sceneEl.object3D , this.el.object3DMap.camera );
  },

  /**
   * Called when entity pauses.
   * Use to stop or remove any dynamic or background behavior such as events.
   */
  pause: function () { },

  /**
   * Called when entity resumes.
   * Use to continue or add any dynamic or background behavior such as events.
   */
  play: function () { }
});
