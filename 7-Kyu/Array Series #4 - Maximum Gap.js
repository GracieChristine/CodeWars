// Task
// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.
//
// Notes
// Array/list size is at least 3 .
//
// Array/list's numbers Will be mixture of positives and negatives also zeros_
//
// Repeatition of numbers in the array/list could occur.
//
// The Maximum Gap is computed Regardless the sign.
//
// Input >> Output Examples
// 1- maxGap ({13,10,5,2,9}) ==> return (4)
// Explanation:
// The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 .

function maxGap (numbers){
  let sort = numbers.sort((a,b) => a-b), arr = [];
  for(let i=1; i < sort.length; i++)
    arr.push(numbers[i] - numbers[i-1]);
  return Math.max(...arr);
}
