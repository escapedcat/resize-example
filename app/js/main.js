var breakpoint = require('./breakpoint.js');
var mySweetFunc = require('./mysweetfunction.js');

mySweetFunc();


var resizeTimer;
window.addEventListener('resize', resize);

function resize() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {

    // Run code here, resizing has "stopped"
    console.info("resize event detected!");
    mySweetFunc();
        
  }, 250);  
}

