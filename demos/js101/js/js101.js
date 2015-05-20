// Canvas context
var ctx = document
  .querySelector('canvas')
  .getContext('2d');

// Fix a stupid context bug that blurs
// the pixels
ctx.translate(0.5, 0.5);

// TODO: Put logic below this

function drawSignalStrength (barX, barY) {
  var barHeight = 25;
  var barWidth = 15;
  var maxHeight = 125;

  // while (barHeight < maxHeight) {
  // while (barHeight >= maxHeight) {
  // while (barHeight == maxHeight) {
  // while (barHeight != maxHeight) {
  while (barHeight <= maxHeight) {
    ctx.fillRect(
      barX,
      barY + maxHeight - barHeight,
      barWidth,
      barHeight);

    barX += 25;
    barHeight = barHeight + 25;
  }
}

drawSignalStrength(0, 100);
drawSignalStrength(150, 200);
drawSignalStrength(300, 300);
