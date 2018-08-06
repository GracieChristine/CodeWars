// There is an array with some numbers. All numbers are equal except for one. Try to find it!
//
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.

function findUniq(arr) {
  let unique = [];

  let sorted = arr.sort((a,b) => a - b);

  sorted.map((val, index) => {
    if (val !== sorted[index + 1] && val !== sorted[index - 1]) {
      unique.push(val);
    }
  })
  return unique[0];
}
