// An arrow is formed in a rectangle with sides a and b by joining the bottom corners to the midpoint of the top edge and the centre of the rectangle.
//
// a and b are integers and > 0
//
// Write a function arrowArea/arrow_area, which returns the area of the arrow, rounded to two decimal places.

let arrowArea = (a,b) => {
  return parseFloat(((a * b) - (((b * a) / 2.00) + ((b * (a / 2.00)) / 2.00))).toFixed(2));
}
