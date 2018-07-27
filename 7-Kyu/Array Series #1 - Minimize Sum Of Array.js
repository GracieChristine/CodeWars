// Task
// Given an array of intgers , Find the minimum sum which is obtained from summing each Two integers product .
//
// Notes
// Array/list will contain positives only .
// Array/list will always has even size
// Input >> Output Examples
// 1- minSum({5,4,2,3}) ==> return (22)
// Explanation:
// The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22

function minSum(arr) {
  arr = arr.sort((a,b) => a - b);
  let sum = 0;
  for(let i = 0; i < arr.length/2; i++)
    sum += arr[i] * arr[arr.length-i-1];
  return sum;
}
