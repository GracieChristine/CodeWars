// Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.
//
// Your function should return true if all elements in the array are square numbers and false if not.
//
// An empty array should return undefined. You can assume that all array elements will be positive integers.
//
// Examples:
//
// isSquare([1, 4, 9, 16]);
// returns true
//
// isSquare([3, 4, 7, 9]);
// returns false
//
// isSquare([]);
// returns undefined

let isSquare = function(arr){
  return (arr.length) ? arr.every(x=>Math.sqrt(x)%1==0) : undefined;
}

let isSquare = (arr) => {
  let count = 0
  if (arr.length != 0) {
    arr.map((value, index) => {
      return (Math.sqrt(value) % 1 === 0)
        ? count
        : count++;
    })
    return (count != 0)
      ? false
      : true;
  } else {
    return undefined;
  }
}
