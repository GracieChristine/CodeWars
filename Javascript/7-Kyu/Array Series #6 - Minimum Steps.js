// Task
// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.
//
// Notes:
// List size is at least 3.
//
// All numbers will be positive.
//
// Numbers could occur more than once , (Duplications may exist).
//
// Threshold K will always be reachable.
//
// Input >> Output Examples
// 1- minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)
// Explanation:
// We add two smallest elements (1 + 2), their sum is 3 .
//
// Then we add the next smallest number to it (3 + 3) , so the sum becomes 6 .
//
// Now the result is greater or equal to 6 , Hence the output is (2) i.e (2) operations are required to do this .

function minimumSteps(numbers, value) {
  let term = 0;
  numbers = numbers.sort((a, b) => a - b);
  for (let i = 0; i < numbers.length; i++) {
    term += numbers[i];
    if (term >= value)
      return i;
    }
  }

function minimumSteps(numbers, value) {
  const nums = numbers.slice().sort((a, b) => a - b);
  for (let i = 0, sum = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum >= value) {
      return i;
    }
  }
}
