// Write function avg which calculates average of numbers in given list.

function find_average(array) {
  let sum = array.reduce((curr, next) => {
    return curr + next
  }, 0)
  return sum / array.length;
}
