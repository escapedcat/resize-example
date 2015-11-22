/**
 * stolen from:
 * https://www.lullabot.com/articles/importing-css-breakpoints-into-javascript
 */

var breakpoint = {};
breakpoint.refreshValue = function () {
  this.value = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
};

module.exports = breakpoint;