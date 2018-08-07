// Write the function squareArea(A) (square_area($A) in PHP) that finds the area of the red square when you have the length of the circular arc A.

function squareArea(A) {
  return Number(Math.pow(2 * A / 3.1416, 2).toFixed(2));
};

module.exports = squareArea;
