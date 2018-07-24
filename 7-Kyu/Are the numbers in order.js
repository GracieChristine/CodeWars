// Are the numbers in order?
// In this Kata, your function receives an array of positive integers as input. Your task is to determine whether the numbers are in ascending order.
//
// For the purposes of this Kata, you may assume that all inputs are valid (i.e. arrays containing only positive integers with a length of at least 2).
//
// For example:
//
// in_asc_order({1,2,4,7,19}, 5); // returns true
// in_asc_order({1,2,3,4,5}, 5); // returns true
// in_asc_order({1,6,10,18,2,4,20}, 7); // returns false
// in_asc_order({9,8,7,6,5,4,3,2,1}, 9); // returns false because the numbers are in DESCENDING order

function inAscOrder(arr) {
  // Code your algorithm here :)

  // Hmmm ... maybe we should try our luck out ...
  // if (Math.random() > 0.5) {
  //  return true;
  // } else {
  //  return false;
  // }
}

function inAscOrder(arr) {
 return arr.every((e,i)=>i<arr.length-1?e<arr[i+1]:true);
}

function inAscOrder(arr) {
  return arr.slice(1).every((x, i) => x >= arr[i]);
}

function inAscOrder(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i+1]) {
      return false;
    }
  }
  return true;
}
