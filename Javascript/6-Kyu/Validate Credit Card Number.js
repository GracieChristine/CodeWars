// Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.
//
// Here is the algorithm:
//
// Double every other digit, scanning from right to left, starting from the second digit (from the right).
//
// Another way to think about it is: if there are an even number of digits, double every other digit starting with the first; if there are an odd number of digits, double every other digit starting with the second:
//
// 1714 ==> [1*, 7, 1*, 4] ==> [2, 7, 2, 4]
//
// 12345 ==> [1, 2*, 3, 4*, 5] ==> [1, 4, 3, 8, 5]
//
// 891 ==> [8, 9*, 1] ==> [8, 18, 1]
// If a resulting number is greater than 9, replace it with the sum of its own digits (which is the same as subtracting 9 from it):
//
// [8, 18*, 1] ==> [8, (1+8), 1] ==> [8, 9, 1]
//
// or:
//
// [8, 18*, 1] ==> [8, (18-9), 1] ==> [8, 9, 1]
// Sum all of the final digits:
//
// [8, 9, 1] ==> 8 + 9 + 1 = 18
// Finally, take that sum and divide it by 10. If the remainder equals zero, the original credit card number is valid.
//
//   18 (modulus) 10 ==> 8 , which is not equal to 0, so this is not a valid credit card number

function validate(n) {
  let num = n + '';
  let numlist = [];

  for (let i = 0; i < num.length; i++) {
    numlist.push(Number(num[i]));
  }

  let doubled = doubleNum(numlist);

  doubled = doubled.map(function(i) {
    return i > 9
      ? i - 9
      : i;
  });

  let summed = doubled.reduce(function(prev, curr, ind) {
    return (prev + curr) % 10;
  }, 0);

  return summed !== 0
    ? false
    : true;

  function doubleNum(arr) {
    return !(arr.length % 2)
      ? isEven(arr)
      : isOdd(arr);
  }

  function isEven(arr) {
    let evenarr = [];
    for (let i = 0; i < arr.length; i++) {
      if (i % 2) {
        evenarr.push(arr[i]);
      } else {
        evenarr.push(arr[i] * 2);
      }
    }
    return evenarr;
  }

  function isOdd(arr) {
    let oddarr = [];
    for (let j = 0; j < arr.length; j++) {
      if (j % 2) {
        oddarr.push(arr[j] * 2);
      } else {
        oddarr.push(arr[j]);
      }
    }
    return oddarr;
  }
}

function validate(n) {
  let sum = 0;

  while (n > 0) {
    let a = n % 10;
    n = Math.floor(n / 10);

    let b = (n % 10) * 2;
    n = Math.floor(n / 10);

    if (b > 9) {
      b -= 9;
    }

    sum += a + b;
  }

  return sum % 10 == 0;
}

function validate(n) {
  n = n.toString().split('').map(Number).reverse();
  return n.reduce(function(sum, digit, index) {
    if (index & 1)
      digit <<= 1;
    if (digit > 9)
      digit -= 9;
    return sum + digit;
  }, 0) % 10 == 0;
}
