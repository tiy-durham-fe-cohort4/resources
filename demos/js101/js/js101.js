// Get the canvas context
var ctx = document
  .querySelector('canvas')
  .getContext('2d');

// Fix a stupid context bug that blurs
// the pixels
ctx.translate(0.5, 0.5);

//
// TODO: Put all drawing logic and shtuff here...
//
