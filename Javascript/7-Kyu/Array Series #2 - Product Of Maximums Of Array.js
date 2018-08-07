// Task
// Given an array/list [] of integers , Find the product of the k maximal numbers.
//
// Notes
// Array/list size is at least 3 .
//
// Array/list's numbers Will be mixture of positives , negatives and zeros
//
// Repeatition of numbers in the array/list could occur.
//
// Input >> Output Examples
// 1- maxProduct ({4, 3, 5}, 2) ==>  return (20)
// Explanation:
// Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .

function maxProduct(numbers, size){
  return numbers.sort((a, b) => b - a).slice(0, size).reduce((a, b) => a * b);
}
