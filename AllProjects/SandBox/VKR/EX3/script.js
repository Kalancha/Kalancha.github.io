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
  color = d3.scaleSequential(interpolateTerrain).domain([300, 790]);

  const oi0 = d3.interpolateHsvLong(d3.hsv(120, 1, 0.65), d3.hsv(60, 1, 0.90)),
  oi1 = d3.interpolateHsvLong(d3.hsv(60, 1, 0.90), d3.hsv(0, 0, 0.95)),
  ointerpolateTerrain = function (t) {return t < 0.5 ? oi0(t * 2) : oi1((t - 0.5) * 2);},
  ocolor = d3.scaleSequential(ointerpolateTerrain).domain([300, 790]);

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
        image.data[l + 3] = 250;
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
  cb(JSON.parse('{"width":200,"height":14,"values":' +
      '[752,748,730,752,695,697,721,688,644,668,701,750,701,754,732,708,750,714,747,737,748,756,763,745,756,745,737,719,750,672,657,661,719,684,615,712,708,584,672,673,611,556,560,580,721,646,666,734,736,715,657,743,686,642,719,675,704,697,719,734,752,748,756,750,737,741,743,703,703,679,677,748,752,673,717,653,648,573,575,701,754,714,662,580,531,618,575,532,640,549,470,545,571,640,446,417,737,492,620,600,717,719,648,523,622,565,576,712,743,659,629,640,734,659,748,697,728,754,717,734,730,754,756,750,748,747,714,723,699,712,750,677,710,650,704,659,726,626,679,578,591,681,602,661,514,567,600,642,596,457,721,635,412,600,527,739,626,617,509,604,710,448,300,549,450,419,604,404,565,375,476,675,540,684,443,598,589,650,476,754,635,662,558,576,531,646,721,593,646,741,706,693,706,750,701,745,725,712,710,736,748,739,735,714,728,720,672,679,707,707,685,701,649,698,750,705,744,720,744,731,752,752,763,752,746,722,742,700,681,726,673,659,668,729,733,657,731,606,548,685,519,576,737,675,537,700,606,657,638,709,625,651,675,731,685,729,705,731,731,735,742,741,752,739,752,718,705,687,698,690,741,647,698,700,737,737,733,659,681,705,535,621,707,683,528,474,463,612,444,668,550,588,696,373,599,703,496,466,722,550,543,638,612,519,709,591,619,606,623,636,705,742,709,672,724,687,722,690,731,714,737,746,752,741,744,716,711,714,737,711,657,672,713,690,722,705,590,673,627,629,545,670,595,659,603,616,603,688,509,649,690,606,733,528,476,461,569,750,409,325,694,494,563,578,698,688,722,437,336,571,547,476,644,690,653,423,726,433,457,487,720,713,709,746,610,651,741,571,731,593,632,709,728,703,666,726,683,728,744,720,741,749,741,707,738,710,678,726,659,661,658,705,675,693,688,690,727,748,726,729,748,751,763,751,743,724,744,724,693,739,695,731,670,646,624,636,658,627,676,675,670,579,574,566,564,719,586,751,732,707,697,622,731,661,690,709,702,743,726,741,732,748,751,744,743,719,722,705,734,749,670,681,680,629,658,620,729,749,624,632,590,551,715,590,495,622,498,620,528,615,450,585,748,751,751,692,478,681,715,530,690,578,573,528,670,695,581,590,651,722,743,687,642,729,724,715,726,697,727,741,736,746,751,748,732,749,724,726,715,687,659,702,644,710,680,610,710,581,690,568,585,613,627,620,505,596,661,474,613,476,683,467,508,440,511,374,566,461,403,454,576,658,647,673,710,491,683,624,591,666,568,702,578,590,681,574,583,726,743,654,544,687,528,664,697,646,598,698,641,681,698,681,748,675,659,744,683,739,744,744,748,740,735,739,745,719,705,729,752,667,658,654,748,684,735,714,703,726,745,745,747,757,763,750,757,727,755,727,708,757,739,672,732,692,748,690,612,586,698,703,727,661,711,562,705,591,606,632,742,692,633,721,734,713,755,700,705,711,742,753,735,755,757,752,757,727,742,734,735,724,744,757,648,669,677,710,612,627,619,744,585,609,693,539,617,703,645,611,609,650,452,434,450,755,598,518,556,755,643,559,539,580,664,575,582,564,742,732,616,632,659,643,692,714,690,687,752,711,721,752,750,750,757,753,740,724,727,714,714,737,701,674,726,680,732,697,755,745,672,671,744,676,645,658,711,501,685,514,492,556,663,740,492,462,706,475,643,603,677,444,625,353,667,543,384,682,603,499,627,475,510,517,582,614,663,612,590,716,650,748,585,690,718,739,591,693,603,721,716,713,744,700,724,719,740,716,710,713,714,734,745,734,756,728,748,737,674,672,653,754,750,664,734,695,695,699,730,747,725,754,750,756,763,750,739,750,743,736,714,692,717,736,717,633,723,747,664,703,633,653,643,670,542,754,575,637,748,732,721,670,653,666,632,674,683,748,752,730,743,725,748,745,756,756,748,752,716,747,745,725,734,736,674,677,630,641,604,615,745,695,535,564,566,717,586,635,657,686,542,736,526,391,599,743,440,475,518,664,546,568,719,639,580,743,610,566,706,699,663,653,685,701,701,743,697,685,752,739,708,719,734,747,756,752,743,721,745,732,705,692,725,747,736,703,725,637,747,610,601,721,750,613,570,666,522,655,526,586,588,570,471,405,719,460,639,566,392,378,349,601,601,436,716,628,668,507,356,575,325,737,580,685,674,615,706,602,633,464,639,571,681,705,708,577,562,575,608,566,688,621,719,635,734,730,723,721,725,701,721,736,757,757,746,733,723,737,714,711,736,743,731,742,757,733,747,724,738,734,744,757,752,758,763,754,754,757,733,717,714,747,717,754,699,727,711,723,691,711,638,746,650,596,734,712,608,657,628,673,673,713,737,722,741,711,728,733,729,726,734,744,746,757,758,756,752,749,734,714,743,712,711,741,694,723,706,651,655,721,691,688,617,714,643,672,704,635,581,602,699,588,595,549,648,733,751,701,551,590,679,686,569,597,708,733,718,686,747,635,653,729,711,728,704,752,754,719,723,718,752,754,754,752,758,756,756,733,731,723,751,731,724,749,741,722,732,721,724,722,668,713,645,678,666,724,739,702,734,668,621,596,703,632,694,515,531,741,590,460,676,683,545,506,689,757,655,677,694,456,576,668,713,605,502,559,632,562,623,564,662,586,578,658,758,615,723,621,678,709,665,741,739,673,717,682,704,731,737,743,742,753,753,749,739,748,736,735,755,727,738,705,704,750,701,742,732,743,754,742,754,756,752,758,763,756,752,750,741,737,745,744,736,705,702,689,724,749,745,666,731,742,687,691,633,717,677,740,686,669,737,706,677,737,741,713,734,754,716,736,743,746,752,753,758,751,756,745,737,737,756,725,746,745,723,756,753,733,662,671,686,652,709,701,651,614,640,661,657,730,705,650,625,570,737,640,624,639,577,630,610,729,639,612,726,697,684,723,680,741,682,675,747,715,743,731,724,727,726,738,741,755,744,757,758,752,749,756,744,751,751,719,757,731,689,741,706,714,687,659,730,668,742,676,623,615,653,605,624,704,696,612,672,715,619,739,681,746,633,717,574,519,735,602,589,588,526,681,619,570,713,648,749,649,651,675,628,630,700,651,692,719,746,664,735,751,662,755,726,726,679,736,755,706,690,739,744,713,736,727,749,745,749,737,723,712,721,698,670,658,687,654,707,689,717,700,747,716,733,731,740,737,742,754,763,752,744,721,707,696,723,694,740,712,686,619,631,594,587,645,724,608,680,735,631,543,629,642,716,730,650,624,696,626,737,707,712,687,745,724,735,745,733,752,754,747,737,749,751,747,730,696,737,698,744,638,610,656,601,575,608,591,658,628,740,721,624,587,459,600,724,709,652,561,672,538,552,747,677,549,658,485,652,617,733,731,570,709,603,607,703,749,640,645,670,698,751,682,705,698,724,751,737,749,754,742,742,740,724,716,723,742,675,719,665,665,737,680,698,589,636,591,622,568,701,552,726,751,633,482,735,607,594,663,471,547,392,466,373,440,738,556,406,506,673,524,301,445,638,689,705,561,369,517,469,492,566,436,549,647,636,754,615,737,615,534,654,658,654,624,698,612,643,645,666,705,737,745,742,752,728,723,745,745,730,707,703,712,689,738,664,644,669,691,694,678,691,711,729,711,729,752,747,752,763,749,741,732,738,705,736,750,732,638,631,750,729,640,595,642,589,602,571,521,571,555,752,555,692,683,602,589,720,665,647,720,691,738,702,691,747,720,732,747,752,743,732,745,729,721,734,727,664,638,687,617,606,665,709,577,613,595,573,723,553,673,497,598,539,683,492,589,671,627,600,546,562,615,526,564,669,730,720,526,548,579,655,676,595,651,602,600,698,745,702,678,660,664,729,732,730,743,750,743,752,747,732,736,711,691,734,725,707,700,700,705,609,732,604,694,655,624,700,560,577,618,539,497,456,450,508,568,655,662,461,513,617,598,669,624,425,622,725,691,604,427,506,289,485,412,606,447,633,391,736,577,609,622,694,504,606,727,499,617,560,671,682,615,700,627,687,727,702,747,658,707,674,727,689,705,720,723,752,747,747,751,734,709,744,724,692,753,728,700,750,741,739,758,746,728,735,746,751,759,763,753,744,743,749,757,747,732,716,723,704,756,710,693,691,657,739,647,672,724,646,603,662,744,697,645,662,692,731,749,694,755,717,751,712,731,741,747,757,755,759,758,753,744,743,720,735,705,755,744,756,699,716,696,645,688,746,627,744,634,681,680,692,716,584,668,546,755,737,731,674,558,610,641,564,588,682,715,676,737,690,675,722,651,718,651,660,739,692,712,680,708,753,702,722,737,738,744,757,752,759,757,751,758,741,717,722,746,746,752,692,745,738,650,715,717,670,752,651,684,726,627,727,605,610,750,608,699,634,634,557,678,592,649,549,496,531,613,727,684,456,735,684,613,546,759,605,622,491,653,723,634,709,546,638,582,611,743,625,650,593,739,744,704,643,743,662,660,721,686,693,700,724,708,743,721,727,752,750,750,737,744,740,738,733,694,714,757,689,692,711,694,756,698,741,718,735,756,754,757,763,753,747,753,733,749,734,743,757,738,694,711,707,657,744,660,727,749,751,694,659,602,727,692,679,701,720,675,652,653,730,715,738,731,717,749,743,751,738,754,757,756,738,728,747,728,744,702,743,720,656,647,712,665,625,627,618,750,701,630,599,707,680,557,705,708,565,549,527,479,502,672,624,705,605,695,601,717,543,568,660,618,725,701,631,617,720,720,747,707,679,756,708,750,705,728,721,735,751,756,757,753,749,754,722,733,722,731,678,692,673,698,637,667,691,738,620,621,663,728,620,711,605,756,601,641,527,515,575,489,508,627,469,469,495,473,453,589,659,499,491,371,460,641,411,662,563,749,433,756,711,508,740,746,692,750,578,709,540,721,691,598,581,709,735,753,691,652,733,692,740,720,721,708,725,741,756,750,751,744,751,732,746,732,753,741,744,683,711,741,694,751,738,751,756,732,752,749,753,757,763,753,749,757,722,737,746,730,757,756,710,688,693,656,649,647,651,667,675,596,642,615,665,725,646,719,670,668,664,720,688,716,706,720,752,715,735,732,747,751,757,754,751,731,728,725,710,707,756,725,679,673,672,685,644,710,621,678,649,617,633,585,583,661,591,693,727,568,593,723,683,706,669,683,647,577,596,657,744,738,689,727,658,621,690,653,741,686,711,720,735,722,730,716,714,728,741,753,741,757,757,754,743,748,736,722,757,754,711,712,715,680,675,740,656,691,743,754,685,614,684,628,683,598,670,554,688,682,725,644,607,515,688,602,616,498,679,444,601,689,723,682,448,752,464,731,583,659,707,612,551,552,672,525,726,733,757,583,572,640,727,740,719,741,631,701,642,685,747,726,746,710,689,744,747,737,726,751,748,754,727,755,744,688,755,671,652,654,665,731,716,661,691,752,706,731,755,740,748,757,763,755,737,748,723,748,748,708,729,754,695,697,744,695,744,565,546,661,742,703,554,543,654,612,708,599,592,603,714,735,654,652,748,667,697,740,714,755,755,750,757,754,744,731,706,733,720,739,735,699,733,739,697,676,644,720,667,607,684,544,595,622,590,597,499,748,448,627,680,635,528,405,462,690,424,576,575,495,674,548,746,561,535,590,693,686,654,703,671,614,737,706,748,671,744,699,706,737,746,746,757,750,733,755,737,697,750,750,727,703,716,674,627,661,618,671,625,560,558,712,607,667,593,648,490,605,431,652,659,528,725,537,435,369,467,690,390,644,365,528,463,341,744,305,398,690,384,452,678,712,535,714,569,497,714,582,641,723,556,597,543,659,622,533,690,697,722,605,703,678,722,688,714,744,686,752,754,750,749,749,756,754,758,731,711,688,648,724,627,711,679,713,681,745,724,747,752,756,750,758,763,747,742,734,747,743,738,673,722,656,647,648,742,720,731,684,750,559,742,546,745,720,720,561,672,720,724,652,731,681,697,713,738,679,743,749,716,745,745,752,758,747,756,736,733,749,697,713,707,734,707,622,713,622,618,638,600,641,611,729,609,706,718,573,711,666,527,527,758,648,401,457,525,493,478,553,742,496,541,614,688,663,690,736,561,613,691,720,614,749,742,720,677,702,736,725,749,752,756,750,758,747,743,736,733,756,704,695,699,697,664,654,673,670,716,742,652,559,638,743,579,539,641,473,604,582,725,684,496,489,552,376,661,442,408,509,750,625,373,306,451,700,403,491,541,584,417,630,534,562,401,734,408,484,706,469,718,543,657,733,636,699,688,691,720,618,672,720,720,720,700,736,713,695,740,733,707,729]}'));
}
