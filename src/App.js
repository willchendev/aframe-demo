import AFRAME from 'aframe';
require('aframe');
require('aframe-event-set-component');

AFRAME.registerComponent('change-color-on-hover', {
  schema: {
    color: {default: 'red'}
  },

  init: function () {
    var data = this.data;
    var el = this.el;  // <a-box>
    var defaultColor = el.getAttribute('material').color;

    el.addEventListener('mouseenter', function () {
      el.setAttribute('color', data.color);
    });

    el.addEventListener('mouseleave', function () {
      el.setAttribute('color', defaultColor);
    });
  }
});

function App() {
  return (  
  <a-scene cursor="rayOrigin: mouse">

    <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" shadow
      change-color-on-hover="color: blue">
    </a-box>

    <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E" shadow
      event-set__enter="_event: mouseenter; color: #026fc9"
      event-set__leave="_event: mouseleave; color: #EF2D5E"
      animation="property: position; dir: alternate; from: 0 1.25 -5; to: 0 2 -5; dur: 500; startEvents: click; loop: 2;">
    </a-sphere>

    <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4" shadow></a-plane>

    <a-sky color="#ECECEC"></a-sky>

  </a-scene>
  )
}

export default App;
