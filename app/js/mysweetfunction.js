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