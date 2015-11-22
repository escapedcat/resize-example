(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * stolen from:
 * https://www.lullabot.com/articles/importing-css-breakpoints-into-javascript
 */

var breakpoint = {};
breakpoint.refreshValue = function () {
  this.value = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
};

module.exports = breakpoint;
},{}],2:[function(require,module,exports){
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


},{"./breakpoint.js":1,"./mysweetfunction.js":3}],3:[function(require,module,exports){
var breakpoint = require('./breakpoint.js');

var mySweetFunc = function() {
  breakpoint.refreshValue();
  console.log('mysweetfunc', breakpoint);

  if (breakpoint.value === 'smartphone') {
    console.info('breakpoint: DO IT!');
  } else {
    console.warn('breakpoint: so not the correct breakpoint');
  }
}

module.exports = mySweetFunc;
},{"./breakpoint.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvYnJlYWtwb2ludC5qcyIsImFwcC9qcy9tYWluLmpzIiwiYXBwL2pzL215c3dlZXRmdW5jdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogc3RvbGVuIGZyb206XG4gKiBodHRwczovL3d3dy5sdWxsYWJvdC5jb20vYXJ0aWNsZXMvaW1wb3J0aW5nLWNzcy1icmVha3BvaW50cy1pbnRvLWphdmFzY3JpcHRcbiAqL1xuXG52YXIgYnJlYWtwb2ludCA9IHt9O1xuYnJlYWtwb2ludC5yZWZyZXNoVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMudmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksICc6YmVmb3JlJykuZ2V0UHJvcGVydHlWYWx1ZSgnY29udGVudCcpLnJlcGxhY2UoL1xcXCIvZywgJycpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBicmVha3BvaW50OyIsInZhciBicmVha3BvaW50ID0gcmVxdWlyZSgnLi9icmVha3BvaW50LmpzJyk7XG52YXIgbXlTd2VldEZ1bmMgPSByZXF1aXJlKCcuL215c3dlZXRmdW5jdGlvbi5qcycpO1xuXG5teVN3ZWV0RnVuYygpO1xuXG5cbnZhciByZXNpemVUaW1lcjtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemUpO1xuXG5mdW5jdGlvbiByZXNpemUoKSB7XG4gIGNsZWFyVGltZW91dChyZXNpemVUaW1lcik7XG4gIHJlc2l6ZVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgIC8vIFJ1biBjb2RlIGhlcmUsIHJlc2l6aW5nIGhhcyBcInN0b3BwZWRcIlxuICAgIGNvbnNvbGUuaW5mbyhcInJlc2l6ZSBldmVudCBkZXRlY3RlZCFcIik7XG4gICAgbXlTd2VldEZ1bmMoKTtcbiAgICAgICAgXG4gIH0sIDI1MCk7ICBcbn1cblxuIiwidmFyIGJyZWFrcG9pbnQgPSByZXF1aXJlKCcuL2JyZWFrcG9pbnQuanMnKTtcblxudmFyIG15U3dlZXRGdW5jID0gZnVuY3Rpb24oKSB7XG4gIGJyZWFrcG9pbnQucmVmcmVzaFZhbHVlKCk7XG4gIGNvbnNvbGUubG9nKCdteXN3ZWV0ZnVuYycsIGJyZWFrcG9pbnQpO1xuXG4gIGlmIChicmVha3BvaW50LnZhbHVlID09PSAnc21hcnRwaG9uZScpIHtcbiAgICBjb25zb2xlLmluZm8oJ2JyZWFrcG9pbnQ6IERPIElUIScpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUud2FybignYnJlYWtwb2ludDogc28gbm90IHRoZSBjb3JyZWN0IGJyZWFrcG9pbnQnKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG15U3dlZXRGdW5jOyJdfQ==
