;(function() {

  "use strict";

  // create gridOverlay element
  var gridOverlay = document.createElement('div');

  // assign id to gridOverlay element
  gridOverlay.id = 'gridOverlay';

  // style gridOverlay element
  gridOverlay.className='grid-overlay';

  // add grid container to page
  document.body.appendChild(gridOverlay);

  // enable toggling of grid visibility with 'G' key
  document.addEventListener('keyup', function (e) {
    if (e.keyCode === 71) {
      if (gridOverlay.style.display === 'none') {
        gridOverlay.style.display = 'block';
      } else {
        gridOverlay.style.display = 'none';
      }
    }
  });

  // enable toggling of text highlighting with 'T' key
  document.addEventListener('keyup', function (e) {
    if (e.keyCode === 84) {
      document.body.classList.toggle('text-overlay')
    }
  });

})();
