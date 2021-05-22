var imageSrc = `data:image/png;base64,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`;
// from r79

/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 */

// This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one finger move
//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
//    Pan - right mouse, or arrow keys / touch: three finter swipe

THREE.OrbitControls = function (object, domElement) {

  this.object = object;

  this.domElement = domElement !== undefined ? domElement : document;

  // Set to false to disable this control
  this.enabled = true;

  // "target" sets the location of focus, where the object orbits around
  this.target = new THREE.Vector3();

  // How far you can dolly in and out ( PerspectiveCamera only )
  this.minDistance = 0;
  this.maxDistance = Infinity;

  // How far you can zoom in and out ( OrthographicCamera only )
  this.minZoom = 0;
  this.maxZoom = Infinity;

  // How far you can orbit vertically, upper and lower limits.
  // Range is 0 to Math.PI radians.
  this.minPolarAngle = 0; // radians
  this.maxPolarAngle = Math.PI; // radians

  // How far you can orbit horizontally, upper and lower limits.
  // If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
  this.minAzimuthAngle = -Infinity; // radians
  this.maxAzimuthAngle = Infinity; // radians

  // Set to true to enable damping (inertia)
  // If damping is enabled, you must call controls.update() in your animation loop
  this.enableDamping = false;
  this.dampingFactor = 0.25;

  // This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
  // Set to false to disable zooming
  this.enableZoom = true;
  this.zoomSpeed = 1.0;

  // Set to false to disable rotating
  this.enableRotate = true;
  this.rotateSpeed = 1.0;

  // Set to false to disable panning
  this.enablePan = true;
  this.keyPanSpeed = 7.0; // pixels moved per arrow key push

  // Set to true to automatically rotate around the target
  // If auto-rotate is enabled, you must call controls.update() in your animation loop
  this.autoRotate = false;
  this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

  // Set to false to disable use of the keys
  this.enableKeys = true;

  // The four arrow keys
  this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

  // Mouse buttons
  this.mouseButtons = { ORBIT: THREE.MOUSE.LEFT, ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT };

  // for reset
  this.target0 = this.target.clone();
  this.position0 = this.object.position.clone();
  this.zoom0 = this.object.zoom;

  //
  // public methods
  //

  this.getPolarAngle = function () {

    return spherical.phi;

  };

  this.getAzimuthalAngle = function () {

    return spherical.theta;

  };

  this.reset = function () {

    scope.target.copy(scope.target0);
    scope.object.position.copy(scope.position0);
    scope.object.zoom = scope.zoom0;

    scope.object.updateProjectionMatrix();
    scope.dispatchEvent(changeEvent);

    scope.update();

    state = STATE.NONE;

  };

  // this method is exposed, but perhaps it would be better if we can make it private...
  this.update = function () {

    var offset = new THREE.Vector3();

    // so camera.up is the orbit axis
    var quat = new THREE.Quaternion().setFromUnitVectors(object.up, new THREE.Vector3(0, 1, 0));
    var quatInverse = quat.clone().inverse();

    var lastPosition = new THREE.Vector3();
    var lastQuaternion = new THREE.Quaternion();

    return function update() {

      var position = scope.object.position;

      offset.copy(position).sub(scope.target);

      // rotate offset to "y-axis-is-up" space
      offset.applyQuaternion(quat);

      // angle from z-axis around y-axis
      spherical.setFromVector3(offset);

      if (scope.autoRotate && state === STATE.NONE) {

        rotateLeft(getAutoRotationAngle());

      }

      spherical.theta += sphericalDelta.theta;
      spherical.phi += sphericalDelta.phi;

      // restrict theta to be between desired limits
      spherical.theta = Math.max(scope.minAzimuthAngle, Math.min(scope.maxAzimuthAngle, spherical.theta));

      // restrict phi to be between desired limits
      spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));

      spherical.makeSafe();


      spherical.radius *= scale;

      // restrict radius to be between desired limits
      spherical.radius = Math.max(scope.minDistance, Math.min(scope.maxDistance, spherical.radius));

      // move target to panned location
      scope.target.add(panOffset);

      offset.setFromSpherical(spherical);

      // rotate offset back to "camera-up-vector-is-up" space
      offset.applyQuaternion(quatInverse);

      position.copy(scope.target).add(offset);

      scope.object.lookAt(scope.target);

      if (scope.enableDamping === true) {

        sphericalDelta.theta *= 1 - scope.dampingFactor;
        sphericalDelta.phi *= 1 - scope.dampingFactor;

      } else {

        sphericalDelta.set(0, 0, 0);

      }

      scale = 1;
      panOffset.set(0, 0, 0);

      // update condition is:
      // min(camera displacement, camera rotation in radians)^2 > EPS
      // using small-angle approximation cos(x/2) = 1 - x^2 / 8

      if (zoomChanged ||
      lastPosition.distanceToSquared(scope.object.position) > EPS ||
      8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {

        scope.dispatchEvent(changeEvent);

        lastPosition.copy(scope.object.position);
        lastQuaternion.copy(scope.object.quaternion);
        zoomChanged = false;

        return true;

      }

      return false;

    };

  }();

  this.dispose = function () {

    scope.domElement.removeEventListener('contextmenu', onContextMenu, false);
    scope.domElement.removeEventListener('mousedown', onMouseDown, false);
    scope.domElement.removeEventListener('wheel', onMouseWheel, false);

    scope.domElement.removeEventListener('touchstart', onTouchStart, false);
    scope.domElement.removeEventListener('touchend', onTouchEnd, false);
    scope.domElement.removeEventListener('touchmove', onTouchMove, false);

    document.removeEventListener('mousemove', onMouseMove, false);
    document.removeEventListener('mouseup', onMouseUp, false);

    window.removeEventListener('keydown', onKeyDown, false);

    //scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?

  };

  //
  // internals
  //

  var scope = this;

  var changeEvent = { type: 'change' };
  var startEvent = { type: 'start' };
  var endEvent = { type: 'end' };

  var STATE = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY: 4, TOUCH_PAN: 5 };

  var state = STATE.NONE;

  var EPS = 0.000001;

  // current position in spherical coordinates
  var spherical = new THREE.Spherical();
  var sphericalDelta = new THREE.Spherical();

  var scale = 1;
  var panOffset = new THREE.Vector3();
  var zoomChanged = false;

  var rotateStart = new THREE.Vector2();
  var rotateEnd = new THREE.Vector2();
  var rotateDelta = new THREE.Vector2();

  var panStart = new THREE.Vector2();
  var panEnd = new THREE.Vector2();
  var panDelta = new THREE.Vector2();

  var dollyStart = new THREE.Vector2();
  var dollyEnd = new THREE.Vector2();
  var dollyDelta = new THREE.Vector2();

  function getAutoRotationAngle() {

    return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

  }

  function getZoomScale() {

    return Math.pow(0.95, scope.zoomSpeed);

  }

  function rotateLeft(angle) {

    sphericalDelta.theta -= angle;

  }

  function rotateUp(angle) {

    sphericalDelta.phi -= angle;

  }

  var panLeft = function () {

    var v = new THREE.Vector3();

    return function panLeft(distance, objectMatrix) {

      v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix
      v.multiplyScalar(-distance);

      panOffset.add(v);

    };

  }();

  var panUp = function () {

    var v = new THREE.Vector3();

    return function panUp(distance, objectMatrix) {

      v.setFromMatrixColumn(objectMatrix, 1); // get Y column of objectMatrix
      v.multiplyScalar(distance);

      panOffset.add(v);

    };

  }();

  // deltaX and deltaY are in pixels; right and down are positive
  var pan = function () {

    var offset = new THREE.Vector3();

    return function pan(deltaX, deltaY) {

      var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

      if (scope.object instanceof THREE.PerspectiveCamera) {

        // perspective
        var position = scope.object.position;
        offset.copy(position).sub(scope.target);
        var targetDistance = offset.length();

        // half of the fov is center to top of screen
        targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180.0);

        // we actually don't use screenWidth, since perspective camera is fixed to screen height
        panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
        panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);

      } else if (scope.object instanceof THREE.OrthographicCamera) {

        // orthographic
        panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
        panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);

      } else {

        // camera neither orthographic nor perspective
        console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.');
        scope.enablePan = false;

      }

    };

  }();

  function dollyIn(dollyScale) {

    if (scope.object instanceof THREE.PerspectiveCamera) {

      scale /= dollyScale;

    } else if (scope.object instanceof THREE.OrthographicCamera) {

      scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom * dollyScale));
      scope.object.updateProjectionMatrix();
      zoomChanged = true;

    } else {

      console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
      scope.enableZoom = false;

    }

  }

  function dollyOut(dollyScale) {

    if (scope.object instanceof THREE.PerspectiveCamera) {

      scale *= dollyScale;

    } else if (scope.object instanceof THREE.OrthographicCamera) {

      scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / dollyScale));
      scope.object.updateProjectionMatrix();
      zoomChanged = true;

    } else {

      console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
      scope.enableZoom = false;

    }

  }

  //
  // event callbacks - update the object state
  //

  function handleMouseDownRotate(event) {

    //console.log( 'handleMouseDownRotate' );

    rotateStart.set(event.clientX, event.clientY);

  }

  function handleMouseDownDolly(event) {

    //console.log( 'handleMouseDownDolly' );

    dollyStart.set(event.clientX, event.clientY);

  }

  function handleMouseDownPan(event) {

    //console.log( 'handleMouseDownPan' );

    panStart.set(event.clientX, event.clientY);

  }

  function handleMouseMoveRotate(event) {

    //console.log( 'handleMouseMoveRotate' );

    rotateEnd.set(event.clientX, event.clientY);
    rotateDelta.subVectors(rotateEnd, rotateStart);

    var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

    // rotating across whole screen goes 360 degrees around
    rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);

    // rotating up and down along whole screen attempts to go 360, but limited to 180
    rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);

    rotateStart.copy(rotateEnd);

    scope.update();

  }

  function handleMouseMoveDolly(event) {

    //console.log( 'handleMouseMoveDolly' );

    dollyEnd.set(event.clientX, event.clientY);

    dollyDelta.subVectors(dollyEnd, dollyStart);

    if (dollyDelta.y > 0) {

      dollyIn(getZoomScale());

    } else if (dollyDelta.y < 0) {

      dollyOut(getZoomScale());

    }

    dollyStart.copy(dollyEnd);

    scope.update();

  }

  function handleMouseMovePan(event) {

    //console.log( 'handleMouseMovePan' );

    panEnd.set(event.clientX, event.clientY);

    panDelta.subVectors(panEnd, panStart);

    pan(panDelta.x, panDelta.y);

    panStart.copy(panEnd);

    scope.update();

  }

  function handleMouseUp(event) {

    //console.log( 'handleMouseUp' );

  }

  function handleMouseWheel(event) {

    //console.log( 'handleMouseWheel' );

    if (event.deltaY < 0) {

      dollyOut(getZoomScale());

    } else if (event.deltaY > 0) {

      dollyIn(getZoomScale());

    }

    scope.update();

  }

  function handleKeyDown(event) {

    //console.log( 'handleKeyDown' );

    switch (event.keyCode) {

      case scope.keys.UP:
        pan(0, scope.keyPanSpeed);
        scope.update();
        break;

      case scope.keys.BOTTOM:
        pan(0, -scope.keyPanSpeed);
        scope.update();
        break;

      case scope.keys.LEFT:
        pan(scope.keyPanSpeed, 0);
        scope.update();
        break;

      case scope.keys.RIGHT:
        pan(-scope.keyPanSpeed, 0);
        scope.update();
        break;}



  }

  function handleTouchStartRotate(event) {

    //console.log( 'handleTouchStartRotate' );

    rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);

  }

  function handleTouchStartDolly(event) {

    //console.log( 'handleTouchStartDolly' );

    var dx = event.touches[0].pageX - event.touches[1].pageX;
    var dy = event.touches[0].pageY - event.touches[1].pageY;

    var distance = Math.sqrt(dx * dx + dy * dy);

    dollyStart.set(0, distance);

  }

  function handleTouchStartPan(event) {

    //console.log( 'handleTouchStartPan' );

    panStart.set(event.touches[0].pageX, event.touches[0].pageY);

  }

  function handleTouchMoveRotate(event) {

    //console.log( 'handleTouchMoveRotate' );

    rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
    rotateDelta.subVectors(rotateEnd, rotateStart);

    var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

    // rotating across whole screen goes 360 degrees around
    rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);

    // rotating up and down along whole screen attempts to go 360, but limited to 180
    rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);

    rotateStart.copy(rotateEnd);

    scope.update();

  }

  function handleTouchMoveDolly(event) {

    //console.log( 'handleTouchMoveDolly' );

    var dx = event.touches[0].pageX - event.touches[1].pageX;
    var dy = event.touches[0].pageY - event.touches[1].pageY;

    var distance = Math.sqrt(dx * dx + dy * dy);

    dollyEnd.set(0, distance);

    dollyDelta.subVectors(dollyEnd, dollyStart);

    if (dollyDelta.y > 0) {

      dollyOut(getZoomScale());

    } else if (dollyDelta.y < 0) {

      dollyIn(getZoomScale());

    }

    dollyStart.copy(dollyEnd);

    scope.update();

  }

  function handleTouchMovePan(event) {

    //console.log( 'handleTouchMovePan' );

    panEnd.set(event.touches[0].pageX, event.touches[0].pageY);

    panDelta.subVectors(panEnd, panStart);

    pan(panDelta.x, panDelta.y);

    panStart.copy(panEnd);

    scope.update();

  }

  function handleTouchEnd(event) {

    //console.log( 'handleTouchEnd' );

  }

  //
  // event handlers - FSM: listen for events and reset state
  //

  function onMouseDown(event) {

    if (scope.enabled === false) return;

    event.preventDefault();

    if (event.button === scope.mouseButtons.ORBIT) {

      if (scope.enableRotate === false) return;

      handleMouseDownRotate(event);

      state = STATE.ROTATE;

    } else if (event.button === scope.mouseButtons.ZOOM) {

      if (scope.enableZoom === false) return;

      handleMouseDownDolly(event);

      state = STATE.DOLLY;

    } else if (event.button === scope.mouseButtons.PAN) {

      if (scope.enablePan === false) return;

      handleMouseDownPan(event);

      state = STATE.PAN;

    }

    if (state !== STATE.NONE) {

      document.addEventListener('mousemove', onMouseMove, false);
      document.addEventListener('mouseup', onMouseUp, false);

      scope.dispatchEvent(startEvent);

    }

  }

  function onMouseMove(event) {

    if (scope.enabled === false) return;

    event.preventDefault();

    if (state === STATE.ROTATE) {

      if (scope.enableRotate === false) return;

      handleMouseMoveRotate(event);

    } else if (state === STATE.DOLLY) {

      if (scope.enableZoom === false) return;

      handleMouseMoveDolly(event);

    } else if (state === STATE.PAN) {

      if (scope.enablePan === false) return;

      handleMouseMovePan(event);

    }

  }

  function onMouseUp(event) {

    if (scope.enabled === false) return;

    handleMouseUp(event);

    document.removeEventListener('mousemove', onMouseMove, false);
    document.removeEventListener('mouseup', onMouseUp, false);

    scope.dispatchEvent(endEvent);

    state = STATE.NONE;

  }

  function onMouseWheel(event) {

    if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE && state !== STATE.ROTATE) return;

    event.preventDefault();
    event.stopPropagation();

    handleMouseWheel(event);

    scope.dispatchEvent(startEvent); // not sure why these are here...
    scope.dispatchEvent(endEvent);

  }

  function onKeyDown(event) {

    if (scope.enabled === false || scope.enableKeys === false || scope.enablePan === false) return;

    handleKeyDown(event);

  }

  function onTouchStart(event) {

    if (scope.enabled === false) return;

    switch (event.touches.length) {

      case 1: // one-fingered touch: rotate

        if (scope.enableRotate === false) return;

        handleTouchStartRotate(event);

        state = STATE.TOUCH_ROTATE;

        break;

      case 2: // two-fingered touch: dolly

        if (scope.enableZoom === false) return;

        handleTouchStartDolly(event);

        state = STATE.TOUCH_DOLLY;

        break;

      case 3: // three-fingered touch: pan

        if (scope.enablePan === false) return;

        handleTouchStartPan(event);

        state = STATE.TOUCH_PAN;

        break;

      default:

        state = STATE.NONE;}



    if (state !== STATE.NONE) {

      scope.dispatchEvent(startEvent);

    }

  }

  function onTouchMove(event) {

    if (scope.enabled === false) return;

    event.preventDefault();
    event.stopPropagation();

    switch (event.touches.length) {

      case 1: // one-fingered touch: rotate

        if (scope.enableRotate === false) return;
        if (state !== STATE.TOUCH_ROTATE) return; // is this needed?...

        handleTouchMoveRotate(event);

        break;

      case 2: // two-fingered touch: dolly

        if (scope.enableZoom === false) return;
        if (state !== STATE.TOUCH_DOLLY) return; // is this needed?...

        handleTouchMoveDolly(event);

        break;

      case 3: // three-fingered touch: pan

        if (scope.enablePan === false) return;
        if (state !== STATE.TOUCH_PAN) return; // is this needed?...

        handleTouchMovePan(event);

        break;

      default:

        state = STATE.NONE;}



  }

  function onTouchEnd(event) {

    if (scope.enabled === false) return;

    handleTouchEnd(event);

    scope.dispatchEvent(endEvent);

    state = STATE.NONE;

  }

  function onContextMenu(event) {

    event.preventDefault();

  }

  //

  scope.domElement.addEventListener('contextmenu', onContextMenu, false);

  scope.domElement.addEventListener('mousedown', onMouseDown, false);
  scope.domElement.addEventListener('wheel', onMouseWheel, false);

  scope.domElement.addEventListener('touchstart', onTouchStart, false);
  scope.domElement.addEventListener('touchend', onTouchEnd, false);
  scope.domElement.addEventListener('touchmove', onTouchMove, false);

  window.addEventListener('keydown', onKeyDown, false);

  // force an update at start

  this.update();

};

THREE.OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype);
THREE.OrbitControls.prototype.constructor = THREE.OrbitControls;

Object.defineProperties(THREE.OrbitControls.prototype, {

  center: {

    get: function () {

      console.warn('THREE.OrbitControls: .center has been renamed to .target');
      return this.target;

    } },



  // backward compatibility

  noZoom: {

    get: function () {

      console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
      return !this.enableZoom;

    },

    set: function (value) {

      console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
      this.enableZoom = !value;

    } },



  noRotate: {

    get: function () {

      console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
      return !this.enableRotate;

    },

    set: function (value) {

      console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
      this.enableRotate = !value;

    } },



  noPan: {

    get: function () {

      console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
      return !this.enablePan;

    },

    set: function (value) {

      console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
      this.enablePan = !value;

    } },



  noKeys: {

    get: function () {

      console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
      return !this.enableKeys;

    },

    set: function (value) {

      console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
      this.enableKeys = !value;

    } },



  staticMoving: {

    get: function () {

      console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
      return !this.enableDamping;

    },

    set: function (value) {

      console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
      this.enableDamping = !value;

    } },



  dynamicDampingFactor: {

    get: function () {

      console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
      return this.dampingFactor;

    },

    set: function (value) {

      console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
      this.dampingFactor = value;

    } } });




prepare(data => {

  let renderer,
  controls,
  scene,
  camera,
  w, h,
  statsFps,
  statsMs;

  const i0 = d3.interpolateHslLong(d3.hsl(0, 0, 0), d3.hsl(0, 0, .5)),
  i1 = d3.interpolateHslLong(d3.hsl(0, 0, .5), d3.hsl(0, 0, 1)),
  interpolateTerrain = function (t) {return t < 0.5 ? i0(t * 2) : i1((t - 0.5) * 2);},
  color = d3.scaleSequential(interpolateTerrain).domain([70, 390]);

  const oi0 = d3.interpolateHsvLong(d3.hsv(120, 1, 0.65), d3.hsv(60, 1, 0.90)),
  oi1 = d3.interpolateHsvLong(d3.hsv(60, 1, 0.90), d3.hsv(0, 0, 0.95)),
  ointerpolateTerrain = function (t) {return t < 0.5 ? oi0(t * 2) : oi1((t - 0.5) * 2);},
  ocolor = d3.scaleSequential(ointerpolateTerrain).domain([70, 390]);

  resize();
  init();
  animate();

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function resize() {
    w = document.body.clientWidth;
    h = document.body.clientHeight;
    if (!camera) {
      return;
    }

    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }

  function init() {

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, w / h, 1, 6000);
    camera.position.z = 100;

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(w, h);
    renderer.setClearColor("#0C7CA5", 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.sortObjects = false;
    renderer.autoClear = false;
    renderer.generateMipmaps = false;

    let light = new THREE.HemisphereLight('#fff', '#eee', 1);
    light.position.set(0, 0, 300);
    light.castShadow = true;
    scene.add(light);

    light = new THREE.PointLight(0x222222, 3);
    light.position.x = 1000;
    light.position.y = 500;
    light.position.z = 1000;
    light.castShadow = true;
    scene.add(light);

    camera.lookAt(scene.position);

    controls = new THREE.OrbitControls(camera, renderer.domElement);

    document.body.appendChild(renderer.domElement);

    statsFps = new Stats();
    document.body.appendChild(statsFps.dom);

    statsMs = new Stats();
    statsMs.showPanel(1);
    document.body.appendChild(statsMs.dom);

    window.addEventListener('resize', resize, false);
    create(scene);
  }

  function create(scene) {
    const geometry = new THREE.PlaneBufferGeometry(87, 61, 128, 128);
    const material = new THREE.MeshPhongMaterial({ /*color: 0x00ff00,*/side: 2 });

    const tex = new THREE.Texture(generateBump(512, 512, data));
    const texMap = new THREE.Texture(generateBump(512, 512, data, true));
    texMap.needsUpdate = true;
    tex.needsUpdate = true;

    material.map = texMap;
    material.displacementMap = tex;
    material.normalMap = texMap;

    material.normalScale = new THREE.Vector2(1, -1);

    material.displacementScale = 40;
    material.displacementBias = -.5;

    const cylinder = new THREE.Mesh(geometry, material);
    cylinder.rotation.x = -.7;
    cylinder.rotation.y = .1;
    cylinder.rotation.z = -.7;

    scene.add(cylinder);
  }

  function animate() {

    requestAnimationFrame(animate);

    update();

    renderer.clear();
    renderer.render(scene, camera);

    controls.update();
    statsFps.update();
    statsMs.update();

  }

  function update() {

  }

  function generateBump(w, h, data, map) {

    let temp = document.createElement('canvas');

    let n = data.width,
    m = data.height;

    temp.width = n;
    temp.height = m;

    let ctx = temp.getContext('2d');

    let image = ctx.createImageData(n, m);

    for (let j = 0, k = 0, l = 0; j < m; ++j) {
      for (let i = 0; i < n; ++i, ++k, l += 4) {
        let c = d3.rgb(map ? ocolor(data.values[k]) : color(data.values[k]));
        image.data[l + 1] = c.r;
        image.data[l + 0] = c.g;
        image.data[l + 2] = c.b;
        image.data[l + 3] = 255;
      }
    }

    ctx.putImageData(image, 0, 0);

    let ttemp = document.createElement('canvas');
    let tctx = ttemp.getContext('2d');

    ttemp.width = w;
    ttemp.height = h;

    tctx.drawImage(temp, 0, 0, w, h);

    let t = new Image();
    t.src = ttemp.toDataURL();

    return ttemp;
  }

});

function prepare(cb) {
  cb(JSON.parse('{"width":18,"height":9,"values":' +
      '[320,246,271,320,295,369,271,246,221,197,172,148,172,197,246,295,344,344,369,369,369,246,369,246,369,369,246,246,246,123,123,123,246,246,246,246,310,310,332,369,310,347,354,369,251,229,214,89,118,148,207,244,354,339,309,369,309,364,277,369,300,346,304,231,161,78,115,175,194,240,327,318,344,344,320,271,344,344,271,369,344,197,123,74,98,123,172,197,271,271,309,341,350,333,369,307,353,324,304,247,205,137,193,238,250,342,320,305,358,349,329,369,325,310,303,354,305,265,229,128,150,200,223,287,356,362,369,369,293,267,267,280,369,369,280,216,153,76,153,204,229,267,280,305,308,308,246,308,246,308,308,369,185,185,185,123,123,123,185,185,246,308]}'));
}
